import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import ohsoolImage from "../share/ohsoolImage.jpeg"

const MainImage = () => {
    return(
        <React.Fragment>
                <ImageGrid>
                    <ImageGridcenter>
                        <MainLogoWrap>
                            <MainLogo></MainLogo>
                        </MainLogoWrap>
                    </ImageGridcenter>
                </ImageGrid>
                <LinkWrap>
                    <Wrap>
                        <LinkBox onClick={() => {
                            history.push("/test/test");
                        }}>
                            <span>오늘의 술 추천</span>
                            <LinkImage
                            ></LinkImage>
                        </LinkBox>
                        <LinkBox onClick={() => {
                            history.push("/board/category");
                        }}>
                            <span>술 공유 게시판</span>
                            <LinkImage></LinkImage>
                        </LinkBox>
                    </Wrap>
                </LinkWrap>
        </React.Fragment>
    )
}

export default MainImage;

const ImageGrid = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${ohsoolImage});
    background-size: cover;
    display: table;
`;

const ImageGridcenter = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`;

const MainLogoWrap = styled.div`
    display: inline-block;
    width: 200px;
    height: 200px;
`;

const MainLogo = styled.div`
    margin-top: 140px;
    font-size: 40px;
    color: white;
`;

const LinkWrap = styled.div`
    position: absolute;
    width: 100%;
`;

const Wrap = styled.div`
    display: inline-block;
    margin-top: 74px;  
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 60px;
    line-height: 60px;
    margin: 0 0 20px 0;
    background-color: #FFFFFF;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    & > span {
        margin-left: 20px;
        font-weight: bold;
        font-size: 20px;
    }
`;

const LinkImage = styled.div`
    margin: 12px 10px 13px 0;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 1px solid #D1D1D1;
`;