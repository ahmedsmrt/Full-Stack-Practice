const express = require("express")
const dotenv = require('dotenv').config()
const port = process.env.EXPRESS_PORT



const app = express()

app.listen(port, () => console.log(`Server is started on port ${port}`))