import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Stylesheets
import './App.css';

//Components
import NavbarContainer from './components/Navbar/NavbarContainer'
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Signup/SignupContainer';
import AddQuestionContainer from './components/AddQuestion/AddQuestionContainer'
import LogoutContainer from './components/Logout/LogoutContainer'

function App() {
  return (
  
    <div className="App">

      <NavbarContainer />
          
          <Route exact path="/"   /**COMPONENT HERE */    />

          <Route exact path="/signup" component={SignupContainer} />

          <Route exact path="/login" component={LoginContainer} />

          <Route exact path="/logout" component={LogoutContainer} />

          <Route exact path="/add-question" component={AddQuestionContainer} />

          <Route exact path="/questions"   /**COMPONENT HERE */    />
          
          <Route exact path="/students"   /**COMPONENT HERE */    />
              
    </div>
  );
}

export default App;
