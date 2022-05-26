import React, { Component } from 'react'
import { Layout, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, ImportOutlined} from '@ant-design/icons';
import Menu from './nav-menu'

const { Sider } = Layout;

interface Props {
  options: any
}
interface State {
  collapsed: boolean
}

export default class navsider extends Component<Props, State> {
  state = {
    collapsed: false
  }
  
  componentDidMount() {
    let { collapsed } = this.props.options;
    if (collapsed) this.onCollapse(collapsed);
  }

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const { options } = this.props;
    const { collapsed } = this.state;
    console.log(options);
    
    return (
      <div className="nav-sider">
        <Sider className="sider" collapsed={collapsed}>
          <div className="nav-bar">
            <div className="app-top">
              <div className="app-logo"><img src={options.logo} alt="logo" style={{display: options.logo?"block":"none"}} /></div> 
              <div className="app-titles">
                <p className="app-title">{options.title}</p>
                <p className="app-subtitle">{options.subtitle}</p>
              </div>
            </div>
            <div className={['nav-collapsed', collapsed?'nav-collapsed-center':''].join(' ')} >
              <Button onClick={()=>{this.onCollapse(collapsed)}} size="small">
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
            </div>
            <div className="nav-list scrollbar" >
              <Menu menus={options.menus}></Menu>
            </div>

            <div className="login-out">
              <ImportOutlined />
            </div>
          </div>
        </Sider>
      </div>
    )
  }
}
