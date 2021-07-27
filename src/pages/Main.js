import React from "react";
import styled from "styled-components";

import MainImage from "../maincomponents/MainImage";
import ohsoolImage from "../share/ohsoolImage.jpeg"

const Main = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <ImageGrid>
                    <MainImage/>
                </ImageGrid>
            </Grid>
        </React.Fragment>
    )
}

export default Main;

const Grid = styled.div`
    display: flex;
    text-align: center; 
    align-items: center; 
    justify-content: center;
`;

const ImageGrid = styled.div`
    width: 100%;
    height: 300px;
    background-image: ${ohsoolImage};
    background-color: #FFFFFF;
    display: table;
`;