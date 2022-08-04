import React from 'react';
import {store} from '@/store'
import { Provider } from 'react-redux'
import Home from './view/Home'
import '@index/App.css';
import '@/common/assets/style/primary-win/index.scss'

class App extends React.Component {
  render() {
    return (
    <div className="app">
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </div>
    );
  }
}

export default App;
