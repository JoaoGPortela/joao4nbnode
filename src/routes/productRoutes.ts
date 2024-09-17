import { Router } from "express";
import { getProducts, addProduct } from "../controllers/productController";

const router = Router();

router.get("/product", getProducts);
router.post("/product", addProduct);

export default router;
