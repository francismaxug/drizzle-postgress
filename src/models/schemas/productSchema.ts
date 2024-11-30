import { InferSelectModel } from "drizzle-orm"
import {
  varchar,
  integer,
  pgTable,
  uuid,
  timestamp,
  text,
  doublePrecision,
} from "drizzle-orm/pg-core"

export const productsTable = pgTable("products", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 30 }).notNull(),
  price: doublePrecision().notNull(),
  description: text(),
  image: varchar({ length: 256 }),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
})

export type ProductsTable = InferSelectModel<typeof productsTable>
