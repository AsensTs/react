import React from 'react';
import {store} from '@/store'
import { Provider } from 'react-redux'
import Routes from '@/pages/home/router'
import '@index/App.css';
import '@/common/assets/style/primary-win/index.scss'

const { Router, Route, Switch, Redirect } = require('react-router-dom');
const { createHashHistory } = require('history');
const hash: any = createHashHistory();

class App extends React.Component {
  render() {
    return (
    <div className="app">
      <Provider store={store}>
        <Router history={hash}>
          <Switch>
            {
              Routes.map(route => {
                return <Route exact={true} key={route.path} path={route.path} component={route.component}></Route>
              })
            }
            <Redirect from='/' to="/index" exact></Redirect>
            <Redirect to="/404" exact></Redirect>
          </Switch>
        </Router>
      </Provider>
    </div>
    );
  }
}

export default App;
