import React from "react";
import styled from "styled-components";

import MapImage from "./MapImage";
import SearchedPlace from "./SearchedPlace";

const RecommendMapModal = (props) => {
    const { open, close } = props;
    return(
        <React.Fragment>
            {open ? 
            <Background>
                <ModalWrap>
                    <MapModalHeader>
                        <CloseIcon onClick={close}>X</CloseIcon>
                    </MapModalHeader>
                    <SearchInput></SearchInput>
                    <MapImageWrap>
                        지도 이미지
                        {/* <MapImage/> */}
                    </MapImageWrap>
                        <SearchedPlace/>
                        <SearchedPlace/>
                </ModalWrap>
            </Background> : null}

        </React.Fragment>
    )
}

export default RecommendMapModal;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
    display: flex;
    justify-content: center;
`;

const MapModalHeader = styled.div`
    height: 40px;
    background-color: black;
`;

const ModalWrap = styled.div`
    overflow-y: auto;
    background-color: white;
    width: 340px;
    height: 100%;
`;

const CloseIcon = styled.div`
    float: right;
    line-height: 40px;
    width: 40px;
    font-size: 20px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
`;

const SearchInput = styled.input`
    margin-top: 20px;
    display: inline-block;
    background-color: #D1D1D1;
    border-radius: 35px;
    border: none;
    width: 250px;
    height: 30px;
`;

const MapImageWrap = styled.div`
    width: 300px;
    height: 250px;
    font-size: 30px;
    line-height: 250px;
    display: inline-block;
    border: 1px solid black;
`;