import React from 'react';
import {store} from "@/store/redux";
import { Provider } from 'react-redux';
import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Home></Home>
        </Provider>
      </header>
    </div>
  );
}

export default App;
