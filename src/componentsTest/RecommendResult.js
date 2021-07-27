import React from "react";
import styled from "styled-components";

import ShareResult from "./ShareResult";

const RecommendResult = () => {
    return (
        <React.Fragment>
            <ImageGrid>
                    <ImageGridcenter>
                        <QuestionWrap>추천하는 술</QuestionWrap>
                    </ImageGridcenter>
            </ImageGrid>
            <div>
                {/* <ReButton>다시하기</ReButton> */}
            <ShareResult/>
            </div>

        </React.Fragment>
    )
}

export default RecommendResult;

const ImageGrid = styled.div`
    width: 100%;
    height: 300px;
    display: table;
`;

const ImageGridcenter = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`;

const QuestionWrap = styled.div`
    background-color: #D1D1D1;
    display: inline-block;
    line-height: 155px;
    width: 155px;
    height: 155px;
    border-radius: 8px;
`;

// const ReButton = styled.button`
//     position: absolute;
//     display: inline-block;
//     margin: -27px 0 0 -27px;
//     font-size: 12px;
//     width: 54px;
//     height: 54px;
//     border: none;
//     border-radius: 54px;
//     background-color: #D1D1D1;
//     cursor: pointer;
// `;
