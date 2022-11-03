import React from 'react';
import {store} from '@/store'
import { Provider } from 'react-redux'
import Main from './view/Main'
import '@/common/assets/style/primary-win/index.scss'

class App extends React.Component {
  render() {
    return (
    <div className="app">
      <Provider store={store}>
        <Main></Main>
      </Provider>
    </div>
    );
  }
}

export default App;
