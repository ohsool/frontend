//DrinkDetail에 들어갈 내용
import React from 'react';
import styled from "styled-components";


const Product=(props)=> {

    const { _onClick ,name, eng_name, hash_tag} = props; 
    return (
        <>
        <Grid onClick={_onClick}>
            <Container/>
            <NameText>{name}</NameText>
            <SubText>{eng_name}</SubText>
            <SubText>#{hash_tag}</SubText>
        </Grid>   
        </>
    )
}

export default Product

Product.detaultProps = {
    _onClick: ()=>{}
}

const Grid = styled.div`
    width: 165px;
    margin: 5px 0;
`

const Container  = styled.button`
    width: 155px;
    height: 155px;
    border: 1px solid #ebebeb;
    border-radius: 20px;
    }
`

const NameText = styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-align:center;
    padding: 0 12px;
   
`
const SubText = styled.span`
    width: 165px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 12px;
    text-align:center;
`