"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema =  Schema({
    name: String,
    price: {type: Number, default: 0},
    description: String,
    picture: String,
    category: { type: String, enum: ["computers", "phones", "accesories"] },
})

const Product = mongoose.model("Product", productSchema)