import React, {useState} from "react";
import styled from "styled-components";
import { history } from "./redux/configureStore";

import LoginModal from "./maincomponents/LoginModal";

const Header = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
      };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <HeaderBox>
                <HeaderDiv>
                    <HeaderLogo 
                    onClick={() => {
                        history.push("/")
                    }}>오늘의 술</HeaderLogo>
                    <Login>
                        <ModalBtn onClick={openModal}>
                            로그인
                        </ModalBtn>
                    <LoginModal
                        open={modalOpen}
                        close={closeModal}
                    ></LoginModal>
                    </Login>
                </HeaderDiv>
            </HeaderBox>
        </React.Fragment>
    )
}

export default Header;

const HeaderBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: white;
`;
const HeaderDiv = styled.div`
    width: 360px;
    display: flex;
    justify-content: space-between;
    background: white;
`;
const HeaderLogo = styled.div`
    margin-left: 20px;
    font-size: 18px;
    line-height: 40px;
    cursor: pointer;
`;
const ModalBtn = styled.button`
  background: none;
  border: 0;
  line-height: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 4px;
  width: 100px;
  height: 28px;
`;

const Login = styled.div`
    cursor: pointer;
`;
