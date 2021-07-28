import React from "react";
import styled from "styled-components";

const MyPageSuggest = (props) => {
    const { open, close, suggestInfo } = props;
    console.log(suggestInfo);
    return(
        <React.Fragment>
            {open ? 
            <Background>
                <ModalWrap>
                    <SuggestTitle onClick={close}>
                        <span>{suggestInfo.suggestTitle}</span>
                    </SuggestTitle>
                    <InputTitle placeholder={suggestInfo.titlePlaceholder}></InputTitle>
                    <InputComments placeholder={suggestInfo.commentPlaceholder}></InputComments>
                    <ButtonWrap>
                        <button onClick={close}>취소</button>
                        <button onClick={close}>확인</button>
                    </ButtonWrap>
                </ModalWrap>
            </Background>
            : null }
        </React.Fragment>
    )
}

export default MyPageSuggest;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    animation: fadeIn .5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    z-index: 10;
    display: flex;
    justify-content: center;
`;

const ModalWrap = styled.div`
    position: absolute;
    animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    background-color: #FFFFFF;
    border-radius: 10px;
    top: 100px;
    width: 320px;
    height: 420px;
    display: flex;
    flex-direction: column;
    @keyframes scaleUp {
        0% {
            transform: scale(.8) translateY(1000px);
            opacity: 0;
        }
        100% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
`;

const SuggestTitle = styled.div`
    margin: 0 auto;
    height: 70px;
    width: 280px;
    border-bottom: 2px solid #333333;
    line-height: 70px;
    text-align: center;
    & > span {
        font-size: 20px;
        font-weight: bold;
    }
`;

const InputTitle = styled.input`
    margin: 25px 30px 15px 30px;
    height: 50px;
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #888888;
        margin: 15px;
        position: absolute;
    }
`;

const InputComments = styled.textarea`
    height: 160px;
    margin: 0 30px;
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    ::-webkit-input-placeholder {
        width: 180px;
        color: #888888;
        margin: 15px;
        position: absolute;
    }
`;

const ButtonWrap = styled.div`
    margin: 15px auto;
    width: 260px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    & > button{
        width: 125px;
        height: 50px;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        background-color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;
    }
`;