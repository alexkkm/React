import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'

class Contact extends Component {
    render(){
      return(
    <div>
        <Router>   
          <Route exact path="/" component={Index}>
          </Route>
        </Router>

        <Link to="/">Index</Link>
        <h1>Contact Me</h1>
    </div>);
    
  }
}

export default Contact;