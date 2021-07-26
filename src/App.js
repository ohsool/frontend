import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route} from "react-router-dom";
import { history } from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import {Main, Test} from "./pages/indexPage";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main}/>
        <Route path="/test" component={Test}/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Noto Sans KR", sans-serif;
  }
`;