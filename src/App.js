import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Axios from 'axios';
import MainPage from './MainPage/MainPage';

class App extends Component {
 
  
  render()
  {
    return (
      <Router>
      <Switch>
      <Route 
      path="/" 
      exact 
      render={()=><MainPage/>} />
      
      </Switch>
      </Router> );
  }
  
}

export default App;
