import React from "react";
import styled from "styled-components";

const BeerReviewScore = (props) => {
    return(
        <React.Fragment>
            <TasteLevelWrap>
                <TasteFlavorWrap>
                    <span>쓴맛</span>
                    <span>단맛</span>
                </TasteFlavorWrap>
                <TasteScoreWrap>
                    <TasteScore>
                        <TasteButton>1</TasteButton>
                        <TasteButton>2</TasteButton>
                        <TasteButton>3</TasteButton>
                        <TasteButton>4</TasteButton>
                        <TasteButton>5</TasteButton>
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
    border: 1px solid;
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
    width: 190px;
    height: 240px;
    display: inline-block;
    border: 1px solid;
    margin: 35px 0 0 6px;
`;

const TasteScore = styled.div`
    width: 200px;
    height: 30px;
    margin-bottom: 13px;
`;

const TasteButton = styled.button`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 30px;
    background-color: #C4C4C4;
`;

const ReviewButton = styled.button`
    width: 111px;
    height: 40px;
    border: none;
    background-color: black;
    border-radius: 10px;
    color: #FFFFFF;
    float: right;
`;
