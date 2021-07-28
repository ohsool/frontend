import React,{useState} from 'react';
import styled from 'styled-components';

import MyPageSuggestModal from "../maincomponents/MyPageSuggestModal";
import arrow from "../share/arrow.png";

const Mypage = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modal_info, setModal_Info] = useState({
        suggestTitle: "",
        titlePlaceholder: "",
        commentPlaceholder: "",
    });
    const openModal = () => {
        setModalOpen(true);
        console.log(modal_info);
      };
    const closeModal = () => {
        setModalOpen(false);
        setModal_Info({
            suggestTitle: "",
            titlePlaceholder: "",
            commentPlaceholder: "",
        })
    };

    return (
        <>
        <Container>
            <TitleContainer>
                <span>마이페이지</span>
            </TitleContainer>
            <PageMoveWrap>
                <MoveBoxWrap>
                    <span>내가 쓴 댓글 확인하기</span>
                    <ArrowImage src={arrow}></ArrowImage>
                </MoveBoxWrap>
                <MoveBoxWrap>
                    <span>내가 태그된 댓글 확인하기</span>
                    <ArrowImage src={arrow}></ArrowImage>
                </MoveBoxWrap>
                <MoveBoxWrap
                    onClick={() => {
                        setModal_Info({
                            suggestTitle: "맥주 건의하기",
                            titlePlaceholder: "맥주 이름을 입력해주세요",
                            commentPlaceholder: "맥주의 특징이나 추천하는 이유를 입력해주세요!",
                        })
                        openModal();
                    }}>
                    <span>맥주 건의하기</span>
                    <ArrowImage src={arrow}></ArrowImage>
                </MoveBoxWrap>
                <MoveBoxWrap
                    onClick={() => {
                        setModal_Info({
                            suggestTitle: "관리자에게 건의하기",
                            titlePlaceholder: "제목을 입력하세요",
                            commentPlaceholder: "불편한 사항이나 건의할 내용을 입력해주세요!",
                        })
                        openModal();
                    }}>
                    <span>관리자에게 건의하기</span>
                    <ArrowImage src={arrow}></ArrowImage>
                </MoveBoxWrap>
                <MyPageSuggestModal
                        suggestInfo={modal_info}
                        open={modalOpen}
                        close={closeModal}
                ></MyPageSuggestModal>
            </PageMoveWrap>
        </Container>

        
        </>
    )


}

export default Mypage;

const Container = styled.div`
    width: 360px;
`;

const TitleContainer = styled.div`
    width: 360px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 2px solid #333333;
`;

const PageMoveWrap = styled.div`
    width: 360px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MoveBoxWrap = styled.div`
    display: inline-block;
    margin: 0 auto;
    width: 320px;
    height: 50px;
    border-bottom: 1px solid #888888;
    & > span{
        line-height: 50px;
        margin-left: 5px;
        font-size: 16px;
        font-weight: bold;
    }
`;

const ArrowImage = styled.img`
    float: right;
    margin: 13px;
    width: 24px;
    height: 24px;
`;