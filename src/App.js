import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route} from "react-router-dom";
import { history } from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import {Main, Test} from "./pages/indexPage";
import Header from "./Header";
import SignUp from "./pages/SignUp";
import BeerDogam from "./beerdogam/BeerDogam";

import Board from "./pages/Board";
import MyPage from "./pages/MyPage";


function App() {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <BrowserRouter>
        <Route path="/board" component={Board}/>
        <Route path="/mypage" component={MyPage}/>        
      </BrowserRouter>
=======
      <GlobalStyle/>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main}/>
        <Route path="/test" component={Test}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/beerdogam" exact component={BeerDogam}/>
      </ConnectedRouter>
>>>>>>> 72c40f3e3d12cbde92b15b044f8c5548d7884109
    </React.Fragment>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Noto Sans KR", sans-serif;
  }
`;