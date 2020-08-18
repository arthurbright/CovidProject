import {distance} from '/models/Distance.js';
const express = require('express');
const mongoose = require('mongoose');
const OrderModel = require('../models/Order');
const RecModel = require('../models/Recipient');
const VolModel = require('../models/Volunteer');

const router = express.Router();


router.get('/', (req, res)=>{
    res.send('gay');
})

///////////////////////////////////////////////////////RECIPIENT FUNCTIONS

//function to get a list of all recipients
router.get('/recipients', async (req, res) =>{
    const users = await RecModel.find();
    res.json(users);
})

//function to add a new recipient
router.post('/recipients', async(req, res) =>{

    const query = {
        username: req.body.username
    }

    //check if username taken
    RecModel.findOne(query, (err, doc)=>{

        if(doc == null){

            //if not taken, add new user
            const newRec = new RecModel({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,

                housenumber: req.body.housenumber,
                streetname: req.body.streetname,
                city: req.body.city,
                postalcode: req.body.postalcode,
                radius: req.body.radius
            })

            newRec.save()
            .then(data => {
                res.json(data);
            })
            .catch(err =>{
                console.log(err);
                res.send('500 Error');
            })


        }
        else{

            //if taken, send send this
            res.send("username taken"); //TODO
        }
    })
})


//function to change password
router.patch('/recipients/updatepassword', async(req, res) =>{


    //requirements: username, password, newpassword
    const query = {
        username: req.body.username
    }
    const update = {
        password: req.body.newpassword
    }

    //find user with matching username
    let doc = await RecModel.findOne(query);


    if(doc == null){
        //if no user with the username exists
        res.send("no user found"); //TODO
    }
    else{
        //if user found, check if password matches
        if(doc.password === req.body.password){
            const updatedDoc =  await RecModel.findOneAndUpdate(query, update, {new: true});
            res.send(updatedDoc);
        }
        else{
            //if wrong password
            res.send("wrong password buddy"); //TODO
        }
    }

})

//function to change username
router.patch('/recipients/updatename', async(req, res) =>{


    //requirements: username, password, newpassword
    const query = {
        username: req.body.username
    }
    const update = {
        name: req.body.newname
    }

    //find user with matching username
    let doc = await RecModel.findOne(query);


    if(doc == null){
        //if no user with the username exists
        res.send("no user found"); //TODO
    }
    else{
        //if user found, check if password matches
        if(doc.password === req.body.password){
            const updatedDoc =  await RecModel.findOneAndUpdate(query, update, {new: true});
            res.send(updatedDoc);
        }
        else{
            //if wrong password
            res.send("wrong password buddy"); //TODO
        }
    }

})



//////////////////////////////////////////////////////VOLUNTEER FUNCTIONS
//function to get a list of all volunteers
router.get('/volunteers', async (req, res) =>{
    const users = await VolModel.find();
    res.json(users);
})

//function to add a new volunteer
router.post('/volunteers', async(req, res) =>{

    const query = {
        username: req.body.username
    }

    //check if username taken
    VolModel.findOne(query, (err, doc)=>{

        if(doc == null){

            //if not taken, add new user
            const newVol = new VolModel({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,

                housenumber: req.body.housenumber,
                streetname: req.body.streetname,
                city: req.body.city,
                postalcode: req.body.postalcode
            })

            newVol.save()
            .then(data => {
                res.json(data);
            })
            .catch(err =>{
                console.log(err);
                res.send('500 Error');
            })


        }
        else{

            //if taken, send send this
            res.send("username taken"); //TODO
        }
    })
})

//function to change password
router.patch('/volunteers/updatepassword', async(req, res) =>{


    //requirements: username, password, newpassword
    const query = {
        username: req.body.username
    }
    const update = {
        password: req.body.newpassword
    }

    //find user with matching username
    let doc = await VolModel.findOne(query);


    if(doc == null){
        //if no user with the username exists
        res.send("no user found"); //TODO
    }
    else{
        //if user found, check if password matches
        if(doc.password === req.body.password){
            const updatedDoc =  await VolModel.findOneAndUpdate(query, update, {new: true});
            res.send(updatedDoc);
        }
        else{
            //if wrong password
            res.send("wrong password buddy"); //TODO
        }
    }

})

