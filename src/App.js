import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route} from "react-router-dom";
import { history } from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import {Main, Test} from "./pages/indexPage";
import Header from "./Header";
import SignUp from "./pages/SignUp";
import BeerDogam from "./beerdogam/BeerDogam";
import BeerReview from "./beerdogam/BeerReview";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main}/>
        <Route path="/test" component={Test}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/beerdogam" exact component={BeerDogam}/>
        <Route path="/beerreview" exact component={BeerReview}/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Noto Sans KR", sans-serif;
    // background-color: #F2F3F7;
  }
`;