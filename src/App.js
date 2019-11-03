import React, { Component } from 'react';
//路由的2种形式： hash(HashRouter) , H5的historyApi(BroswerRouter)是路由的容器，是组件，要包在路由的外面
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

function Index(){
  return <p>首页</p>
}

function Login(){
  return (<p>登录</p>)
}

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

class App extends Component {
  // eslint-disable-next-line react/require-render-return
  render(){
    return (
        <Router>
          <div>
            {/*exact确切为/时，才会匹配。否则在下面2个路由中，都会显示第一个路由*/}
            <Route path="/" exact={true} component={Login}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/index'} component={Index}></Route>
          </div>
        </Router>
    );
  }
}

export default App;
