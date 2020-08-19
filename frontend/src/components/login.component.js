import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class login extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '1',
            password: '2'
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

    onSubmit(e){
        e.preventDefault();
        //login(this.state)
        /*
        ^ will check database to see if login is successful
        */
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        axios.post('./login', user)
            .then(res => console.log(res.data));
        
    }



    render(){
        return(
            <div>
                <center> <h1>Login to Your Account</h1> </center> 
                <form onSubmit={this.onSubmit}>
                    <div className="row justify-content-center">
                        <label className="col-lg-2 col-sm-4 loginLabel">Username : </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="text"
                        placeholder="Enter Username" 
                        name="username"
                        onChange={this.onChangeUsername}
                        required
                        />
                    </div>
                    <div className="row justify-content-center">
                        <label className="col-lg-2 col-sm-4 loginLabel">Password : </label> 
                        <input className="col-lg-3 col-sm-6"
                        type="password"
                        placeholder="Enter Password" 
                        name="password"
                        onChange={this.onChangePassword}
                        required
                        />
                    </div>

                    <div className="row justify-content-center">
                        <label className="col-lg-1 col-sm-0"></label>
                        <button className="bigButton col-lg-2 col-sm-2" type="submit">Login</button>
                        <label className="col-lg-1 col-sm-0"></label>
                        <Link to="/forgot_password">Forgot Password?</Link>
                    </div>
                    
                </form>



            
                <center> <h2>Don't have an account?</h2> </center>
                <div className="row justify-content-center">
                    <Link to="/register_volunteer">Register as a volunteer</Link>  
                    <Link to="/register_recipient">Register as a recipient</Link>
                </div>
        </div> 
        )
    }
}