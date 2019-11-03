import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './static/bootstrap/2.3.1/css/bootstrap.min.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";
import indexPage from "./pages/index/indexPage";

ReactDOM.render(<React.Suspense fallback="">
    <Router>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/index/indexPage" component={indexPage}></Route>
        </Switch>
    </Router>
</React.Suspense>, document.getElementById("root"));
