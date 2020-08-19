import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class new_Recipient extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeHouseNumber = this.onChangeHouseNumber.bind(this);
        this.onChangeStreetName = this.onChangeStreetName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePostalCode = this.onChangePostalCode.bind(this);
        this.onChangeRadius = this.onChangeRadius.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            password: '',
            name: '',
            houseNumber: '',
            streetName: '',
            city: '',
            postalCode: '',
            radius: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
        
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeHouseNumber(e){
        this.setState({
            houseNumber: e.target.value
        });
    }
    onChangeStreetName(e){
        this.setState({
            streetName: e.target.value
        });
    }
    onChangeCity(e){
        this.setState({
            city: e.target.value
        });
    }
    onChangePostalCode(e){
        this.setState({
            postalCode: e.target.value
        });
    }
    onChangeRadius(e){
        this.setState({
            radius: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();
        //login(this.state)
        /*
        ^ will check database to see if login is successful
        */
        const user = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            houseNumber: this.state.houseNumber,
            streetName: this.state.streetName,
            city: this.state.city,
            postalCode: this.state.postalCode,
            radius: this.state.radius
        }
        console.log(user);
        
        /*
        axios.post('./new_Recipient', user)
            .then(res => console.log(res.data));

            idk how this works yet^*/
        
    }



    render(){
        return(
            <div>
                <center> <h1>Create Your Account</h1> </center> 
                <form onSubmit={this.onSubmit}>
                    <div className="row justify-content-center">

        
                        <label className="col-lg-2 col-sm-4 loginLabel">Username: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter Username" 
                        name="username"
                        onChange={this.onChangeUsername}
                        required
                        />


                        <label className="col-lg-2 col-sm-4 loginLabel">Password: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="password"
                        placeholder="Enter Password" 
                        name="password"
                        onChange={this.onChangePassword}
                        required
                        />


                        <label className="col-lg-2 col-sm-4 loginLabel">Name: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter Name" 
                        name="name"
                        onChange={this.onChangeName}
                        required
                        />


                        <label className="col-lg-2 col-sm-4 loginLabel">House Number: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter House Number" 
                        name="houseNumber"
                        onChange={this.onChangeHouseNumber}
                        required
                        />


                        <label className="col-lg-2 col-sm-4 loginLabel">Street Name: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter Street Name" 
                        name="streetName"
                        onChange={this.onChangeStreetName}
                        required
                        />


                        <label className="col-lg-2 col-sm-4 loginLabel">City: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter City" 
                        name="city"
                        onChange={this.onChangeCity}
                        required
                        />


                        <label className="col-lg-2 col-sm-4 loginLabel">Postal Code: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter Postal Code" 
                        name="postalCode"
                        onChange={this.onChangePostalCode}
                        required
                        />


                        <label className="col-lg-2 col-sm-4 loginLabel">Radius: </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter Radius" 
                        name="radius"
                        onChange={this.onChangeRadius}
                        required
                        />

                       
                    </div>

                    <div className="row justify-content-center">
                        <label className="col-lg-1 col-sm-0"></label>
                        <button className="bigButton col-lg-2 col-sm-2" type="submit">Register</button>
                        <label className="col-lg-1 col-sm-0"></label>
                    </div>
                        

                </form>
            </div> 
        )
    }
}
