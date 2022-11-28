import Routes from '@home/router'
const { Router, Route, Switch, Redirect } = require('react-router-dom');
const { createHashHistory } = require('history');
const hash: any = createHashHistory();

const routerView = () => {
    return (
        <Router history={hash}>
            <Switch>
                {
                    Routes.map(route => {
                        return (
                            <Route key={route.path} path={route.path} component={route.component}></Route>
                        )
                    })
                }

                {/* 自动重定向路由第一个 */}
                <Redirect from='/' to={Routes[0].path} exact></Redirect>
                <Redirect to="/404" exact></Redirect>
            </Switch>
      </Router>
    );
}

export default routerView;