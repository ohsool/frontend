import React from "react";
import styled from "styled-components";

const SearchedPlace = (props) => {
    return(
        <React.Fragment>
            <PlaceInfoWrap>
                <Place></Place>
                <PlaceInfo>편의점</PlaceInfo>
            </PlaceInfoWrap>
        </React.Fragment>
    )
}

export default SearchedPlace;

const PlaceInfoWrap = styled.div`
    display: flex;
    width: 240px;
    height: 60px;
    margin: 25px 0 0 25px;
`;

const Place = styled.div`
    width: 65px;
    height: 60px;
    display: inline-block;
    background-color: #D1D1D1;
`;

const PlaceInfo = styled.div`
    margin-left: 20px;
    line-height: 60px;
    font-size: 20px;
`;