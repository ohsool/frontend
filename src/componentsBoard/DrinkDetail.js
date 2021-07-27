import React ,{useState} from 'react'
import styled from 'styled-components';
import DetailTop from './DetailTop';
import Slider from "react-slick";
import BeerDogam from "./BeerDogam";

const DrinkDetail = () => {

    const [ review , setReview] = useState("");
    console.log("제품 디테일페이지")

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };

    return (
        <>
        <DetailTop/>
        <Slider {...settings}>
        <div>
            <Container>
                            
                <ReviewList/>

                <ReviewWrite>
                    <input type="text" placeholder="리뷰 작성하기"
                        onChange={e => setReview(e.target.value)}
                    />
                </ReviewWrite>
            </Container>
        </div>
        <div>
            <BeerDogam/>
        </div>
        </Slider>
        
        </>
    )
}

export default DrinkDetail;

const Container = styled.div`
    display:block;
    width: 320px;
    max-height: 640px;
    margin: 0 auto;
    padding: 10px 10px;
    background-color: #eee
`;


const ReviewList = styled.div`
    width: 300px;
    height: 435px;
    margin: 0 auto;
    background: #fff;
    border-radius: 20px

`

const ReviewWrite = styled.div`
    margin: 10px 0;
    input {
            background: #fff;
            border: none;
            padding: 3px 0 0 25px;
            width: 300px;
            height: 50px;
            border-radius: 50px;
            font-size: 12px;
            ::placeholder {                
                font-size: 5px;
            }
        }
        span {
            color: #2f231c;
        }
`
