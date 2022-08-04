
import React from 'react';
import icons from '@index/utils/icons.ts'

/**
 * key:       String  路由地址
 * label:     String  标题
 * icon:      String  图标
 * opened:    String  是否展开子菜单(必须有子菜单)，默认为 false
 * disabled:  Boolean 是否禁用, 默认为false
 * children:  Array   子菜单，最多三级菜单
 * href(key): String  外链格式：必须要以 http 或 https 开头, 配置在 key 里面
 * 注意：需要配置路由
 * */ 
 const data =  [  
  {
    key: '/home',
    label: 'Home',
    icon: "HomeOutlined"
  },
  {
    key: '/page1',
    label: 'Page1',
    icon: "FileOutlined"
  },
  {
    key: '/options',
    label: 'Options',
    icon: "FileOutlined"
  },
  {
    key: '/email',
    label: 'Email',
    icon: "MailOutlined",
    disabled: true
  },
  {
    key: "Group",
    label: 'Group',
    icon: 'AppstoreOutlined',
    children: [
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
    key: "Submenu",
    label: 'Submenu',
    icon: 'AppstoreOutlined',
    children: [
      {
        key: 'submenu/child4',
        label: 'child4',
      },
      {
        key: 'submenu/child5',
        label: 'child5',
        children: [
          {
            key: 'submenu/son2.1',
            label: 'son2.1',
          },
          {
            key: 'submenu/son2.2',
            label: 'son2.2',
          }
        ]
      }
    ]
  },
  {
    key: 'https://www.baidu.com',
    label: 'baidu'
  },
  {
    key: '/user_management',
    label: '用户管理',
  },
]

// set icon component
const setIconComponent = (data) => {
  for (let i = 0; i < data.length; i++) {
    let iconName = data[i].icon;
    let children = data[i].children;
    if (iconName) {
      data[i].icon = React.createElement(icons[iconName]);
    }

    if (children && children.length) {
      setIconComponent(children)
    }
  }
}
setIconComponent(data);


const options =  {
  title: "As",         // String 主标题
  subname: "asens",    // String 副标题
  logo: "./logo.jpg",  // String logo
  menus: {             // Object 菜单 
    mode: "inline",    // String 模式 vertical | horizontal | inline
    // opened: true,   // String | Boolean 展开全部子菜单
    data: data         // Array[object] 菜单
  }
}

export default options;