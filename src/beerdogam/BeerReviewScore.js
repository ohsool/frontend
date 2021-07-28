import React from "react";
import styled from "styled-components";

import TasteButton from "./TasteButton";
const BeerReviewScore = (props) => {
    const TasteData = ["쓴맛", "단맛", "고소한맛", "청량감", "향", "도수"];
    return(
        <React.Fragment>
            <TasteLevelWrap>
                <TasteFlavorWrap>
                    {TasteData.map((taste) => 
                        (<span>{taste}</span>)
                    )}
                </TasteFlavorWrap>
                <TasteScoreWrap>
                    {TasteData.map((taste) => (
                        <TasteButton/>
                    ))}
                    <TasteScore>
                    </TasteScore>
                </TasteScoreWrap>
            </TasteLevelWrap>
            <ReviewButton>
                도감 작성하기
            </ReviewButton>
        </React.Fragment>
    )
}

export default BeerReviewScore;

const TasteLevelWrap = styled.div`
    width: 360px;
    display: flex;
    flex-direction: row;
`;

const TasteFlavorWrap = styled.div`
    margin: 35px;
    display: inline-block;
    width: 59px;
    height: 238px;
    & > span {
        display: block;
        font-size: 16px;
        font-weight: bold;
        line-height: 30px;
        margin-bottom: 13px;
    }
`;

const TasteScoreWrap = styled.div`
    width: 200px;
    height: 240px;
    display: inline-block;
    margin: 35px 0 0 6px;
`;

const TasteScore = styled.div`
    width: 190px;
    height: 30px;
    margin-bottom: 13px;
`;

const ReviewButton = styled.button`
    width: 111px;
    height: 40px;
    margin-right: 20px;
    border: none;
    background-color: black;
    border-radius: 10px;
    color: #FFFFFF;
    float: right;
`;
