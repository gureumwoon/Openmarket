import React from 'react'
import styled from "styled-components";

import Bg1 from "../assets/images/bg.jpg"
import Bg2 from "../assets/images/google-logo.png"
import Bg3 from "../assets/images/modalclose.gif"
import Vector1 from "../assets/images/Vector.png"
import Vector2 from "../assets/images/Vector2.png"

function Banner() {

    const handleSlideLeft = () => {

    }

    const handleSlideRight = () => {

    }

    return (
        <BannerContainer>
            <img src={Vector1} className="swiper1" alt="" onClick={handleSlideLeft} />
            <Slide>
                <li>
                    <img src={Bg1} alt="" />
                </li>
                <li>
                    <img src={Bg2} alt="" />
                </li>
                <li>
                    <img src={Bg3} alt="" />
                </li>
            </Slide>
            <img src={Vector2} className="swiper2" alt="" onClick={handleSlideRight} />
            <ul className="dot-container" >
                <li className="dot"></li>
                <li className="dot"></li>
                <li className="dot"></li>
            </ul>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    width: 100%;
    position: relative;
   .swiper1 {
    position: absolute;
    top: 230px;
    left: 30px;
    cursor: pointer;
   }
   .swiper2 {
    right: 60px;
    bottom: 240px;
    position: absolute;
    cursor: pointer;
   }
   .dot-container {
    position: absolute;
    width: 100%;
    display: flex;
    bottom: 25px;
    left: 50%;
}
.dot {
    width: 6px;
    height: 6px;
    background-color: black;
    border-radius: 3px;
    margin-right: 6px;
}
`

const Slide = styled.ul`
    width: 100%;
    height: 500px;
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    li {
        img {
            width: 1920px;
            height: 500px;
        }
    }
`

export default Banner