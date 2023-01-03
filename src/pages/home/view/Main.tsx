import React from 'react'
import { Layout } from 'antd'
import RouterView from '@home/router/router-view'
import options from '@home/menus-config'
import Menus from '@/common/components/menus/index'
import Headers from './Header'
import Right from './Right'

const { Header, Footer, Content } = Layout;
class Main extends React.Component {
  state = {
    options: options,
  }

  componentDidMount() {
    console.log("componentDidMount -- 组件挂载完成");
  }

  logout = () => {
    console.log("退出登录, 清除cookie");
    window.location.href = "/login.html"
  }

  render() {
    const { options } = this.state;
    return (
      <Layout>
        <Menus options={options} logout={this.logout}></Menus>
        <Layout>
          <Header className="header">
            <Headers></Headers>
          </Header>
          <Content className="content">
            <div className="content-l">
              <RouterView></RouterView>
            </div>
            <Footer className="right footer content-r text-center">
              <Right></Right>
            </Footer>
          </Content>
        </Layout>
      </Layout >
    );
  }
}

export default Main;
