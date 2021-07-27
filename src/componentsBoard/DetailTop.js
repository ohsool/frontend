import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const DetailTop = ()=> {
    const history = useHistory();
    


    return (
        <>
            <TitleContainer>
                <button onClick={()=>history.goBack()}>뒤로가기</button>
                <span><b>Title</b></span>
            </TitleContainer>
            <HR/>

        </>

    )

}

export default DetailTop;

const HR = styled.hr`
    border: 0;
    height: 2px;
    width: 350px;
    background-color: #212121;
`

const TitleContainer = styled.div`
    width: 360px;
    display: block;
    justify-content: center;
    margin: 13px 0;
    button{
        margin: 0 100px 0 0;
    }
    span{
        font-size = 16px;
    }
`;