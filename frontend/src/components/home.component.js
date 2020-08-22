import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class home extends Component{
    render(){
        return(
            <div className='home'>
                <h1 class="title">Name</h1>
                <h1>About us</h1>
                We connect weaklings to volunteers.
                
                <h1>Register</h1>
                <h2>I am looking ...</h2>
                <div className="row justify-content-center">
                    <form className="col-lg-4 col-sm-8 row justify-content-center" action="./volunteerRegister">
                        <button type="submit" className="bigButton">To Volunteer</button>
                    </form>
                    <form className="row justify-content-center col-lg-4 col-sm-8" action="./new_Recipient">
                        <button type="submit" className="bigButton">For Assistance</button>
                    </form>
                </div>
                <h1>Already have an account?</h1>
                <div className="row justify-content-center">
                    <form className="row justify-content-center col-lg-4 col-sm-8" action="./login">
                        <button type="submit" className="bigButton">Login</button>
                    </form>
                </div>
            </div>
            
        )
    }
}