import React, {useState} from "react";
import styled from "styled-components";

import RecommendMapModal from "./RecommendMapModal";

const ShareResult = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        document.body.style.overflow= "hidden";
        setModalOpen(true);
      };
    const closeModal = () => {
        document.body.style.overflow= "unset";
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <ShareAlcoholWrap>
                <Wrap>
                        <ShareAlcohol>어울리는 술1</ShareAlcohol>
                        <ShareAlcohol>어울리는 술2</ShareAlcohol>
                        {/* <RecommendPlace>
                            <RecommendInnerWrap>
                                <Text> 주변에 파는 장소</Text>
                                <ButtonImage
                                    onClick={() => {
                                        openModal();
                                    }}
                                ></ButtonImage>
                                <RecommendMapModal
                                    open={modalOpen}
                                    close={closeModal}
                                ></RecommendMapModal>
                            </RecommendInnerWrap>
                        </RecommendPlace> */}
                </Wrap>
            </ShareAlcoholWrap>
        </React.Fragment>
    )
}

export default ShareResult;

const ShareAlcoholWrap = styled.div`
    width: 100%;
    background-color: white;
`;
const Wrap = styled.div`
    display: inline-block;
    width: 360px;
`;
const RecommendWrap = styled.div`
    margin-top: 45px;
`;

const ShareAlcohol = styled.div`
    width: 155px;
    height: 155px;
    line-height: 155px;
    margin: 10px 5px 0 5px;
    display: inline-block;
    background-color: #D1D1D1;
    border-radius: 20px;
`;

const RecommendPlace = styled.div`
    width: 250px;
    height: 60px;
    display: inline-block;
    margin: 10px 5px 0px 5px;
    background-color: #D1D1D1;
    border-radius: 10px;
`;

const RecommendInnerWrap = styled.div`
    width: 250px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
`;

const Text = styled.span`
    font-size: 20px;
    margin-left: 20px;
`;

const ButtonImage = styled.div`
    width: 35px;
    height: 35px;
    margin: 12px 13px 13px 0;
    border-radius: 35px;
    display: inline-block;
    background-color: gray;
    cursor: pointer;
`;