const express = require('express');
const fs = require('fs').promises;
const mongoose = require('mongoose');
const OrderModel = require('./models/Order');
const UserModel = require('./models/User');

const { GridFSBucketWriteStream } = require('mongodb');


const app = express();
app.use(express.json());
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

app.get('/', async (req, res)=>{
    //res.send(await fs.readFile("..", "utf-8"));
    
    /*
    
    const order = new UserModel({
        username: "Bob",
        password: "password123",
        name: "Bob Smith"
    })

    order.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        console.log('error occured');
        res.send('500 Error');
    })
    */
    
});




//connect to db
mongoose.connect("mongodb+srv://testboy:testboy@rest.tmyts.mongodb.net/rest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('connected to DB');
});

//listen
app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});
