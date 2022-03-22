const ProductController = require('../controllers/product.controller');


module.exports = (app) => {
    app.get('/api/hello', ProductController.helloWorld);
    app.get('/api/product', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:_id', ProductController.getOneProduct);
    app.put('/api/product/:_id', ProductController.updateOneProduct);
    app.delete('/api/product/:_id', ProductController.deleteOneProduct);
}