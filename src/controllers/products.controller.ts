import { Request, Response } from "express"
import { catchAsync } from "./../utils/catchAsync"
import { db } from "./../models"
import { productsTable } from "./../models/schemas/productSchema"
import { and, eq, gt } from "drizzle-orm"
import * as productsT from "./../models/schemas/productSchema"
import { drizzle } from "drizzle-orm/node-postgres"

const tt = drizzle(process.env.DATABASE_URL!, { schema: { ...productsT } })

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  //select name, price from products limit 2
  // const products = await db
  //   .select({
  //     name: productsTable.name,
  //     price: productsTable.price,
  //   })
  //   .from(productsTable)
  //   .limit(2)

  //select * from products limit 2
  // const products = await db
  //   .select()
  //   .from(productsTable)

  //select * from products where name = 'Ama'

  // const products = await db
  //   .select()
  //   .from(productsTable)
  //   .where(eq(productsTable.name, "Ama"))

  //Multiple conditions
  // const products = await db
  //   .select()
  //   .from(productsTable)
  //   .where(and(eq(productsTable.name, "Kofi"), gt(productsTable.price, 266)))

  //Drizzle-queries

  // const products = await tt.query.productsTable.findFirst() //Finds the first item
  // const products = await tt.query.productsTable.findMany() //Finds all the items
  const products = await tt.query.productsTable.findMany({
    columns: {
      name: true,
      price: true,
      id: true,
    },
  }) 

  return res.status(200).json(products)
})
const getProductById = catchAsync(async (req: Request, res: Response) => {})
const updateProduct = catchAsync(async (req: Request, res: Response) => {})

const createProduct = catchAsync(async (req: Request, res: Response) => {})
const deleteProduct = catchAsync(async (req: Request, res: Response) => {})

export {
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
}
