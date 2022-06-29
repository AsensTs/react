import React, { Component } from 'react'
import Icons from '../utils/icons'
import Setting from '../components/common/setting/index'

interface Props {
  
}
interface State {
  
}

export default class Header extends Component<Props, State> {
  state = {
    visible: false
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
    const { visible } = this.state
    return (
      <div className="header-top">
        <div className="top-text">
          <p>Wellcome</p>
        </div>
        <div className="top-icons">
          <div className="bell top-icon"><Icons.BellOutlined /><span className="dot"></span></div>
          <div className="setting top-icon" onClick={this.handleClickSetting}><Icons.SettingFilled /></div>
          <div className="user top-icon"><Icons.UserOutlined /></div>
        </div>
        <div className="setting-container">
          <Setting visible={visible} setVisible={this.handleSetVisible}></Setting>
        </div>
      </div>
    )
  }
}
