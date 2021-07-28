import React from "react";
import styled from "styled-components";
import Comment from "../componentsBoard/Comment";


const MyComment = () =>{
    console.log("댓글 목록 페이지")

    return(
        <>
            <TitleContainer>
                내가 쓴 댓글
                <span>내가 쓴 댓글</span>
            </TitleContainer>
            <HR/>


            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>


        </>

    )



}

export default MyComment; 


const TitleContainer = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    margin: 13px 0;
    span{
        font-size: 20px;
        font-weight: bold
    }

`;

const HR = styled.hr`
    ${props => (props.border ? `border: ${props.border} soild #212121;` : "border: 2px soild #212121;")};
    width: 350px;
    background-color: ;
`
