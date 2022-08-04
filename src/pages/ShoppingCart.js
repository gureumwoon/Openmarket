import React, { useState } from 'react'
import styled from "styled-components";

// components
import Nav from '../components/Nav'
import RadioCheck from '../components/RadioCheck';

function ShoppingCart() {
    return (
        <div>
            <Nav user_nav />
            <Main>
                <h1>장바구니</h1>
                <div className='cart-nav'>
                    <RadioCheck margin="0 0 0 30px" />
                    <p>상품정보</p>
                    <p>수량</p>
                    <p>상품금액</p>
                </div>
                <div className='empty-cart'>
                    <p>장바구니에 담긴 상품이 없습니다.</p>
                    <p>원하는 상품을 장바구니에 담아보세요!</p>
                </div>
            </Main>
        </div>
    )
}

const Main = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 36px;
        margin: 54px 0 52px;
    }
    .cart-nav {
        width: 1280px;
        height: 60px;
        background-color: #F2F2F2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-size: 18px;
            &:nth-child(4) {
                margin-right: 131px;
            }
        }
    }
    .empty-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            &:first-child {
                margin: 200px 0 17px;
                font-size: 18px;
                font-weight: bold;
            }
            &:nth-child(2) {
                font-size: 14px;
                color: #767676;
            }
        }
    }
`

export default ShoppingCart