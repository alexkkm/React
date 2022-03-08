import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'

class RoutePage extends Component {
    render(){
      return(
    <div>
        <Router>   
          <Route exact path="/" component={Index}>
          </Route>
        </Router>

        <Link to="/">Index</Link>
        <h1>RoutePage Content</h1>
    </div>);
    
  }
}

export default RoutePage;