//function to change username
router.patch('/volunteers/updatename', async(req, res) =>{


    //requirements: username, password, newpassword
    const query = {
        username: req.body.username
    }
    const update = {
        name: req.body.newname
    }

    //find user with matching username
    let doc = await VolModel.findOne(query);


    if(doc == null){
        //if no user with the username exists
        res.send("no user found"); //TODO
    }
    else{
        //if user found, check if password matches
        if(doc.password === req.body.password){
            const updatedDoc =  await VolModel.findOneAndUpdate(query, update, {new: true});
            res.send(updatedDoc);
        }
        else{
            //if wrong password
            res.send("wrong password buddy"); //TODO
        }
    }

})

//function to set order
router.post('/volunteers/setorder', async(req, res)=>{
    const query = {
        username: req.body.username
    }

    //fetch the order
    let order = await OrderModel.findById(req.body.orderid);
    if(order == null){
        res.send("invalid order ID");
        return;
    }
    
    const update = {
        orderinprogress: true,
        currentorder: {
            username: order.username,
        
            items:order.items,
        
            longitude:order.longitude,
        
            latitude:order.latitude
        }
    }


    let doc = await VolModel.findOne(query);
    if(doc == null){
        res.send("no user found bro");
    }
    //update the volunteers profile by adding a currentorder
    else{
        const updatedDoc =  await VolModel.findOneAndUpdate(query, update, {new: true});
        res.send(updatedDoc);

        //TODO remove the order from the list
        const test = OrderModel.findByIdAndDelete(req.body.orderid, (err, doc)=>{
            console.log(doc);
        });
        
        

    }




})
//function to remove order
router.post('/volunteers/removeorder', async (req, res)=>{
    const query = {
        username: req.body.username
    }

    const update = {
        orderinprogress: false,
        
    }

    let doc = await VolModel.findOne(query);
    if(doc == null){
        res.send("no user found bro");
    }
    else{
         //if the order was completed, no need to add it back to the stack
        if(req.body.ordercompleted){
            const updatedDoc =  await VolModel.findOneAndUpdate(query, update, {new: true});
            res.send(updatedDoc);
        }
        //else, that means the order was aborted and should be returned to the list
        else{
            //this gets the old profile of the volunteer, including the order
            const updatedDoc = VolModel.findOneAndUpdate(query, update, {new: false}, (err, doc) =>{
                console.log(doc);

                 //add back the order
                const reorder = new OrderModel({
                    username: doc.currentorder.username,
                    items: doc.currentorder.items,
                    latitude: doc.currentorder.latitude,
                    longitude: doc.currentorder.longitude

                })

                reorder.save()
                .then(data => {
                    res.json(data);
                })
                .catch(err =>{
                    console.log(err);
                    res.send('500 Error');
                })
                    
                });

            
            

           

            
        }
    }
   
})

//////////////////////////////////////////////////////ORDER FUNCTIONS

//function to get all current orders
router.get("/orders", async (req, res)=>{
    const orders = await OrderModel.find();
    res.json(orders);
})

//function to add a new order
router.post("/orders", (req, res)=>{
    const order = new OrderModel({
        username: req.body.username,
        items: req.body.items,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    })

    order.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        console.log(err);
        res.send('500 Error');
    })
})

//function to delete an order (either because it has been fulfilled or cancelled)
router.delete("/orders", async (req, res)=>{

   

    OrderModel.findByIdAndDelete(req.body.id, (err, doc)=>{
        if(doc == null){
            res.send("order not found"); //TODO

        }
        else{
            res.send(doc);
        }
    });
})

//function to get all orders within a certain radius of a location
router.get("/orders", async (req, res)=>{
    const orders = await OrderModel.find();
    var eligibleOrders = [], latitude, longituide
    //gets the geo data of the volunteer when they want to find orders
    //should be relocated to user.js
    function success(pos) {
        var crd = pos.coords;
      
        latitude = crd.latitude;
        longitude = crd.longitude;
    }
    navigator.geolocation.getCurrentPosition(success)
    //need to add a loop through orders and use distance function on each
    if (distance(latitude, longitude, order.body.latitude, order.body.longitude) < req.body.radius){
        eligibleOrders.push([latitude, longitude])
    }
    res.send(eligibleOrders)
})




module.exports = router;