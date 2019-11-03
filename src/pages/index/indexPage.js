import ReactDOM from "react-dom";
import React from "react";
import "src/pages/index/indexPage.css"

class IndexPage extends React.Component {

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
                <div id="main" style="width: auto;">
                    <div id="header" className="navbar navbar-fixed-top">
                        <div className="navbar-inner">
                            <div className="brand"><span id="productName">权限管理系统</span></div>
                            <ul id="userControl" className="nav pull-right">

                                <li id="userInfo" className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" title="个人信息">您好,管理员&nbsp;</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" target="mainFrame"><i
                                            className="icon-user"></i>&nbsp; 个人信息1</a></li>
                                        <li><a href="#" target="mainFrame"><i
                                            className="icon-lock"></i>&nbsp;  修改密码</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" title="退出登录">退出</a></li>
                                <li>&nbsp;</li>
                            </ul>

                            <div className="nav-collapse">
                                <ul id="menu" className="nav" style="*white-space:nowrap;float:none;">
                                    {/*<c:set var="first" value="true"/>*/}
                                    {/*<c:forEach items="${pm:getMenuList()}" var="menu">*/}
                                    {/*    <c:if test="${menu.parent.id eq '1' && menu.isShow eq '1'}">*/}
                                    {/*        <li className="menu ${first ? 'active' : ''}">*/}
                                    {/*            <c:if test="${empty menu.href}">*/}
                                    {/*                <a className="menu" href="javascript:"*/}
                                    {/*                   data-href="${ctx}/sys/menu/menuNavi?parentId=${menu.id}"*/}
                                    {/*                   data-id="${menu.id}">*/}
                                    {/*                    <span>${menu.name}</span></a>*/}
                                    {/*            </c:if>*/}
                                    {/*            <c:if test="${not empty menu.href}">*/}
                                    {/*                <a className="menu" href="${cxt}${menu.href}" data-id="${menu.id}"*/}
                                    {/*                   target="mainFrame">*/}
                                    {/*                    <span>${menu.name}</span></a>*/}
                                    {/*            </c:if>*/}
                                    {/*        </li>*/}
                                    {/*    </c:if>*/}
                                    {/*    <c:set var="first" value="false"/>*/}
                                    {/*</c:forEach>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div id="content" className="row-fluid">
                            <div id="left"></div>
                            <div id="openClose" className="close">&nbsp;</div>
                            <div id="right">
                                <iframe id="mainFrame" name="mainFrame" src="" style="overflow: visible; "
                                        scrolling="yes" frameBorder="no" width="100%" height="650"></iframe>
                            </div>
                        </div>
                        <div id="footer" className="row-fluid">
                            Copyright © 2015-2015 <a href="http://www.tanzhouedu.com/" target="_blank">权限管理系统</a> -
                            Powered By Colin V0.0.1
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }

}

export default IndexPage;
