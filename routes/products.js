const express = require("express");
const productModel = require("../models/products");
const productRoute = express.Router();

productRoute.get('/products', async (req, res) => {
    const { page } = req.query;
    productModel
        .find()
        .skip((page - 1) * 10)
        .limit(10)
        .then((products) => {
            res.send(products);
        })
        .catch((err) => {
            res.status(500).send(err.message)
        });
})

productRoute.post('/add-product', (req, res) => {
    const productDetails = req.body;
    const { name, sku, condition, cost, status } = productDetails;
    productModel.create({ name, sku, condition, cost, status })
        .then(() => {
        return res.json({message: 'Product added'})
        })
        .catch((err) => {
        res.status(500).send(err.message)
    })
})

module.exports = productRoute;