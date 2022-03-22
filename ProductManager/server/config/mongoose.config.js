//connect to mongoDB utilizing mongoose
const mongoose = require('mongoose');


// can copy this for all projects only change would be the jokes_db to the new name 
mongoose.connect('mongodb+srv://Zaragoza2123:root@mern-cluster.c9hbt.mongodb.net/product_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database')) //connection sucessful if this is in the console
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

