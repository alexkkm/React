import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RoutePage from "./features/route/routepage";
import JSX from "./features/jsxfile";
import States from "./features/states"
import Container from "./container"
import Game from "./projects/tictac/tictac";
import PropsPage from "./features/props";
import TodoPage from "./projects/todo/todo";
import RealTimePage from "./features/realtime";
import CssPage from "./css";

//Additional decoration
import newsJSON from "./news.json";
import "./index.css";

class Index extends React.Component{
    render(){
        return(
            <div id="Index" className="page">

                <h1>Index Page</h1>

                <h2>News:</h2>
                <ol>
                    <li>{newsJSON.news1.date}   {newsJSON.news1.content}</li>
                    <li>{newsJSON.news2.date}   {newsJSON.news2.content}</li>
                </ol>

                <h2>Finished Features:</h2>
                <ol>
                    <li><Link to="/RoutePage">Route</Link></li>
                    <li><Link to="/Props">Props</Link></li>
                    <li><Link to="/State">States</Link></li>
                    <li><Link to="/JSX">JSX</Link></li>
                    <li><Link to="/RealTime">Real Time</Link></li>
                </ol>

                <h2>Items that developing:</h2>
                <ol>
                    <li><Link to="/Todo">ToDoList</Link></li>
                    <li><Link to="/Css">CSS</Link></li>
                </ol>
                
                <h2>Projects:</h2>
                <ol>
                    <li><Link to="/Tictac">TicTac</Link></li>
                </ol>

                <h2>New Chapter on DCH!</h2>
                <ol>
                    To be added afterward.
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
            <Route path="/Props" component={PropsPage}>        
            </Route>
            <Route path="/State" component={States}>        
            </Route>
            <Route path="/Tictac" component={Game}>        
            </Route>
            <Route path="/Todo" component={TodoPage}>        
            </Route>
            <Route path="/RealTime" component={RealTimePage}>        
            </Route>
            <Route path="/Css" component={CssPage}>        
            </Route>
        </Router>
        }/>
    </div>
  );
}

// the most outter layer Dom render, render the App() function to index.html
ReactDOM.render(<App />, document.getElementById("root"));