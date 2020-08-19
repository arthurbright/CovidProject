import React from 'react';
import './style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import home from './components/home.component';
import login from './components/login.component';
import new_Recipient from './components/new_Recipient.component.js';


function App() {
  return (
    <Router>
      <Route path='/' exact component={home}></Route>
      <Route path='/login' exact component={login}></Route>
      <Route path='/new_Recipient' exact component={new_Recipient}></Route>
    </Router>
  );
}

export default App;
