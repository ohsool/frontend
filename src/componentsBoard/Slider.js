//slide효과를 위한 컴포넌트
import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({
    dots,
    items,
    show,
    scroll,
    autoplay,
    autoplaySpeed,
}) {
    const settings = {
        dots,
        infinite: true,
        speed: 200,
        slidesToShow: show,
        slidesToScroll: scroll,
        autoplay,
        autoplaySpeed,
    };

    return (
        <Container>
            <StyledSlider {...settings}>
                {items.map((item, idx) => (
                    <div key={idx}>
                        <Image src={item.url} />
                    </div>
                ))}
            </StyledSlider>
        </Container>
    );
}


const Container = styled.div`
    overflow: hidden;
`;

const StyledSlider = styled(Slider)`
    slick-slide div {
        outline: none;
    }
    .slick-dots {
        bottom: 5px;
        li {
            width: 10px;
            &.slick-active{
                button:before{
                    color:black;}
                }
            button { 
                &:before {
                    color: white;
                    font-size: 15px;
                }
            }
        }
    }
    .slick-prev,
    .slick-next {
        :before {
            font-size: 20px;
        }
    }
    .slick-prev {
        left: 5px;
        z-index: 10;
    }
    .slick-next {
        right: 5px;
    }
`;

const Image = styled.img`
    margin: auto;
    width: 100px;
    height: 100px;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;