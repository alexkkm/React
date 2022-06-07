import React from "react"

const containerStyle={
  //border: "2px solid black",
}

const Container = ({ children }) => {
  return (
    <div className="container" style={containerStyle}>
	    {children}
    </div>
  );
};

export default Container