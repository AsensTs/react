import React from 'react';
import {store} from "@/store";
import { Provider } from 'react-redux';
import Login from "./components/login";
import 'antd/dist/antd.css';
import '@/common/assets/style/primary-win/login.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Login></Login>
        </Provider>
      </header>
    </div>
  );
}

export default App;
