import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";
import { handleInputErrors } from "./modules/middleware";
// import handleInputErrors from "./modules/middleware";

const router = Router();

/**
 * PRODUCT
 */
router.get("/product", getProducts);

router.get("/product/:id", getOneProduct);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);

router.delete("/product/:id", deleteProduct);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

/**
 * UPDATE
 */
router.get("/update", getUpdates);

router.get("/update/:id", getOneUpdate);

router.put(
  "/update/:id",
  body("body").optional(),
  body("title").optional(),
  body("version").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  updateUpdate
);

router.delete("/update/:id", deleteUpdate);

router.post(
  "/update",
  body("body").exists().isString(),
  body("title").exists().isString(),
  createUpdate
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
