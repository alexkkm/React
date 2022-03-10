import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'

class RoutePage extends Component {
    render(){
        return(
            <div id="RoutePage" className="page">
            
            <Router>   
            <Route exact path="/" component={Index}>
            </Route>
            </Router>

            <div>
                <Link to="/">Index</Link>
            </div>
            <div>
                <p>Content of Route Page</p>
            </div>
            
        </div>
        );
  }
}

export default RoutePage;

