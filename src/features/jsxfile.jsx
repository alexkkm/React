import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index';
import textJson from "./jsx.json";

export default class JSX extends React.Component {
    render(){
        return(
        <div id="JSX" className="page">
            
            <Router>   
            <Route exact path="/" component={Index}>
            </Route>
            </Router>

            <div>
                <Link to="/">Index</Link>
            </div>
            <ContentOfJSX/>
        </div>
        );
  }
}

class ContentOfJSX extends React.Component {
        render(){
            return(
                <div>
                    <h1>{textJson.header}</h1>
                    <p>{textJson.text1}</p>
                    <p>{textJson.text2}</p>
                    <p>{textJson.text3}</p>
                    <ol>
                        <li><p>{textJson.advantage1}</p></li>
                        <li><p>{textJson.advantage2}</p></li>
                        <li><p>{textJson.advantage3}</p></li>
                    </ol>
                    <p>{textJson.text4}</p>
                    <pre>
                        <code>
                        {textJson.code}
                        </code>
                    </pre>
                    <p>{textJson.text5}</p>
                    <p>{textJson.text6}</p>
                    <p>{textJson.text7}</p>
                    <p>{textJson.text8}</p>
                    <p>{textJson.text9}</p>
                    <p>{textJson.text10}</p>
                </div>
            );
    }
}