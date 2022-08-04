// 导入组件
import React from 'react';
import Home from '@index/view/Home'
import Page1 from '@index/components/page1'

// Ts写法
const { Router, Route, Switch, Redirect } = require('react-router-dom');  // Ts使用require代替import导入
const { createHashHistory, createBrowserHistory} = require('history');

// import { Router, Route, Switch, Redirect } from 'react-router-dom'; // 报错
// import { createHashHistory, createBrowserHistory } from 'history';  // 报错

const hash: any = createHashHistory();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const history: any = createBrowserHistory();

class Routers extends React.Component {
    render() {
        return (
            <Router history={hash}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/home'/>
                    )}/>
                    
                    <Route path='/home' component={Home}></Route>
                    <Route  path='/page1'  component={Page1} ></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routers;


/*
class Routers extends React.Component{}  --  创建组件方式
React.createClass({}) -- React提供的另外一种创建组件类方式

1. react-router 路由其实是一个组件
2. Router 的history是必需的props
3. Switch 表示只渲染第一个与当前地址匹配的<Route>， 在Switch标签绑定路由模式 history={hash}
4. Route 的props path为路径， component组件为路径对应的页面
5. exact 属性表示精确匹配
6. Redirect 表示重定向， props to为重定向路径
*/