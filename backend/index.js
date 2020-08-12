const express = require('express');
const fs = require('fs').promises;
const mongoose = require('mongoose');
const OrderModel = require('./models/Order');
const { GridFSBucketWriteStream } = require('mongodb');


const app = express();
app.use(express.json());


app.get('/', async (req, res)=>{


    //res.send(await fs.readFile("..", "utf-8"));
    
    const order = new OrderModel({
        recipient: "Bob",
        items: ["Apple", "Banana"]
    })

    order.save()
    .then(data => {
        console.log('order saved');
        res.json(data);
    })
    .catch(err =>{
        console.log('error occured');
        res.send('500 Error');
    })
    
});




//connect to db
mongoose.connect("mongodb+srv://testboy:testboy@rest.tmyts.mongodb.net/rest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('connected to DB');
});

//listen
app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});
