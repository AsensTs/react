import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);
export default store;

/*
redux

1. 使用createStore()创建一个store, 并传入一个纯函数
2. 纯函数 reducer（没有任何副作用）, 用来初始 action
3. reducer接收store和action, store需要使用函数赋初值初始化
4. reducer根据 action.type 来处理dispatch传进来的数据
5. 使用provide在根组件注入store


什么时候使用状态管理
从项目整体看：
  1. 用户使用方式复杂
  2. 不同用户使用方式不一样
  3. 多个用户协作
  4. 与服务器大量交互，或使用了websocket
  5. view要从多个来源获取数据
从组件上看：
  1. 组件跨级状态共享
  2. 需要修改全局状态
*/
