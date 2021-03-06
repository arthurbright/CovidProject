const express = require('express');
//const cors = require('cors');
const fs = require('fs').promises;
const mongoose = require('mongoose');
const OrderModel = require('./models/Order');
const RecModel = require('./models/Recipient');
const VolModel = require('./models/Volunteer');
const path = require('path');
var session = require('client-sessions');

const app = express();
app.use(express.json());
//app.use(cors());

//TEMPLATE CODE FOR SESSIONS IN user.js USE IF NECESSARY
app.use(session({
    cookieName: 'session',
    secret: 'd;lkjfadkl;jfdkl;sjf', //long ass random unguessable str
    resave: false,
    saveUninitialized: false,
    duration: 30 * 60 * 1000, //how long the session remains active in ms (30mins),
    activeDuration: 5 * 60 * 1000, //if user stays on session and remaining time is less than activeDuration, session time+=activeDuration (extra 5 mins)
    httpOnly: true,
    secure: true,
    ephemeral: true
}));

const apiRoute = require('./routes/api');
app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('*', async (req, res)=>{
    res.sendFile(path.join(__dirname, "/frontend/build/index.html"), "utf8");

});




//connect to db
mongoose.connect("mongodb+srv://testboy:testboy@rest.tmyts.mongodb.net/rest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('connected to DB');
});

//listen
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening on port 3000...");
});
