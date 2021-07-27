import React from "react";
import styled from "styled-components";

import BeerReviewScore from "./BeerReviewScore";

const BeerReview = (props) => {
    return(
        <React.Fragment>
            <ReviewWrap>
                <InputReview placeholder="술에 대한 자신만의 느낀점을 적어주세요!">
                </InputReview>
                <ScoreWrap>
                    <BeerReviewScore/>
                </ScoreWrap>
            </ReviewWrap>
        </React.Fragment>
    )
}

export default BeerReview;

const ReviewWrap = styled.div`
    width: 360px;
    display: flex;
    flex-direction: column;
`;

const InputReview = styled.textarea`
    border: 0.5px solid #888888;
    box-sizing: border-box;
    margin: 20px auto;
    width: 320px;
    height: 150px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #888888;
        margin: 10px 0 0 10px;
        position: absolute;
    }
`;

const ScoreWrap = styled.div`
    width: 360px;
    height: 305px;
    border: 1px solid;
    box-sizing: border-box;
`;