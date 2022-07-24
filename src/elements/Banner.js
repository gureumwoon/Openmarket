import React, { useRef, useState } from 'react'
import styled from "styled-components";

import Bg1 from "../assets/images/bg.jpg"
import Bg2 from "../assets/images/google-logo.png"
import Bg3 from "../assets/images/modalclose.gif"
import Vector1 from "../assets/images/Vector.png"
import Vector2 from "../assets/images/Vector2.png"

function Banner() {
    const [bannerList, setBannerList] = useState([Bg1, Bg2, Bg3])
    const [slide, setSlide] = useState(0)

    const imgSlideRef = useRef()

    const handleSlidePrev = () => {
        if (slide !== 0) {
            setSlide(slide - 1)
        } else {
            setSlide(bannerList.length - 1)
        }
    }

    const handleSlideNext = () => {
        if (slide !== bannerList.length - 1) {
            setSlide(slide + 1)
        } else {
            setSlide(0)
        }
    }


    return (
        <BannerContainer>
            <img src={Vector1} className="swiper1" alt="" onClick={handleSlidePrev} />
            <Slide ref={imgSlideRef} style={{ transform: `translateX(-${1920 * slide}px)` }}>
                {bannerList.map((b, i) => {
                    return <li key={i}>
                        <img src={b} alt="" />
                    </li>
                })}
            </Slide>
            <img src={Vector2} className="swiper2" alt="" onClick={handleSlideNext} />
            <ul className="dot-container" >
                {bannerList.map((d, i) => {
                    return <li className="dot" key={i} ></li>
                })}
            </ul>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    width: 100%;
    position: relative;
   .swiper1 {
    z-index: 1;
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
    /* background-color: white; */
    border-radius: 3px;
    margin-right: 6px;
}
`

const Slide = styled.ul`
    width: 100%;
    height: 500px;
    display: flex;
    li {
        img {
            width:1920px;
            height: 500px;
        }
    }
`

export default Banner