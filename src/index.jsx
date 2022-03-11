import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RoutePage from "./route/routepage";
import JSX from "./features/JSX";
import States from "./features/states"
import Container from "./container"
import Game from "./projects/tictac/tictac";

class Index extends React.Component{
    render(){
        return(
            <div id="Index" className="page">


                <h1>Index Page</h1>

                <h2>Finished Features:</h2>
                <ol>
                    <li><Link to="/RoutePage">Route</Link></li>
                </ol>

                <h2>Features that developing:</h2>
                <ol>
                    <li><Link to="/State">States</Link></li>
                    <li><Link to="/JSX">JSX</Link></li>
                    <li><Link to="/tictac">TicTac</Link></li>
                </ol>
                
            </div>
        )
    }
}


// App() function are the main function of the webpage
export default function App() {
  return (
    // React Router
    <div>
        <Container children={
        <Router>   
            <Route exact path="/" component={Index}>
            </Route>
            <Route path="/RoutePage" component={RoutePage}>        
            </Route>
            <Route path="/JSX" component={JSX}>        
            </Route>
            <Route path="/State" component={States}>        
            </Route>
            <Route path="/tictac" component={Game}>        
            </Route>
        </Router>
        }/>
    </div>
  );
}

// the most outter layer Dom render, render the App() function to index.html
ReactDOM.render(<App />, document.getElementById("root"));