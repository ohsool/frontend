import React from "react";
import styled from "styled-components";

const RecommendTest = () => {
    return (
        <React.Fragment>
            <ImageGrid>
                    <ImageGridcenter>
                        <QuestionWrap>질문 1</QuestionWrap>
                    </ImageGridcenter>
            </ImageGrid>
            <QuestionAnswerWrap>
                <Wrap>
                    <QuestionAnswer>대답 1</QuestionAnswer>
                    <QuestionAnswer>대답 2</QuestionAnswer>
                    <QuestionAnswer>대답 3</QuestionAnswer>
                    <QuestionAnswer>대답 4</QuestionAnswer>
                </Wrap>
            </QuestionAnswerWrap>
        </React.Fragment>
    )
}

export default RecommendTest;

const ImageGrid = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    display: table;
`;

const ImageGridcenter = styled.div`
    display: table-cell;
    text-align: center;
`;

const QuestionWrap = styled.div`
    display: inline-block;
    font-size: 40px;
    line-height: 200px;
    color: white;
`;

const QuestionAnswerWrap = styled.div`
    width: 100%;
    height: 270px;
    position: absolute;
    margin-top: 0;
`;

const Wrap = styled.div`
    display: inline-block;
    width: 250px;
    margin-top: -84px;
`;

const QuestionAnswer = styled.div`
    width: 250px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
    border-radius: 10px;
    background: #D1D1D1;
    margin-top: 10px;
`;