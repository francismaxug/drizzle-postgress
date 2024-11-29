import { Router } from "express"
import {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct
} from "./../controllers/products.controller"

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.post("/products", createProduct)
router.patch("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

export default router
