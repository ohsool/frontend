
//Board 상단 타이틀, 버튼 토글 
import React,{useState} from "react";
import styled ,{keyframes} from "styled-components";
import { useHistory } from 'react-router-dom';

const BoardTop = () => {
    const history = useHistory();

    const search = "../asset/img/search.png"

    const arr = [ "전체","소주","맥주","양주","막걸리","칵테일" ]; 

    //검색버튼 토글
    const [toggle, setToggle] = useState(false);

    //검색어
    const [term, setTerm] = useState("");

    return (
        <>
        <Container>

        <TitleContainer>
                <ButtonContainer>
                    <button onClick={()=>history.push('/board/category')
                    }>
                        맥주 고르기
                    </button>
                </ButtonContainer>
                <ButtonContainer >
                    <button onClick={()=>history.push('/board/mycollection')
                    }>
                        나의 맥주 도감
                    </button>
                </ButtonContainer>

        </TitleContainer>

        


        </Container>

        </>
    )
}

export default BoardTop;
const Container = styled.div`
    width: 100%;
`
const TitleContainer = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    margin: 13px 0;

`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
        border: none;
        border-bottom: 2px solid #fff;
        width: 180px;
        height: 50px;
        background-color: #fff;
        :focus {
            border: none;
            border-bottom: 2px solid #212121;
        };
    }
`;


const toggleOn = keyframes`
  0% {
    opacity: 0;
    transform: translatey(-50px)
  }
  100% {
    opacity: 1;
    transform: translatey(0)

}
`;


/*
input의 aria-autocomplete= "list"
*/