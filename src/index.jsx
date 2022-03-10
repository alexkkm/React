import ReactDOM from "react-dom";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RoutePage from "./route/routepage";
import JSX from "./features/JSX";
import ComponentPage from "./features/compoents";
import States from "./features/states"

class Index extends Component{
    render(){
        return(
            <div id="Index" className="page">

                <div className="route">
                    <div>
                        <Link to="/RoutePage">RoutePage</Link>
                    </div>
                </div>

                <h1>Index Page</h1>

                <h2>Finished Features:</h2>
                <ol>
                <li>Route</li>
                </ol>

                <h2>Features that developing:</h2>
                <ol>
                <li><Link to="/State">States</Link></li>
                <li><Link to="/JSX">JSX</Link></li>
                <li><Link to="/ComponentPage">ComponentPage</Link></li>
                </ol>

            </div>
        )
    }
}



// App() function are the main function of the webpage
export default function App() {
  return (
    // React Router
    <Router>   
        <Route exact path="/" component={Index}>
        </Route>
        <Route path="/RoutePage" component={RoutePage}>        
        </Route>
        <Route path="/JSX" component={JSX}>        
        </Route>
        <Route path="/ComponentPage" component={ComponentPage}>        
        </Route>
        <Route path="/State" component={States}>        
        </Route>
    </Router>
  );
}

// the most outter layer Dom render, render the App() function to index.html
ReactDOM.render(<App />, document.getElementById("root"));