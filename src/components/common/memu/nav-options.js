
import React from 'react';
import icons from '../../../util/icons'
/**
 * key: 路由地址
 * label: 标题
 * icon: 图标
 * disabled: 是否禁用[false]  
 * children: 子菜单，最多三级菜单
 * href: 外链 
 * 注意：需要配置路由
 * */ 
 const data =  [  
  {
    key: '/home',
    label: 'Home',
  },
  {
    key: '/page1',
    label: 'Page1',
  },
  {
    key: '/options',
    label: 'Options',
  },
  {
    key: '/email',
    label: 'Email',
    icon: "MailOutlined",
    disabled: true
  },
  {
    label: 'Group',
    icon: 'AppstoreOutlined',
    children: [
      {
        group: "item1",
        data: [
          {
            key: '/child1',
            label: 'child1',
          }, {
            key: '/child2',
            label: 'child2',
          },
        ]
      },
      {
        group: "item2",
        data: [
          {
            key: '/child3',
            label: 'child3',
            children: [
              {
                key: '/son1.1',
                label: 'son1.1',
              },
              {
                key: '/son1.2',
                label: 'son1.2',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Submenu',
    icon: 'AppstoreOutlined',
    children: [
      {
        key: '/child4',
        label: 'child4',
      },
      {
        key: '/child5',
        label: 'child5',
        children: [
          {
            key: '/son2.1',
            label: 'son2.1',
          },
          {
            key: '/son2.2',
            label: 'son2.2',
          }
        ]
      }
    ]
  },
  {
    key: 'https://www.baidu.com',
    label: 'baidu',
  },
  {
    key: '/user_management',
    label: '用户管理',
  },
]

// set icon component
for (let i = 0; i < data.length; i++) {
  let iconName = data[i].icon;
  let children = data[i].children;
  if (iconName) {
    data[i].icon = React.createElement(icons[iconName]);
  }

  if (children && children.length) {
    for (let j = 0; j < children.length; j++) {
      let iconName = data[j].icon;
      if (iconName) {
        data[j].icon = React.createElement(icons[iconName]);
      }   
    }
  }
}

const options =  {
  title: "As",         // String 主标题
  subname: "asens",    // String 副标题
  logo: "./logo.jpg",  // String logo
  menus: {             // Object 菜单 
    mode: "inline",    // String 模式 vertical | horizontal | inline
    data: data         // Array[object] 菜单
  }
}

export default options;