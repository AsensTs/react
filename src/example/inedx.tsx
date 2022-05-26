import React, { Component } from 'react'
import { Welcome } from './component'

type Props = {
  name: String,
  age: 18
}

type State = {
  num: Number,
  str: String,
  obj: any,
  btnType: String
}

/**
 * Jsx 变量声明 
 * 使用： {变量名}
 * */
const text = "Hello As!";
const title = <div>{ text }</div>;
const hello = (
  <div>
    <h1>{title}</h1>
    <h2>JSX 变量声明</h2>
  </div>
);



/**
 * 组件创建
 * class方式 创建组件 
 * 函数方式参考 example/component.jsx/renderText()
*/
export default class inedx extends Component<Props, State> {

  /**
   * props 设置默认属性
  */
  static defaultProps = {
    name: 'as',
    age: 18,
  };



  /** 
   * state 使用  
   * 
   * 声明：
   *  方式一 构造函数
   *  constructior(props){ 
   *     super(props);
   *     this.state = {};
   *  }  
   * 
   *  方式二 类属性
   *  state = {}
   * 
   * 修改state: 不要直接修改 state， 通过 setState() 方法去修改 state
   *  setState() {}
   *  例如： this.setState({str: 'Hello'});
  */
  // 声明方式一 constructior(){} 里面声明 state
  constructor(props: Props | Readonly<Props>) {
    super(props);   // 继承父类
    this.state = {  // 构造函数下需要在 "type State {}" 进行类型声明
      num: 10,
      str: "sate",
      obj: {
        no: 1,
        name: "as"
      },
      btnType: 'red'
    }
    // this.changeState = this.changeState.bind(this);
  }

  // 声明方式二  state = {} 类属性
  // state = { // 可以不用类型声明
  //   num: 10,
  //   str: "sate",
  //   obl: true,
  //   obj: {
  //     no: 1,
  //     name: "as"
  //   }
  // }



  

  /**
   * 事件处理 函数声明
   * react重写了事件方法，方法前面加 "on"。
   * 
   * onClick={this.changeSate}
   * onClick={() => this.handleClick()
  */
  // 普通函数声明，访问 this 会报错。
  // 这种常规的定义函数方法，在函数调用时，没有用call、apply指定this的指向时，默认的this是undefined，所以调用不到setState。
  // 解决方法： 1. 需要在构造函数中设置this。 this.changeState = this.changeState.bind(this);
  //           2. 元素绑定： <button onClick={() => this.handleClick() />
  // changeState () {
  //   this.setState({str: 'Hello'});
  //   this.setState({obj: { no: 2, name: 'ts' }});
  // }

  // es6 箭头函数
  changeState = () => {
    this.setState({obj: { no: 2, name: 'ts' }});
  }



  /**
   * 生命周期
   * 生命周期分三个阶段： 挂载， 更新， 卸载
  */ 
  // 挂载阶段
  // constructor 构造函数会先执行，一般会初始化state, 或者给自定义方法绑定 this;

  // getDerivedStateFromProps 会在调用 render 方法之前调用，即在渲染 DOM 元素之前会调用，并且在初始挂载及后续更新时都会被调用。
  static getDerivedStateFromProps(props: any, state: any) {
    console.log('getDerivedStateFromProps');
    return {num: props.num };
  }

  componentDidMount() {
    console.log("组件挂载完成");
  }

  // shouldComponentUpdate，有两个参数nextProps和nextState，表示新的属性和变化之后的state，
  // 方法返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化React程序性能
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("shouldComponentUpdate");
    console.log("新的Props", nextProps);
    console.log("新的State", nextState);
    return true;
  }

  // getSnapshotBeforeUpdate 这个方法在render之后，componentDidUpdate之前调用，
  // 有两个参数prevProps和prevState，表示之前的属性和之前的state
  // 这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，可以返回null，
  // 此生命周期必须与componentDidUpdate搭配使用
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("旧的Props", prevProps);
    console.log("旧的State", prevState);
    return prevState.obj.name;
  }

  // componentDidUpdate方法在 getSnapshotBeforeUpdate 方法之后被调用，
  // 有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和 snapshot。
  // snapshot 参数是 getSnapshotBeforeUpdate 返回的
  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
    console.log("组件更新完成");
  }

  // componentWillUnmount: 当组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作。
  componentWillUnmount() {
    console.log("组件卸载");
  }

  

  /**
   * 条件判断
   * if else 
   * ......
   * 
   * 条件判断语句不能在 JSX 里面写
   * JSX 可以用三目运算符: btnType === 'red' ? <p>red</p> : <p>blue</p>
   * 运算符 &&: 
  */
  blueBtn () {
    return (<button style={{backgroundColor: "blue"}}>button</button>)
  }
  redBtn () {
    return (<button style={{backgroundColor: "red"}}>button</button>)
  }


  render() {
    const { btnType } = this.state;
    const { name, age } = this.props;
    console.log(name, age);
    
    let title = "React Test"
    
    let arr = [1,2,3,4,5];
    let button = null;
    if (btnType === 'red') {
      button = this.redBtn()
    } else {
      button = this.blueBtn()
    }
    
    return (
      <div>
        {/* props 传值 */}
        <Welcome title={title}></Welcome> 


        <div>{ hello }</div>
        <br/>

        <div>
          <strong>State Using</strong>
          <p>使用：this.state.obj.name // {this.state.obj.name}</p>
          <div>使用setState 修改 state里面的数据 <button onClick={this.changeState} style={{width: '30px', height: '15px'}}></button></div>
        </div>

        <br/>
        {/* 条件判断 */}
        <div>
          <strong>条件判断</strong><br/>
          {button}
          { btnType === 'red' ? <p>red</p> : <p>blue</p> }
          { arr.length && <div>数组：{arr}</div> }
        </div>

        <br/>
        {/* 列表渲染 */}
        <div>
          <strong>条件判断</strong><br/>
          <div>
            {
              arr.map(item => {
                return <p key={item.toString()}>{item}</p>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}



/**
 * 行内样式
 * style={{width: '80px', height: '30px'}}
*/


