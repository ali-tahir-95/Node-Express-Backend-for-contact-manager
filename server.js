const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler=require('./Middleware/errorHandler');
const connectdb = require('./Config/dbConnection');

// Creating Express App
const app = express();
const port=process.env.PORT||+ 5000;

// Using Middleware
app.use(express.json());
app.use('/contacts',require("./Routes/ContactsRoute"));
app.use(errorHandler)

// MongoDB connection Function
connectdb();

// Listening to Changes (main function)
app.listen(port,()=>{
    console.log(`listening on ${port}`);
});


// Actual way of GET method call
// app.get("/contacts",(req, res) => {
//     res.json({success:"is Inevitable"})
// })