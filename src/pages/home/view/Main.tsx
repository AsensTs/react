import React from 'react'
import { Layout } from 'antd'
import Routes from '@home/router'
import options from '@home/menus-config'
import Navigation from '@/common/components/memu/index'
import Headers from './Header'
import Right from './Right'

const { Router, Route, Switch, Redirect } = require('react-router-dom');
const { createHashHistory } = require('history');
const { Header, Footer, Content } = Layout;
const hash: any = createHashHistory();
class Main extends React.Component {
  state = {
    options: options,
  }

  componentDidMount() {
    console.log("componentDidMount -- 组件挂载完成");
  }

  logout = () => {
    console.log("退出登录, 清除cookie");
    window.location.href = "http://localhost:3000/login.html"
  }

  render() {
    const { options } = this.state;
    return (
      <Router history={hash}>
        <Layout>
          <Navigation options={options} logout={this.logout}></Navigation>
          <Layout>
            <Header className="header">
              <Headers></Headers>
            </Header>
            <Content className="content">
              <div className="content-l">
                <Switch>
                  {
                    Routes.map(route => {
                      return <Route key={route.path} path={route.path} component={route.component}></Route>
                    })
                  }

                  {/* 自动重定向路由第一个 */}
                  <Redirect from='/' to="/" exact></Redirect>
                  <Redirect to="/404" exact></Redirect>
                </Switch>
              </div>
              <Footer className="right footer content-r text-center">
                <Right></Right>
              </Footer>
            </Content>
          </Layout>
        </Layout >
      </Router>
      
    );
  }
}

export default Main;
