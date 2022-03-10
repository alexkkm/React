import React from "react";

// Functional Component 可以視為 f(d) => UI，根據傳進去的 props 繪出對應的 UI。注意這邊 props 是傳入函式的參數，因此取用 props 不用加 this
const HelloMessage = (props) => (
	<div>Hello {props.name}</div>
);

// PropTypes 驗證，若傳入的 props type 不是 string 將會顯示錯誤
HelloMessage.propTypes = {
  name: React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Zuck。用法等於 ES5 的 getDefaultProps
HelloMessage.defaultProps = {
 name: 'Zuck',
}

 export default HelloMessage