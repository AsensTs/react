import React, { Component } from 'react'
import Tabs from './tabs/tabs.js'

interface Props {
  
}
interface State {
  
}

export default class index extends Component<Props, State> {
  state = {
    tabs: ['tab1, tab2, tab3']
  }

  render() {
    const { tabs } = this.state
    return (
      <div>
        <Tabs data={tabs}></Tabs>
      </div>
    )
  }
}
