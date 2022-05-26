import React from 'react'
import { Layout } from 'antd'
import Routes from '../router'
import Navigation from '../components/common/nav-nemu/index'
import Headers from './Header'
import Right from './Right'
import options from '../components/common/nav-nemu/nav-options'
import store from '../store'
import {navMenus} from '../store/action'

const { Router, Route, Switch, Redirect } = require('react-router-dom');
const { createHashHistory } = require('history');
const { Header, Footer, Content } = Layout;
const hash: any = createHashHistory();
class Home extends React.Component {
  state = {
    options: options
  }

  componentDidMount() {
    console.log("componentDidMount -- 组件挂载完成");
    store.dispatch(navMenus(options));
  }

  render() {
    const { options } = this.state;
    return (
      <Router history={hash}>
        <Layout>
          <Navigation options={options}></Navigation>
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
                  <Redirect from='/' to="/home" exact></Redirect>
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

export default Home;
