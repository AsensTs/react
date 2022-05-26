


/**
 * index: 路由地址
 * name: 标题
 * icon: 图标
 * disabled: 是否禁用[false]
 * children: 子菜单，最多三级菜单
 * href: 外链 
 * 注意：需要配置路由
 * */ 
 const data =  [  
  {
    index: '/home',
    name: 'Home',
  },
  {
    index: '/page1',
    name: 'Page1',
  },
  {
    index: '/options',
    name: 'Options',
  },
  {
    index: '/email',
    name: 'Email',
    icon: "MailOutlined",
    disabled: true
  },
  {
    name: 'Group',
    icon: 'AppstoreOutlined',
    children: [
      {
        group: "item1",
        data: [
          {
            index: '/child1',
            name: 'child1',
          }, {
            index: '/child2',
            name: 'child2',
          },
        ]
      },
      {
        group: "item2",
        data: [
          {
            index: '/child3',
            name: 'child3',
            children: [
              {
                index: '/son1.1',
                name: 'son1.1',
              },
              {
                index: '/son1.2',
                name: 'son1.2',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Submenu',
    icon: 'AppstoreOutlined',
    children: [
      {
        index: '/child4',
        name: 'child4',
      },
      {
        index: '/child5',
        name: 'child5',
        children: [
          {
            index: '/son2.1',
            name: 'son2.1',
          },
          {
            index: '/son2.2',
            name: 'son2.2',
          }
        ]
      }
    ]
  },
  {
    name: 'baidu',
    href: "https://www.baidu.com"
  },
  {
    index: '/user_management',
    name: '用户管理',
  },
]

const options =  {
  title: "As",         // 主标题
  subname: "asens",   // 副标题
  logo: "./logo.jpg",  // logo
  menus: {             // 菜单Object
    mode: "vertical",  // vertical | horizontal | inline
    data: data         // 菜单
  }
}

export default options;