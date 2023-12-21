// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


// export 可以是此函数在改文件之外访问
// default 表明它是文件中的主要函数
// export default function Square(){
//   // <button> 是一个 JSX 元素。JSX 元素是 JavaScript 代码和 HTML 标签的组合
//   //square 是button 的属性
//
//   //React 组件必须返回单个 JSX 元素，不能像两个按钮那样返回多个相邻的 JSX 元素。要解决此问题，可以使用 Fragment（<> 与 </>）包裹多个相邻的 JSX 元素，如下所示：
//   // return <button className="square">X</button><button className="square">X</button>;
//   return <> <button className="square">X</button><button className="square">X</button> </>;
// }
import { useState } from "react";

function Square() {

    const [value, setValue] = useState(null);

    function handleClick(){
        console.log('clicked!')
        setValue('X');
    }

    return <button className="square" onClick={handleClick}>{value}</button>;
}

export default function Board() {
  return (
      <>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
      </>
  );
}
