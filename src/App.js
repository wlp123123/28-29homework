import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from "./pages/Index"
import Shopcar from "./pages/Shopcar"
import My from "./pages/My"
import {Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/my" component={My} />
        <Route path="/shopcar" component={Shopcar} />
        <Route path="/" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
