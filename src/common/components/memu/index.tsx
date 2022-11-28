import React, { Component } from 'react'
import { Layout, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, ImportOutlined} from '@ant-design/icons';
import NavMenu from './menu'

const { Sider } = Layout;

interface Props {
  options: any
  logout: Function
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

  logout = () => {
    this.props.logout();
  }

  render() {
    const { options } = this.props;
    const { collapsed } = this.state;
    const collapse = options && undefined === options.collapse ? true : options.collapse ? true : false;
    let theme = options.theme ? options.theme : 'light'; // light | dark

    return (
      <div className="nav-sider">
        <Sider className="sider" collapsed={collapsed} theme={theme}>
          <div className="nav-bar">
            <div className="app-top">
              <div className="app-logo"><img src={options.logo} alt="logo" style={{display: options.logo?"block":"none"}} /></div> 
              <div className="app-titles">
                <p className="app-title">{options.title}</p>
                <p className="app-subtitle">{options.subtitle}</p>
              </div>
            </div>
            { 
              collapse ?
              <div className={['nav-collapsed', collapsed?'nav-collapsed-center':''].join(' ')} >
                <Button onClick={()=>{this.onCollapse(collapsed)}} size="small">
                  { React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined) }
                </Button>
              </div>
              : ''
            }
            
            <div className="nav-list scrollbar" >
              <NavMenu menus={options.menus}></NavMenu>
            </div>

            <div className="login-out" onClick={this.logout}>
              <ImportOutlined />
            </div>
          </div>
        </Sider>
      </div>
    )
  }
}
