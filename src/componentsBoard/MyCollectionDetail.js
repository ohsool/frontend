import React ,{useState} from 'react'
import styled from 'styled-components';
import DetailTop from './DetailTop';

const MyCollectionDetail = () => {

    console.log("도감 클릭!")

    return (
        <>
        <DetailTop/>
        <Container>
            <span>도감을 클릭했음</span>
        </Container>
            
        </>
    )
}

export default MyCollectionDetail;

const Container = styled.div`
    display:block;
    width: 320px;
    margin: 0 auto;
    padding: 10px 10px;
    background-color: #eee
`;
