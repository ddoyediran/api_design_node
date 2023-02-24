import prisma from "../db";

// Get all updates
export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);

  res.json({ data: updates });
};

// Get a specific update
export const getOneUpdate = async (req, res) => {
  const updates = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: updates });
};

// Delete a specific update
export const deleteUpdate = async (req, res) => {
  const deleteUpdated = await prisma.update.delete({
    where: {
      //   id_belongsToId: {
      //     id: req.params.id,
      //     belongsToId: req.user.id,
      //   },
    },
  });

  res.json({ data: deleteUpdated });
};

// to create a new update
const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.id,
    },
  });

  if (!product) {
    return res.status(404).json({ mesaage: "product not found!" });
  }

  const update = await prisma.update.create({
    data: req.body,
  });

  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {};
