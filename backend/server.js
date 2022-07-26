const express = require("express")
const colors = require("colors")
const dotenv = require('dotenv').config()

const path = "blogpost"

const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const port = process.env.EXPRESS_PORT

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(`/api/${path}`, require('./routes/blogRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server is started on port ${port}`))