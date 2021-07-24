import logo from './logo.svg';
import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact components={Main}/>
        <Route path="/test" exact components={Test}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
