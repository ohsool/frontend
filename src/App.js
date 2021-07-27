import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Board from "./pages/Board";
import MyPage from "./pages/MyPage";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/board" component={Board}/>
        <Route path="/mypage" component={MyPage}/>        
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
