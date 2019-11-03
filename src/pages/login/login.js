import React, {Fragment} from "react";

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: "",
            rememberMe: true,
            username: "",
        };
    }

    render() {
        const {message, username, rememberMe} = this.state;
        return (
            // eslint-disable-next-line react/jsx-no-undef
            <Fragment>
                <div className="header">
                    <div id="messageBox" className="alert alert-error hide">
                        <button data-dismiss="alert" className="close">×</button>
                        <label id="loginError" className="error">{message}</label>
                    </div>
                </div>
                <h1 className="form-signin-heading">权限管理系统</h1>
                <div id="loginForm" className="form-sign">
                    <label className="input-label" htmlFor="username">登录名</label>
                    <input type="text" id="username" name="username" className="input-block-level required"
                           value={username} />
                    <label className="input-label" htmlFor="password">密码</label>
                    <input type="password" id="password" name="password" className="input-block-level required" />
                    {/*<input className="btn btn-large btn-primary" type="submit" value="登 录" />&nbsp;&nbsp;*/}
                    <button className="btn btn-large btn-primary">登录</button>&nbsp;&nbsp;
                    {/*<label htmlFor="rememberMe" title="下次不需要再登录">*/}
                    <input type="checkbox" id="rememberMe" name="rememberMe" checked="checked"/> 记住我
                    {/*</label>*/}

                </div>
                <div className="footer">
                    Copyright © 2015-2015 <a href="http://www.tanzhouedu.com/" target="_blank">权限管理系统</a> - Powered By
                    Colin V0.0.1
                </div>
            </Fragment>
        );
    }
}

export default Login;
