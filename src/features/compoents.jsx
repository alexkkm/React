import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'


class ComponentPage extends React.Component {
    render(){
        return(
            <div id="CompoentPage" className="page">
            
            <Router>   
            <Route exact path="/" component={Index}>
            </Route>
            </Router>

            <div>
                <Link to="/Index">Index</Link>
            </div>
            <FunctionalCompoentPage />
            <Count />
        </div>
        );
  }
}

export default ComponentPage;
    //Functional Component
      /*
        In React, function components are a way to write components that only contain a render method and don't have their own state.
        They are simply JavaScript functions that may or may not receive data as parameters.
        We can create a function that takes props(properties) as input and returns what should be rendered.
        A valid functional component can be shown in the below example.
      */
        function Count(number){
            return(
                <p>{number.result}</p>
            );
    
        }
        //The functional component is also known as a stateless component because they do not hold or manage state. It can be explained in the below example.

        class FunctionalCompoentPage extends React.Component {  
        render() {  
            return (  
                <div id="FunctionalCompoentPage">  
                    <First/>  
                    <Second/>  
                </div>  
            );  
        }  
        }  
        class First extends React.Component {  
            render() {  
                return (  
                    <div>  
                        <h1>JavaTpoint</h1>  
                    </div>  
                );  
            }  
        }  
        class Second extends React.Component {  
            render() {  
                return (  
                    <div>  
                        <h2>www.javatpoint.com</h2>  
                        <p>This websites contains the great CS tutorial.</p>  
                    </div>  
                );  
            }  
        }  
    
    
