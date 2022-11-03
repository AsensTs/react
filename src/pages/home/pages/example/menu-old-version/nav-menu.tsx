/*
Warning: [antd: Menu] `children` will be removed in next major version. Please use `items` instead.

andt 更新导致警告 https://ant.design/components/menu-cn/
在 4.20.0 版本后，我们提供了
的简写方式，有更好的性能和更方便的数据组织方式，开发者不再需要自行拼接 JSX。同时我们废弃了原先的写法，你还是可以在 4.x 继续使用，但会在控制台看到警告，并会在 5.0 后移除。

*/
import React from 'react'
import { Menu } from 'antd'
import {icons} from './icons'
import store from '../redux-old-store'
import { navMenus } from '../redux-old-store/action'
const { Link } = require('react-router-dom')
const { SubMenu } = Menu;


interface Props {
  menus: any
}

interface State {
}

export default class navmenu extends React.Component<Props, State, any> {
  state = {
    // 初始展开的 SubMenu 菜单项 key 数组
    current: '',
  };

  // 挂载完成
  componentDidMount() {
    let { menus } = this.props;
    this.setState({
      current: menus.data[0].name + '-' + menus.data[0].index
    })
  }

  // 处理单击事件
  handleClick = (e: any) => {
    console.log('click ', e);
    // 拿到key (格式：name-index)
    let key = e.key;
    let keyArr = key.split('-');
    let obj = { name: keyArr[0], index: keyArr[1] };

    // 设置选中的menu & store存储选中的menu
    this.setState({ current: key });
    store.dispatch(navMenus(obj));
  };

  // 跳转外部链接
  jump = (link: string) => {
    window.location.href = link
  }

  menuItem = (item: any) => {
    return (
      <Menu.Item key={item.name + '-' + item.index} disabled={item.disabled}>
        <Link to={item.index}>{item.name}</Link>
      </Menu.Item>
    )
  }
  
  menuItemGroup = (item: any) => {
    return (
      <Menu.ItemGroup key={item.group} title={item.group}>
        {
          item.data.map((item: any) => {
            return this.menuItem(item);
          })
        }
      </Menu.ItemGroup>
    )
  }
  
  // key 绑定的值
  key(data: any, key?: string) {
    if (key && arguments.length === 2) {
      return data[key]
    } else if (data.index === undefined) {
      return data.name
    } else {
      return data.name + '-' + data.index
    }
  }

  render() {
    const { current} = this.state;
    const { menus } = this.props;
    let list = menus.data;
    let mode = menus.mode ? menus.mode : 'inline';   // vertical | horizontal | inline
    let theme = menus.theme ? menus.theme : 'light'; // light | dark
    
    return (
      <div>
        <Menu 
          onClick={this.handleClick} 
          defaultSelectedKeys={[list[0].name + '-' + list[0].index]} 
          defaultOpenKeys={[current]} 
          mode={mode} 
          theme={theme} 
        >
          {
            list.map((item: any) => {

              let Icon: any;
              if (item.icon) {
                Icon = icons[item.icon]
              } else {
                Icon = icons.SettingOutlined
              }

              if (!item.children) {
                // 一级菜单
                return (
                  <Menu.Item key={this.key(item)} icon={<Icon />} disabled={item.disabled}>
                    {
                      item.index
                        ? <Link to={item.index}>{item.name}</Link>
                        : item.href
                          ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
                          : item.name
                    }
                  </Menu.Item>
                )
              } else {
                // 二三级菜单
                return (
                  <SubMenu key={this.key(item)} icon={item.icon ? <Icon /> : false} title={item.name} disabled={item.disabled}>
                    {
                      // 循环组
                      item.children.map((childItem: any) => {
                        let data = childItem;
                        if (childItem.group) {
                          data = childItem.data;
                          return (
                            <Menu.ItemGroup key={this.key(childItem, 'group')} title={childItem.group}>
                              {
                                data.map((item: any) => { // 带group所以要多循环一层
                                  return (
                                    ! item.children
                                    ? this.menuItem(item)
                                    : <SubMenu key={this.key(item)} title={item.name}>
                                        {
                                          // 循环组
                                          item.children.map((son: any) => {
                                            if (son.group) {
                                              // 带group字段的就渲染这部分
                                              return this.menuItemGroup(son);
                                            }

                                            return this.menuItem(son);
                                          })
                                        }
                                      </SubMenu>
                                  )
                                })
                              }
                            </Menu.ItemGroup>
                          )
                        }

                        return (
                          ! childItem.children
                          ? this.menuItem(childItem)
                          : <SubMenu key={this.key(childItem)} title={childItem.name}>
                              { // 循环组
                                childItem.children.map((son: any) => {
                                  if (son.group) {
                                    // 带group字段的就渲染这部分
                                    return this.menuItemGroup(son);
                                  }
                                  return this.menuItem(son); // 默认渲染
                                })
                              }
                            </SubMenu>
                        )
                      })
                    }

                  </SubMenu>
                )
              }
            })
          }
        </Menu>
      </div>
    );
  }
}