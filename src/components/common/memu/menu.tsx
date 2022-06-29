import { store } from '../../../store'
import React from 'react'
import { Menu } from 'antd'
import { setActiveRouter } from '../../../store/features/activePageSlice'
const { withRouter } = require("react-router-dom")


interface Props {
    menus: any,
    history: any,
}

interface State {
}

class NavMenu extends React.Component<Props, State, any> {

    onClick = (MenuItem: any) => {
        store.dispatch(setActiveRouter(MenuItem.key))
        this.props.history.push(MenuItem.key);
    }

    render(): React.ReactNode {
        const { menus } = this.props;
        const mode = menus.mode;
        return (
            <div>
                <Menu
                    defaultSelectedKeys={[menus.data[0].key]}
                    mode={mode}
                    items={menus.data}
                    onClick={this.onClick}
                ></Menu>
            </div>
        )
    }
}

export default withRouter(NavMenu)