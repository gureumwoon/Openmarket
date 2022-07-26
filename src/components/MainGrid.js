import React from 'react'
import styled from "styled-components";

//assets
import Pouch from "../assets/images/pouch.png"

function MainGrid() {
    return (
        <Container>
            <div>
                <img src={Pouch} alt="" />
                <p className='product-name'>우당탕탕 라이캣의 실험실</p>
                <p className='product'>Hack Your Life 개발자 노트북 파우치</p>
                <span className='product-price'>29,000</span>
                <span>원</span>
            </div>
            <div>
                <img src={Pouch} alt="" />
                <p className='product-name'>우당탕탕 라이캣의 실험실</p>
                <p className='product'>Hack Your Life 개발자 노트북 파우치</p>
                <span className='product-price'>29,000</span>
                <span>원</span>
            </div>
            <div>
                <img src={Pouch} alt="" />
                <p className='product-name'>우당탕탕 라이캣의 실험실</p>
                <p className='product'>Hack Your Life 개발자 노트북 파우치</p>
                <span className='product-price'>29,000</span>
                <span>원</span>
            </div>
            <div>
                <img src={Pouch} alt="" />
                <p className='product-name'>우당탕탕 라이캣의 실험실</p>
                <p className='product'>Hack Your Life 개발자 노트북 파우치</p>
                <span className='product-price'>29,000</span>
                <span>원</span>
            </div>
            <div>
                <img src={Pouch} alt="" />
                <p className='product-name'>우당탕탕 라이캣의 실험실</p>
                <p className='product'>Hack Your Life 개발자 노트북 파우치</p>
                <span className='product-price'>29,000</span>
                <span>원</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 80px 320px 180px;
    display: grid;
    grid-template-columns:repeat(auto-fit,380px);
    justify-items: center;
    gap: 60px;
    img {
        margin-bottom: 16px;
    }
    .product-name {
        font-size: 16px;
        color: #767676;
    }
    .product {
        font-size: 18px;
        margin: 10px 0;
    }
    .product-price {
        font-size: 24px;
        font-weight: bold;
    }
`

export default MainGrid