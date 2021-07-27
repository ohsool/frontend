import React, {useState} from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";

const LoginModal = (props) => {
    const { open, close } = props;
    const [user_info, setUser_Info] = useState({
        user_id: "",
        user_pwd: ""
    });
    const {user_id, user_pwd} = user_info;

    const onChange = (e) => {
        setUser_Info({...user_info, [e.target.name]: e.target.value})
    }
    return(
        <React.Fragment>
            {open ? 
            <Background>
                <ModalWrap>
                    {/* <ModalEmptySpace>
                    </ModalEmptySpace> */}
                <ModalContainer>
                    <CloseIcon onClick={close}>X</CloseIcon>
                    <InputWrap>
                        <InputBox 
                        placeholder="이메일"
                        onChange={onChange}
                        name="user_id"
                        value={user_id}
                        ></InputBox>
                        <InputBox 
                        type="password"
                        placeholder="비밀번호"
                        onChange={onChange}
                        name="user_pwd"
                        value={user_pwd}
                        ></InputBox>
                    </InputWrap>
                    <ButtonWrap>
                        <SignUpButton
                        onClick={() => {
                            history.push("/signup")
                            close();
                        }}
                        >회원가입</SignUpButton>
                        <LoginButton>로그인</LoginButton>
                    </ButtonWrap>
                    <SocialLoginWrap>
                        <SocialLoginButton>카카오톡으로 로그인하기</SocialLoginButton>
                        <SocialLoginButton>구글로 로그인하기</SocialLoginButton>
                    </SocialLoginWrap>
                </ModalContainer>
                </ModalWrap>
            </Background> : null}

        </React.Fragment>
    )
}

export default LoginModal;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 10;
    display: flex;
    justify-content: center;
`;

const CloseIcon = styled.div`
    float: right;
    width: 30px;
    line-height: 30px;
    font-weight: 500;
    font-size: 20px;
    height: 30px;
    background-color: white;
`;

const ModalWrap = styled.div`
    position: absolute;
    margin-top: 40px;
    width: 640px;
    display: flex;
    justify-content: center;
`;
//높이 640으로 하면 전체로 보여지게됨
const ModalContainer = styled.div`
    height: 580px;  
    width: 290px;
    border-radius: 5px;
    background: #D1D1D1;
    text-align: center;
`;

const InputWrap = styled.div`
    margin-top: 37px;
`;

const InputBox = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid white;
    color: white;
    background-color: transparent;
    margin-top: 10px;
    width: 250px;
    height: 30px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: white;
    }
`;

const ButtonWrap = styled.div`
    width: 250px;
    height: 40px;
    margin: 5px auto;
`;

const SignUpButton = styled.button`
    border-left: none;
    border-top: none;
    border-bottom: none;
    border-right: 1px solid white;
    background-color: #D1D1D1;
    width: 125px;
    height: 36px;
    cursor: pointer;
`;

const LoginButton = styled.button`
    background-color: #D1D1D1;
    width: 125px;
    height: 36px;
    cursor: pointer;
    border: none;
`;

const SocialLoginWrap = styled.div`
    margin-top: 10px;
`;

const SocialLoginButton = styled.button`
    color: #888888;
    margin-top: 10px;
    background-color: white;
    width: 250px;
    height: 40px;
    border-radius: 56px;
    border: none;
`;