import React from "react";

class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }
    
    
    render(){
        return(
            <div>
                <List/>
            </div>
        );
    }
}

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          eventlist: Array,
          numberOfEvent: Number
        };
      }

    addEvent(event){
        this.state.eventlist.concat(event)
    }

    deleteEvent(eventID){
        for(let i=0;i<this.state.eventlist.length;i++){
            if(eventID===this.state.eventlist[i].ID){
                this.state.eventlist.splice(i,1);
            }
        }
    }

      render(){
          return(
              <div>

              </div>
          );
      }
}

class Event extends react.Component{

}

export default Page;