import React from "react";
import styled from "styled-components";

const Comment = () =>{
    const is_user = true;

    return(
        <>
        <Container>
            <Grid is_flex>
                <Grid>
                <Text size="20px" weight="bold"> <span>닉네임입니다.</span></Text>
                <Text size="8px" weight="nomal"> <span>5분 전</span></Text>        
                </Grid>
  
                <button/>
                <button/>

            </Grid>
                
            <CommentText>
                <span>
                    ㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇ
                    ㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴ
                    ㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴ
                </span>
            </CommentText>
            

        </Container>
        </>
    )

}

export default Comment;
const Container = styled.div`
    width: 290px;
    max-height: 100px;
    margin: 5px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
`

const Grid = styled.div`
    display: flex;
    align-items: center;
    ${props =>(props.is_flex ? 
        `        
        justify-content: space-between;
        padding: 0 100px 0 0;
        `
    : "")}
    width: 280px;

`

const Text = styled.div`
    ${props => (`font-size: ${props.size}`)};
    ${props => (`font-weight: ${props.weight}`)};
    margin: 5px;

`
const CommentText = styled.div`
    width: 290px;
    margin: 5px;
    max-height: 51px;
    line-height: 17px;
    font-size: 12px;

`
