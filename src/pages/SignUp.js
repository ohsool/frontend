import React, {useState} from "react";
import styled from "styled-components";

const SignUp = (props) => {
    const [signup_info, setSignUp_Info] = useState({
        user_id: "",
        user_nickname: "",
        user_pwd: "",
        user_pwd_check: ""
    });

    const {user_id, user_nickname, user_pwd, user_pwd_check} = signup_info;

    const onChange = (e) => {
        setSignUp_Info({...signup_info, [e.target.name]: e.target.value});
        console.log(signup_info);
    }
    return(
        <React.Fragment>
            <InputWrap>
                <InputSignUP
                    onChange={onChange}
                    name="user_id"
                    value={user_id}
                    placeholder="아이디를 입력해주세요"
                ></InputSignUP>
                <InputSignUP 
                    onChange={onChange}
                    name="user_nickname"
                    value={user_nickname}
                    placeholder="닉네임을 입력해주세요"
                ></InputSignUP>
                <InputSignUP 
                    type="password"
                    onChange={onChange}
                    name="user_pwd"
                    value={user_pwd}
                    placeholder="비밀번호를 입력해주세요"
                ></InputSignUP>
                <InputSignUP 
                    type="password"
                    onChange={onChange}
                    name="user_pwd_check"
                    value={user_pwd_check}
                    placeholder="비밀번호를 한번 더 입력해주세요"
                ></InputSignUP>
            </InputWrap>
            <SignUpButton>회원가입 완료</SignUpButton>
        </React.Fragment>
    )
} 

export default SignUp;

const InputWrap = styled.div`
    text-align: center;
    width: 360px;
    margin-top: 40px;
`;

const InputSignUP = styled.input`
    width: 320px;
    height: 50px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #D1D1D1;
    font-size: 20px;
    outline: none;
`;

const SignUpButton = styled.button`
    width: 111px;
    height: 40px;
    float: right;
    margin-right: 30px;
    margin-top: 80px;
    border: none;
    background-color: black;
    border-radius: 10px;
    color: white;
`;