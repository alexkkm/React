import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

var parameter=true;

const testFunction=()=> {
  return( 
  <div>
    <p>Hello World</p>
    <button onClick={()=>{console.log("Button Click")}}>Button</button>
    <p id>parameter: {(parameter===true)?"true":"false"}</p>
  </div>
  );
}

ReactDOM.render(
  testFunction(),
  document.getElementById('root')
);


reportWebVitals();
