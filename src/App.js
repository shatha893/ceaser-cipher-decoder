import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
