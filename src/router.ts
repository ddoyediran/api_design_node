import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
// import handleInputErrors from "./modules/middleware";

const router = Router();

/**
 * PRODUCT
 */
router.get("/product", () => (req, res) => {
  res.json({ message: "Working" });
});

router.get("/product/:id", () => {});

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.delete("/product/:id", () => {});

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

/**
 * UPDATE
 */
router.get("/update", () => {});

router.get("/update/:id", () => {});

router.put(
  "/update/:id",
  body("body").optional(),
  body("title").optional(),
  body("version").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400);
      res.json({ error: errors.array() });
    }
  }
);

router.delete("/update/:id", () => {});

router.post(
  "/update",
  body("body").exists().isString(),
  body("title").exists().isString(),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400);
      res.json({ error: errors.array() });
    }
  }
);

/**
 * UPDATE POINT
 */
router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);

export default router;
