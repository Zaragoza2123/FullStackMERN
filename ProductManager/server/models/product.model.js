const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    //_id is automaticlly created for each 
    title:{
        type: String,
        required: [true, "Label of product is required"],
        minlength: [3,"Title of product must be at least 3 characters long"]
    },
    price:{
        type: Number,
        required: [true, "Price of product is required"],
        minlength: [2, "Price must be at least 2 characters long"]
    },
    description:{
        type: String,
        required: [true, "Description of product is required"],
        minlength: [6,"Description of product must be at least 6 characters long"]
    }
}, {timestamps: true}
)

//give access to mongoDB
const Product = mongoose.model('Product', ProductSchema );

module.exports = Product;