import React, { useState, useEffect } from 'react';

// State: collection of content of parameters
const NativeState = () => {
    const [time,updateTime]=useState(null);
    useEffect(()=>{ //  after the components was build do the followings
        let time= getCurrentTime();

        const delay=setInterval(()=>{   //create a time variable and start timer
            updateTime(time=>getCurrentTime()) //when the time limit reached, do this line: updateTime()
        },1000) //  time limit set to be 1000ms = 1 second
        
        return()=>{
            clearInterval(delay);   //  clear the content of time variable
        }
    },[]);

    const getCurrentTime=()=>{
        let timeInfo=new Date();
        let month=(timeInfo.getMonth())+1;
        let day=(timeInfo.getDate());
        let hours=(timeInfo.getHours())+8;
        let minutes=(timeInfo.getMinutes());
        let seconds=(timeInfo.getSeconds());
        return month+"/"+day+" "+hours+":"+minutes+":"+seconds;
    }

    return (
        <Clock time={time}/>
    );
};

const Clock=(props)=>{
    return(
        
        <div>
        
            <p style={styles.paragraph}>Current Time is: {props.time}</p>
        
        </div>
        
    );
};

const styles = StyleSheet.create({
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      borderWidth: 3,
      borderRadius: 5,
      borderColor: 'grey'
    },
  });

export default NativeState;