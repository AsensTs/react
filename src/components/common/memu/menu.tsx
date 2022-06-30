import React from 'react'
import { Menu } from 'antd'
import { store } from '@/store'
import { setActiveRouter } from '@/store/features/activeRouterSlice'
const { withRouter } = require("react-router-dom")

interface Props {
    menus: any,
    history: any,
}

interface State {
    defaultSelectedKeys: any
}

class NavMenu extends React.Component<Props, State, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            defaultSelectedKeys: [props.menus.data[0].key]
        }
    }

    componentDidMount() {
    }

    defaultOpenKeys(menus: any) {
        let defaultOpenKeys: any[] = [];
        if (menus.mode === 'inline') {
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

        return defaultOpenKeys;
    }

    // Whether the menu has the opened attribute
    hasOpened(menu: any) {
        return menu.opened && menu.opened === "true";
    }

    onClick = (MenuItem: any) => {
        store.dispatch(setActiveRouter(MenuItem.key))
        this.props.history.push(MenuItem.key);
    }

    onSelect = (MenuItem: any) => {
        console.log(MenuItem);
    }

    render(): React.ReactNode {
        const { menus } = this.props;
        const { defaultSelectedKeys } = this.state;
        const mode = menus.mode;
        
        return (
            <div>
                <Menu
                    defaultOpenKeys={this.defaultOpenKeys(menus)}
                    defaultSelectedKeys={defaultSelectedKeys}
                    mode={mode}
                    items={menus.data}
                    onClick={this.onClick}
                    onSelect={this.onSelect}
                ></Menu>
            </div>
        )
    }
}

export default withRouter(NavMenu)