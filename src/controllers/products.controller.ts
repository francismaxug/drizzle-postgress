import { Request, Response } from "express"

const getAllProducts = async (req: Request, res: Response) => {
  try {
    res.send("Hello World??")
  } catch (error) {
    console.log(error)
  }
}

const getProductById = async (req: Request, res: Response) => {
  try {
    res.send("Get Product By Id")
  } catch (error) {
    console.log(error)
  }
}
const updateProduct = async (req: Request, res: Response) => {
  try {
    res.send("update Product")
  } catch (error) {
    console.log(error)
  }
}
const createProduct = async (req: Request, res: Response) => {
  try {
    res.send("Create Product")
  } catch (error) {
    console.log(error)
  }
}
const deleteProduct = async (req: Request, res: Response) => {
  try {
    res.send("Create Product")
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
}
