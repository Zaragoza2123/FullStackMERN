const express = require('express');
const app = express();
const port = 8000;

//allow backend to talk to front
const cors = require('cors');
    
app.use(cors());
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );

//infrom server to run the config folder file for the connection to mongoDb using mongoose
require("./server/config/mongoose.config")

//infrom server to connect to the route
require("./server/routes/product.route")(app)



app.listen(port, () => console.log(`Listening on port: ${port}`) );