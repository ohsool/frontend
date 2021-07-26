import React, {useState} from "react";
import styled from "styled-components";

const LoginModal = (props) => {
    const { open, close } = props;
    const [user_info, setUser_Info] = useState({
        user_id: "",
        user_pwd: ""
    });
    const {user_id, user_pwd} = user_info;

    const onChange = (e) => {
        setUser_Info({...user_info, [e.target.name]: e.target.value})
        console.log(user_info);
    }
    return(
        <React.Fragment>
            {open ? 
            <Background>
                <ModalWrap>
                    <ModalEmptySpace>
                    </ModalEmptySpace>
                <ModalContainer>
                    <CloseIcon onClick={close}>X</CloseIcon>
                    <InputWrap>
                        <InputBox 
                        placeholder="아이디"
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
                        <SignUpButton>회원가입</SignUpButton>
                        <LoginButton>로그인</LoginButton>
                    </ButtonWrap>
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
    width: 350px;
    display: flex;
    justify-content: space-between;
`;
const ModalEmptySpace = styled.div`
    width: 70px;
    height: 300px;
`;

const ModalContainer = styled.div`
    height: 330px;
    width: 290px;
    border-radius: 5px;
    background: #D1D1D1;
    text-align: center;
`;

const InputWrap = styled.div`
    margin-top: 37px;
`;

const InputBox = styled.input`
    margin-top: 10px;
    width: 250px;
    height: 30px;
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
    border-right: 1px solid;
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