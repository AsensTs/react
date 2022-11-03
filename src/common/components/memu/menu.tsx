import React from 'react'
import { Menu } from 'antd'
import { store } from '@/store'
import { setActiveRouter } from '@/store/features/activeRouterSlice'
const { withRouter } = require("react-router-dom")

interface Props {
    menus: any,
    history: any,
    defaultSelectedKeys: Array<any>
}

interface State {
}

class NavMenu extends React.Component<Props, State, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            defaultSelectedKeys: this.props.defaultSelectedKeys? this.props.defaultSelectedKeys : [props.menus.data[0].key]
        }
    }

    componentDidMount() {
        console.log(this.props.menus.data);
    }

    // Default expanded menu
    defaultOpenKeys(menus: any) {
        let defaultOpenKeys: any[] = [];
        if (menus.mode === 'inline') {
            if (this.hasOpened(menus)) {
                // 全局设置子菜单展开
                menus.data.forEach((menu: any) => {
                    if (menu.children && menu.children.length) {
                        defaultOpenKeys.push(menu.key);
                        menu.children.forEach((childMenu: any) => {
                            defaultOpenKeys.push(childMenu.key);
                        })
                    }
                })
            } else {
                // 指定子菜单展开
                menus.data.forEach((menu: any) => {
                    if (menu.children && menu.children.length) {
                        if (this.hasOpened(menu)) {
                            defaultOpenKeys.push(menu.key);
                        }
                        menu.children.forEach((childMenu: any) => {
                            if (this.hasOpened(childMenu)) {
                                defaultOpenKeys.push(childMenu.key);
                            }
                        })
                    }
               })
            }
        }
        return defaultOpenKeys;
    }

    // Whether the menu has the opened attribute
    hasOpened(menu: any) {
        return menu.opened && typeof menu.opened === "string" ? menu.opened === "true": menu.opened;
    }

    getRouter(menus: Array<any>, key: String): any {
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].key !== key) {
                if (menus[i].children && menus[i].children.length > 0) {
                    return this.getRouter(menus[i].children, key);
                }
            } else {
                return menus[i];
            }
        }
    }

    // Clicked menu
    onClick = (MenuItem: any) => {
        if (MenuItem.key.indexOf('http') !== -1 || MenuItem.key.indexOf('https') !== -1) {
            window.open(MenuItem.key);
        } else {
            // Get the complete routing object
            let menus = this.props.menus.data;
            let route = this.getRouter(menus, MenuItem.key);
            delete route.icon;
            store.dispatch(setActiveRouter(route))
            this.props.history.push(MenuItem.key);
        }
    }

    onSelect = (MenuItem: any) => {
        console.log(MenuItem);
    }

    render(): React.ReactNode {
        const { menus } = this.props;
        const mode = menus.mode;
        
        return (
            <Menu
                defaultOpenKeys={this.defaultOpenKeys(menus)}
                {...this.state}
                mode={mode}
                items={menus.data}
                onClick={this.onClick}
                onSelect={this.onSelect}
            ></Menu>
        )
    }
}

export default withRouter(NavMenu)