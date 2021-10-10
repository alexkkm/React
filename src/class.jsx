import React,{ Component } from 'react';

var parameter=true;

class CompoentExample extends Component{
    render(){
        return(
            <div>
            <p>Hello World</p>
            <button onClick={()=>{console.log("Button Click")}}>Button</button>
            <p id>parameter: {(parameter===true)?"true":"false"}</p>
          </div>
        )
    }
    /* Comment line in JSX */
}
export default CompoentExample;
