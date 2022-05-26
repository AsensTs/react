import React, { Component } from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

type Props = {
  data: Array<string>
}

type State = {}

export default class tabs extends Component<Props, State> {
  
  state = {}
  callback() {

  }

  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    )
  }
}