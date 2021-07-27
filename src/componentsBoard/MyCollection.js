import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import BoardTop from "./BoardTop";
import Collection from "./Collection"

const MyCollection = ()=> {

    const history = useHistory();
    const collection = [{title: '인디 IPA'}, {title: '블루문'}];

    return (
    <>
    <BoardTop/>
    <List>
        {collection.length > 0 ? collection.map((item, idx) => (
            <Collection key={idx} {...item} 
            _onClick={() =>
                history.push("/board/mycollection/detail")
            }
            />
        )):""}
    </List>
    </>
    )
}

export default MyCollection;

const List = styled.div`
    width: 320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap : 5px; 
`;
