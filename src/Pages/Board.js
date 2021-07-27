import React from 'react';
import styled from 'styled-components';
import {Route,Switch} from "react-router-dom";

import DrinkCategory from '../componentsBoard/DrinkCategory';
import DrinkDetail from '../componentsBoard/DrinkDetail';
import MyCollection from '../componentsBoard/MyCollection';
import MyCollectionDetail from '../componentsBoard/MyCollectionDetail';


const Board = () => {
    return (
        <>
        <Container>
            <Switch>
                <Route path="/board/category" exact component={DrinkCategory}/>
                <Route path="/board/category/detail" component={DrinkDetail}/>
                <Route path="/board/mycollection" component={MyCollection}/>
                <Route path="/board/mycollection/detail" component={MyCollectionDetail}/>                       
            </Switch>
        </Container>

        </>
    )

}

export default Board;

const Container = styled.div`
    display:block;
    width: 360px;
    min-height: 640px;
    margin: 0 auto;
    padding: 0 10px;
    border: 2px solid #212121;
`;
