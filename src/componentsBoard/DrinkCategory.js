import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Slider from './Slider';
import BoardTop from './BoardTop';

import Product from './Product';

const DrinkCategory = () => {
    const history = useHistory();

    const product = [{
        name: '아잉거 셀러브레이터 도펠 보크', 
        eng_name: 'Ayinger Celebrator Doppelbock',
        hash_tag: '달달'}
    , {
        name: '맥주2' , 
        eng_name: 'endName',
        hash_tag: '달달'}, 
    {
        name: '맥주3', 
        eng_name: 'endName',
        hash_tag: '달달'}];

    return (
        <>
            <BoardTop/>
            <Slider
                dots={true}
                show={3}
                scroll={3}
                autoplay={false}
                autoplaySpeed={100000}
                arrows={false}
                items={[
                    { url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg" },
                    { url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg" },
                    { url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg" },
                    { url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg" },
                    { url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg" },
                    { url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg" },
                    { url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg" },
                ]}
            />
            <List>
                {product.length > 0 ? product.map((item, idx) => (
                    <Product key={idx} {...item} 
                    _onClick={() =>
                        history.push("/board/category/detail")
                    }
                    />
                )):""}
            </List>
        </>
    )
}

export default DrinkCategory;

const List = styled.div`
    width: 320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap : 5px; 
`;
