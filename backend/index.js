const express = require('express');
const fs = require('fs').promises;
const mongoose = require('mongoose');
const OrderModel = require('./models/Order');
const RecModel = require('./models/Recipient');
const VolModel = require('./models/Volunteer');

const { GridFSBucketWriteStream } = require('mongodb');


const app = express();
app.use(express.json());
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

app.get('/', async (req, res)=>{
    //res.send(await fs.readFile("..", "utf-8"));
    
   
});




//connect to db
mongoose.connect("mongodb+srv://testboy:testboy@rest.tmyts.mongodb.net/rest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('connected to DB');
});

//listen
app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});
