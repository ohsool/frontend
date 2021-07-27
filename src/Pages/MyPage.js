import React,{useState} from 'react';
import styled from 'styled-components';
const Mypage = (props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
        <Container>
            <TitleContainer>
                마이페이지
            </TitleContainer>
            <HR/>
            
            <Search onClick={() => {
                    toggle ? setToggle(false) : setToggle(true);
                }}>
                    내가 쓴 댓글 확인하기
                    {/*<img src={search} alt="search" />*/}
            </Search>
                

            <SearchContainer className={toggle ? "on" : "off"}>
                <Grid>
                    <p>
                        댓글 목록
                        .
                        .
                        .
                    </p>
                </Grid>
            </SearchContainer>                           
            <hr/>

            <Search onClick={() => {
                    toggle ? setToggle(false) : setToggle(true);
                }}>
                    내가 쓴 댓글 확인하기
                    {/*<img src={search} alt="search" />*/}
            </Search>
                

        </Container>

        
        </>
    )


}

export default Mypage;

const Container = styled.div`
    display:block;
    width: 360px;
    height: 640px;
    margin: 0 auto;
    padding: 0 10px;
    border: 2px solid #212121;
`;

const TitleContainer = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    margin: 13px 0;
`;

const Search = styled.div`
    width: 360px;
    button{
        background: none;
        cursor: pointer;
    }
    img {
        width: 50px;
        height: 50px;
    }
`;



const Grid = styled.div`
    padding: 2px 0;
    width: 100%;
    p {
        background: #efefef;
        border: none;
        padding: 7px 30px;
        width: 250px;
        border-radius: 20px;
        font-size: 12px;

    }

`
const HR = styled.hr`
    border: 2px soild;
    width: 350px;
    background-color: #212121;
`

const SearchButton = styled.button`
    background: none;
    cursor: pointer;
    img {
        width: 50px;
        height: 50px;
    }
`;

const SearchContainer = styled.div`
    background: #fff;
    width: 360px;
    position: absolute;
    z-index: 10;
    &.off {
        display: none;
    }
`;
