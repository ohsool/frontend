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
    border-bottom: 1px solid #C4C4C4;
`;
const HeaderDiv = styled.div`
    width: 360px;
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
`;
const HeaderLogo = styled.div`
    margin-left: 20px;
    font-size: 16px;
    line-height: 40px;
    color: #333333;
    font-weight: bold;
    cursor: pointer;
`;
const ModalBtn = styled.div`
    border: 1px solid #D1D1D1;
    cursor: pointer;
    margin: 10px;
    font-size: 18px;
    border-radius: 4px;
    width: 20px;
    height: 20px;
`;

const Login = styled.div`
    cursor: pointer;
`;
