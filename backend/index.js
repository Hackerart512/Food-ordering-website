const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const connectToMogoose= require('./database');

app.use(express.json());
app.use(cors());

// Available routes

//login, signup, middleware1 three routes in one file
app.use('/api/auth',require('./src/routers/auth'));

app.use('/food',require('./src/routers/food'));

app.use('/food/type',require('./src/routers/foodtype'));

app.use('/api/admin',require('./src/routers/admin'));

app.use('/cart',require('./src/routers/shopping_cart'));

// app.use('/food/order',require('./src/routers/order'));




app.get('/', function(req, res){
    res.send("Hello");
})


// http://localhost:5000/ send hello msg then when start nodemon index.js
app.listen(port, function(){
    console.log(`localhost:${port}`);
})