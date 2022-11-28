import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

type Props = {}

type State = {}

const text = `
  在React中提供了一种访问DOM节点的方式，也就是这里的refs。

  一、 如何使用refs
    1. 字符串ref使用

    ''' react
      class Goods extends React.Component {
        inputClick = () => {
            // 2.点击的时候，直接通过this.refs.xxx进行访问
            const myInput = this.refs.myInput
            alert(myInput.value)
        }

        render() {
            const {inputClick} = this
            return (
                <div>
                    <!-- 1. 在需要获取的组件实例或者dom上直接绑定ref属性 -->
                    <input type="text" ref="myInput"/>
                    <button onClick={inputClick}>点击我输入框聚焦</button>
                </div>
            );
        }
      }

    '''
`

export default class refs extends Component<Props, State> {

  state = {
    refsOpen: false
  }

  handleOpenRefsModal = () => {
    this.setIsModalOpen(true);
  }

  handleOk = () => {
    this.setIsModalOpen(false);
  };

  handleCancel = () => {
    this.setIsModalOpen(false);
  };

  setIsModalOpen = (value: boolean) => {
    this.setState({
      refsOpen: value
    })
  }

  render() {
    const { refsOpen } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.handleOpenRefsModal}>Refs {refsOpen? "true": "false"}</Button>
        <Modal title="Refs" open={refsOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
          <ReactMarkdown children={text} />,
        </Modal>
      </div>
    )
  }
}