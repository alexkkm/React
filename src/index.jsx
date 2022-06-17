import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RoutePage from "./features/route/routepage";
import JSX from "./features/jsxfile";
import States from "./features/states"
import Game from "./projects/tictac/tictac";
import PropsPage from "./features/props";
import TodoPage from "./projects/todo/todo";
import RealTimePage from "./features/realtime";
import PersonalPage from "./projects/personal/personal";

//Additional decoration
import "./index.css";
import newsJSON from "./news.json";



class Index extends React.Component{
    render(){
        return(
            <div id="themeDecorator">

                <h1 class="glitch" data-text="Index Page">Index Page</h1>

                <h2 class="glitch" data-text="News:">News:</h2>
                <ol>
                    <li class="glitch" data-text={newsJSON.news1.date+newsJSON.news1.content}>{newsJSON.news1.date+newsJSON.news1.content}</li>
                    <li class="glitch" data-text={newsJSON.news2.date+newsJSON.news2.content}>{newsJSON.news2.date+newsJSON.news2.content}</li>
                </ol>

                <h2 class="glitch" data-text="Finished Features:">Finished Features:</h2>
                <ol>
                    <li><Link to="/RoutePage">Route</Link></li>
                    <li><Link to="/Props">Props</Link></li>
                    <li><Link to="/State">States</Link></li>
                    <li><Link to="/JSX">JSX</Link></li>
                    <li><Link to="/RealTime">Real Time</Link></li>
                </ol>

                <h2 class="glitch" data-text="Items that developing:">Items that developing:</h2>
                <ol>
                    <li><Link to="/Todo">ToDoList</Link></li>
                    
                </ol>
                
                <h2 class="glitch" data-text="Projects:">Projects:</h2>
                <ol>
                    <li><Link to="/Tictac">TicTac</Link></li>
                    <li><Link to="/Personal">Personal</Link></li>
                </ol>

                <h2 class="glitch" data-text="New Chapter on DCH!">New Chapter on DCH!</h2>
                <ol>
                    <p class="glitch" data-text="To be added afterward.">To be added afterward.</p>
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
            <Route path="/Personal" component={PersonalPage}>        
            </Route>
        </Router>
        </div>
  );
}

// the most outter layer Dom render, render the App() function to index.html
ReactDOM.render(<App />, document.getElementById("root"));