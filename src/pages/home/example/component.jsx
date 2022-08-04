import { ReactDOM } from "react";

/**
 * 函数组件 
 * 使用方式：import 导入，在render函数里面渲染组件
 * <Welcome></Welcome> 
 * */ 
function Welcome(props) {
  return <div>Welcome {props.title}</div>
}

// 元素渲染 
function renderText () {
  const element = <div>render 这是元素渲染</div>;
  ReactDOM.render(element, document.getElementById('render'));
}

export {
  renderText,
  Welcome
};