import React from 'react';
import {store} from '@/store/redux'
import { Provider } from 'react-redux'
import Main from './view/Main'
import '@/common/assets/style/primary-win/index.scss'
const { withRouter } = require("react-router-dom")

interface Props {
  history: any
}
interface State {
  
}

class App extends React.Component <Props, State>{
  
  componentDidMount() {
    console.log("App 挂载完成");
    console.log(this.props);
    this.props.history.listen((path: any) => {
      console.log(path);
    })
  }

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

export default withRouter(App);
