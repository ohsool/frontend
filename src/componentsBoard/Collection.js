//DrinkDetail에 들어갈 내용
import React from 'react';
import styled from "styled-components";


const Collection=(props)=> {

    const { _onClick ,title} = props; //shape- circle or oval
    return (
        <>
        <Container onClick={_onClick}
        >{title}
        </Container>

            
        </>
    )
}

export default Collection;

Collection.detaultProps = {
    _onClick: ()=>{}
}


const Container  = styled.button`
width: 155px;
height: 155px;
border: 1px solid #ebebeb;
border-radius: 20px;
`