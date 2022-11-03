import React, { Component } from 'react'
import Icons from '@/common/utils/icons'
import Setting from '../components/setting/index'
import { store } from "@/store"
import { getActiveRouter } from "@/store/features/activeRouterSlice"
import Cookie from "@/common/utils/cookie"

const cookie = new Cookie();

interface Props {
  
}
interface State {
  
}

export default class Header extends Component<Props, State> {
  state = {
    visible: false,
    activeRouter: "",
    username: ""
  }

  componentDidMount() {
    this.setState({
      username: cookie.get("username")
    })

    store.subscribe(() => {
      this.setState({
        activeRouter: getActiveRouter(store).label
      })
    })
  }

  handleClickSetting = () => {
    console.log('handleClickSetting');
    this.setState({
      visible: true
    })
  }

  handleSetVisible = (value: boolean) => {
    this.setState({ visible: false })
  }

  render() {
    const { visible, activeRouter, username} = this.state
    return (
      <div className="header-top">
        <div className="top-text">
          <p>{activeRouter}</p>
        </div>
        <div className="top-icons">
          <div className="bell top-icon"><Icons.BellOutlined /><span className="dot"></span></div>
          <div className="setting top-icon" onClick={this.handleClickSetting}><Icons.SettingFilled /></div>
          <div style={{"display": "flex"}}><div className="user top-icon"><Icons.UserOutlined /></div><p>{username}</p></div>
        </div>
        {/* { username } */}
        <div className="setting-container">
          <Setting visible={visible} setVisible={this.handleSetVisible}></Setting>
        </div>
      </div>
    )
  }
}
