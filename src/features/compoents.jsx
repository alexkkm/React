import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'

class ComponentPage extends Component {
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
            <ContentOfComponentPage />
        </div>
        );
  }
}

export default ComponentPage;

class ContentOfComponentPage extends Component{
    render(){
        return(
            <div>
                <Foo />
            </div>
        );
    }
}


//Multiple Component
    function Foo(){
        return(
            <div>
                <Car name="Tom"/>
                <Count result="2"/>
            </div>
        )
    }

    //Class Component
    class Car extends Component {
        render() {
          return <h2>Hi, I am a Car!</h2>;
        }
      }
    //Functional Component
    function Count(number){
        return(
            <p>{number.result}</p>
        );

    }
