import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterPage from './RegistrationPage/RegisterPage';
import Display from './Display/Display';
import PublicRoute from './PublicRoute';
import AddData from './AddData/AddData';


function App() {
  return (
    <div className="App">          
      <Router>
      <NavBar />
        <Switch>
          <Route path="/" component={LoginPage} exact/>
          <Route path="/register" component={RegisterPage} exact/>
          <PublicRoute path="/Display" component={Display} exact/>
          <PublicRoute path="/Register/" component={RegisterPage} exact/>
          {/* <PublicRoute path="/DisplayUpdate/:id" component={Display} exact/> */}
        </Switch>
      </Router>     
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
