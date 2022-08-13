"use strict"

const express = require("express") 
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/api/product", (req, res) => {
    res.send(200, {products: []})
} )

app.get ('/api/product/:productID', (req, res) => {
    res.send(200, {product: []})
})

app.post("/api/product", (req, res) => {
    console.log(req.body)
    res.send(200, {message: "el producto se ha posteado"})
})


app.put("/api/product/:productID", (req, res) => {})

app.delete("/api/product/:productID", (req, res) => {})

app.listen(3001, () => {
    console.log(`Server is running on port ${port}`)
} )