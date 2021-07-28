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
    width: 735px;
    height: 176px;
    margin: 37px 0 0 44px;
`;

const Place = styled.div`
    width: 187px;
    height: 176px;
    display: inline-block;
    background-color: #D1D1D1;
    float: left;
`;

const PlaceInfo = styled.div`
    margin-left: 37px;
    line-height: 176px;
    font-size: 30px;
`;