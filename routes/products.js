const express = require("express");
const productModel = require("../models/products");
const productRoute = express.Router();

productRoute.get('/approved-products', async (req, res) => {
    const { page } = req.query;
    productModel
        .find({status: 'Approved'})
        .skip((page - 1) * 10)
        .limit(10)
        .then((products) => {
            res.send(products);
        })
        .catch((err) => {
            res.status(500).send(err.message)
        });
})

productRoute.get("/pending-products", async (req, res) => {
  const { page } = req.query;
  productModel
    .find({ status: "Not Approved" })
    .skip((page - 1) * 10)
    .limit(10)
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

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

productRoute.put('/:sku/approve', (req, res) => {
    const sku = req.params.sku;
    productModel
      .findOneAndUpdate({ sku: sku }, { status: "Approved" })
      .then(() => {
        res.status(200).send({ message: "successfully approved" });
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
})

module.exports = productRoute;