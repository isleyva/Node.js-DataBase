"use strict"

const express = require("express") 
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
} )