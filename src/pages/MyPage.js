import React from 'react';
import styled from 'styled-components';
import {Route,Switch} from "react-router-dom";

import MypageList from "../componentsMypage/MypageList";
import MyComment from "../componentsMypage/MyComment";
import TaggingComment from "../componentsMypage/TaggingComment";

const Mypage = () => {

    return (
        <>
        <Container>
            <Switch>
                <Route path="/mypage/list" exact component={MypageList}/>
                <Route path="/mypage/mycomment" component={MyComment}/>
                <Route path="/mypage/tagging" component={TaggingComment}/>
            </Switch>
        </Container>
        
        </>
    )


}

export default Mypage;

const Container = styled.div`
    display:block;
    width: 360px;
    min-height: 640px;
    margin: 0 auto;
    // padding: 0 10px;
    // border: 2px solid #212121;
`;

        