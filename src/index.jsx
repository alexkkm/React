import ReactDOM from "react-dom";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Blog from "./route/blog";
import Contact from "./route/contact";


class Index extends Component{
    render(){
        return(
            <div id="Index">

                <div className="route">
                    <div>
                        <Link to="/blog">Blog Articles</Link>
                    </div>
                    <div>
                        <Link to="/contact">Contact Me</Link>
                    </div>
                </div>

                <h1>Index Page</h1>
                
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
        <Route path="/blog" component={Blog}>
        </Route>
        <Route path="/contact" component={Contact}>        
        </Route>
    </Router>
  );
}

// the most outter layer Dom render, render the App() function to index.html
ReactDOM.render(<App />, document.getElementById("root"));