const Product = require('../models/product.model');

module.exports.helloWorld = (req,res)=>{
    res.json({msg:"hello world"})
}
module.exports.getAllProducts = (req, res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err => res.json({message: "something went wrong", error: err}));
        
}

module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct})
        })
        .catch(err => res.json({message: "something went wrong", error: err}));
}
module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
    .then(oneProduct=>{
        res.json({results: oneProduct})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.updateOneProduct = (req,res) => {
    Product.findOneAndUpdate(
        {_id: req.params._id},
        req.body
    )
    .then(updatedProduct=>{
        res.json({results: updatedProduct})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.deleteOneProduct = (req,res) => {
    Product.findOneAndDelete(
        {_id: req.params._id}
    )
    .then(deleteOneProduct=>{
        res.json({results: deleteOneProduct})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}
