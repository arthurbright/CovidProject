const express = require('express');
const mongoose = require('mongoose');
const OrderModel = require('../models/Order');
const UserModel = require('../models/User');


const router = express.Router();


router.get('/', (req, res)=>{
    res.send('gay');
})


//function to get a list of all users
router.get('/users', async (req, res) =>{
    const users = await UserModel.find();
    res.json(users);
})

//function to add a new user
router.post('/users', async(req, res) =>{

    const query = {
        username: req.body.username
    }

    //check if username taken
    UserModel.findOne(query, (err, doc)=>{

        if(doc == null){

            //if not taken, add new user
            const newUser = new UserModel({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name
            })

            newUser.save()
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
router.patch('/users/updatepassword', async(req, res) =>{


    //requirements: username, password, newpassword
    const query = {
        username: req.body.username
    }
    const update = {
        password: req.body.newpassword
    }

    //find user with matching username
    let doc = await UserModel.findOne(query);


    if(doc == null){
        //if no user with the username exists
        res.send("no user found"); //TODO
    }
    else{
        //if user found, check if password matches
        if(doc.password === req.body.password){
            const updatedDoc =  await UserModel.findOneAndUpdate(query, update, {new: true});
            res.send(updatedDoc);
        }
        else{
            //if wrong password
            res.send("wrong password buddy"); //TODO
        }
    }

})





module.exports = router;