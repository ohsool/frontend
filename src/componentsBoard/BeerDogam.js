import React from "react";
import styled from "styled-components";

import TasteGraph from "./TasteGraph";
const BeerDogam = (props) => {
    return(
        <React.Fragment>
            <TastingNoteWrap>
                <BeerImage></BeerImage>
                <BeerInfoWrap>
                    <p><strong>하이트</strong></p>
                    <p>하이트가 속한 종류</p>
                </BeerInfoWrap>
                <BeerExplain>
                    <span>하이트에 대한 간단한 설명하이트에 대한 간단한 설명</span>
                </BeerExplain>
                <GradeGraphWrap>
                    <TasteGraph/>
                </GradeGraphWrap>
            </TastingNoteWrap>
        </React.Fragment>
    )
}

export default BeerDogam;

const TastingNoteWrap = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const BeerImage = styled.div`
    width: 155px;
    height: 155px;
    background-color: #C4C4C4;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 30px;
`;

const BeerInfoWrap = styled.div`
    display: inline-block;
    & > p {
        font-size: 14px;
        color: #666666;
    }
    & > p > strong {
        font-size: 16px;
    }
`;

const BeerExplain = styled.div`
    margin: 0 auto;
    width: 152px;
    & > span{
        font-size: 14px;
        color: #666666;
    }
`;

const GradeGraphWrap = styled.div`
    width: 265px;
    height: 265px;
    margin: auto;
    margin-top: 32px;
    background-color: #C4C4C4;
    border-radius: 10px;
`;