import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import productsRoute from "./routes/products.route"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use("/api/v1", productsRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
