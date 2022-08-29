import React from 'react';
import Login from "./components/login"
import 'antd/dist/antd.css';
import '@/common/assets/style/primary-win/login.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
