import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../index'

class JSX extends React.Component {
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
            <ContentOfJSX />
        </div>
        );
  }
}

export default JSX;

class ContentOfJSX extends React.Component {
        render(){
            return(
                <div>
                    <h1>React JSX</h1>
                    <p>React 使用 JSX 来替代常规的 JavaScript。</p>
                    <p>JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。</p>
                    <p>我们不需要一定使用 JSX，但它有以下优点：</p>
                    <ol>
                        <li><p>JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。</p></li>
                        <li><p>它是类型安全的，在编译过程中就能发现错误。</p></li>
                        <li><p>使用 JSX 编写模板更加简单快速。</p></li>
                    </ol>
                    <p>我们先看下以下代码：</p>
                    <pre>
                        <code>
                            const element = &lt;h1&gt;Hello, world!&lt;h1&gt;;
                        </code>
                    </pre>
                    <p>这种看起来可能有些奇怪的标签语法既不是字符串也不是 HTML。</p>
                    <p>它被称为 JSX， 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。</p>
                    <p>JSX 是在 JavaScript 内部实现的。</p>
                    <p>我们知道元素是构成 React 应用的最小单位，JSX 就是用来声明 React 当中的元素。</p>
                    <p>与浏览器的 DOM 元素不同，React 当中的元素事实上是普通的对象，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。</p>
                    <p>要将 React 元素渲染到根 DOM 节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上：</p>
                </div>
            );
    }
}