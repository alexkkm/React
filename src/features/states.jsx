import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'

class States extends React.Component {
  //若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。
  constructor(props){
    //透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
    super(props);
    this.state={
      number: 0
    };
  }

  add1ToNumber(){
    this.setState({number: this.state.number+1})
  }

  resetNumber(){
    this.setState({number: 0})
  }

  //render 是唯一必須的方法，但如果是單純 render UI 建議使用 Functional Component 寫法，效能較佳且較簡潔
  render(){
    return(
      <div className="state-page">

        <div className="route-to-index">
          <Router>   
            <Route exact path="/" component={Index}>
            </Route>
          </Router>                
          <Link to="/">Index</Link>
        </div>
  
        <p>Number:{this.state.number}</p>
        <button onClick={this.add1ToNumber.bind(this)}>Add 1</button>
        <button onClick={this.resetNumber.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default States