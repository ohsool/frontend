import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import {RecommendResult, RecommendTest } from "../componentsTest/TestIndex";

const Test = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <ImageGrid>
                    <Route
                        path="/test/test"  //path="/test/:testId"
                        component={RecommendTest}>    
                    </Route>
                    <Route
                        path="/test/result"
                        component={RecommendResult}>
                    </Route>
                </ImageGrid>
            </Grid>
        </React.Fragment>
    )
}

export default Test;
const ImageGrid = styled.div`
    width: 100%;
    height: 300px;
    display: table;
`;

const Grid = styled.div`
    display: flex;
    text-align: center; 
    align-items: center; 
    justify-content: center;
`;