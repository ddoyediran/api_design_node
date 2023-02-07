import { Router } from "express";

const router = Router();

/**
 * PRODUCT
 */
router.get("/product", () => (req, res) => {
  res.json({ message: "Working" });
});

router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});
router.post("/product", () => {});

/**
 * UPDATE
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});
router.post("/update", () => {});

/**
 * UPDATE POINT
 */
router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});

export default router;
