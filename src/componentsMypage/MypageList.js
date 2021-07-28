import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";

const MypageList = ()=>{

    return(
        <>
            <TitleContainer>
                마이페이지
            </TitleContainer>
            <HR border="2px"/>

            <Grid>
                내가 쓴 댓글 확인하기
                <button onClick={()=> history.push('/mypage/mycomment')}>버튼</button>
            </Grid>
            <HR/>

            <Grid>
                나를 태그한 댓글 확인하기
                <button onClick={()=> history.push('/mypage/tagging')}>버튼</button>
            </Grid>
            <HR/>

            <Grid>
                맥주 건의하기
                <button>버튼</button>
            </Grid>
            <HR/>
                
            <Grid>
                관리자에게 건의하기
                <button>버튼</button>
            </Grid>
            <HR/>

        </>

    )
}


export default MypageList;





const Container = styled.div`
    display:block;
    width: 360px;
    height: 640px;
    margin: 13px auto;
    padding: 0 10px;
    border: 2px solid #212121;
`;

const TitleContainer = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    margin: 13px 0;
`;

const Grid = styled.div`
    width: 320px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HR = styled.hr`
    ${props => (props.border ? `border: ${props.border} soild #212121;` : "border: 2px soild #212121;")};
    width: 350px;
    background-color: ;
`


