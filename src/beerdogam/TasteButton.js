import React from "react";
import styled from "styled-components";

const TasteButton = (props) => {
    return(
        <React.Fragment>
                <TasteScoreButton>1</TasteScoreButton>
                <TasteScoreButton>2</TasteScoreButton>
                <TasteScoreButton>3</TasteScoreButton>
                <TasteScoreButton>4</TasteScoreButton>
                <TasteScoreButton>5</TasteScoreButton>
        </React.Fragment>
    )
}

export default TasteButton;

const TasteScoreButton = styled.button`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 30px;
    background-color: #C4C4C4;
    margin-bottom: 13px;
    cursor: pointer;
`;