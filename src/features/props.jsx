import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'

export default class PropsPage extends React.Component{
    render(){
        // only define props variable: name with value="a" when using the class
        return(
        <div className="props-page">

            <div className="route-to-index">
            <Router>   
                <Route exact path="/" component={Index}>
                </Route>
            </Router>                
            <Link to="/">Index</Link>
            </div>

            <NotUsingStateToDefineProps name="a"/>
            <UsingStateToDefineProps/>
        </div>
        );
    }
}

class NotUsingStateToDefineProps extends React.Component{
    render(){
        return(
        <div>
            <p>Not Using State:</p>
            <p>this name is only define when the class is called: {this.props.name}</p>
        </div>
        );
    }
}

class UsingStateToDefineProps extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //Define the content of the inital state, which is variables and their default values
            name: "a"
        }
    }

    render(){
        return(
            <div>
                <p>Using State:</p>
                <p>this name is define under the state of the class: {this.state.name}</p>
            </div>
        );
    }
}