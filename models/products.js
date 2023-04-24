const mongoose = require("mongoose");

// creating a schema
const Schema = mongoose.Schema;

const productModel = new Schema({
    timestamp: {
		type: Date,
		default: Date.now,
	},
	name: {
		type: String,
		required: true,
	},
	sku: {
		type: String,
		required: true,
	},
	condition: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		required: true,
	},
	statue: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("products", productModel);
