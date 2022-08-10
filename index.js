"use strict"

const express = require("express") 
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/person/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`)
} )

app.listen(3001, () => {
    console.log(`Server is running on port ${port}`)
} )