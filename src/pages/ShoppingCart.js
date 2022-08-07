import React, { useState } from 'react'
import styled from "styled-components";
import CartGrid from '../components/CartGrid';
import Footer from '../components/Footer';

// components
import Nav from '../components/Nav'
import RadioCheck from '../components/RadioCheck';
import UserModal from '../components/UserModal';
import Button from '../elements/Button';

function ShoppingCart() {
    return (
        <div>
            <Nav user_nav />
            <Main>
                <h1>장바구니</h1>
                <div className='cart-nav'>
                    <RadioCheck margin="0 0 0 30px" width="30%" />
                    <p>상품정보</p>
                    <p>수량</p>
                    <p>상품금액</p>
                </div>
                {/* <div className='empty-cart'>
                    <p>장바구니에 담긴 상품이 없습니다.</p>
                    <p>원하는 상품을 장바구니에 담아보세요!</p>
                </div> */}
                <CartGrid />
                <CartGrid cart_sum_grid />
                <Button width="220px" height="68px" font_size="24px" font_weight="bold" margin="0 0 160px 0">주문하기</Button>
                <UserModal modal_to_check
                    children="로그인이 필요한 서비스 입니다."
                    children2="로그인 하시겠습니까?"
                    btn_children_1="취소"
                    btn_children_2="확인"
                    margin="0 0 30px 0"
                />
            </Main>
            <Footer />
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
        margin-bottom: 35px;
        p {
            font-size: 18px;
            &:nth-child(2) {
                width: 20%;
                text-align: start;
            }
            &:nth-child(3) {
                text-align: end;
                width: 20%;
            }
            &:nth-child(4) {
                margin-right: 131px;
                width: 25%;
                text-align: end;
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