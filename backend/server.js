const express = require("express")
const dotenv = require('dotenv').config()
const port = process.env.EXPRESS_PORT

const path = "blogpost"


const app = express()

app.use(`/api/${path}`, require('./routes/blogRoutes'))

app.listen(port, () => console.log(`Server is started on port ${port}`))