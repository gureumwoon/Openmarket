import React from 'react'
import styled from "styled-components";
import Nav from '../components/Nav'
import PaymentGrid from '../components/PaymentGrid';

function Payment() {
    return (
        <div>
            <Nav user_nav />
            <Main>
                <h1>주문/결제하기</h1>
                <PaymentNav>
                    <p className='product-info'>상품정보</p>
                    <div className='product-price'>
                        <p>할인</p>
                        <p>배송비</p>
                        <p>주문금액</p>
                    </div>
                </PaymentNav>
                <PaymentGrid />
                <PaymentGrid />
            </Main>
        </div >
    )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 54px 0 52px;
    font-size: 36px;
  }
`
const PaymentNav = styled.nav`
    width: 1280px;
    height: 60px;
    border-radius: 10px;
    background-color: #F2F2F2;
    display: flex;
    align-items: center;
    p {
        width: calc(50%/3);
        font-size: 18px;
        text-align: center;
    }
    .product-info {
        width: 50%;
        text-align: center;
    }
    .product-price {
        display: flex;
        width: 50%;
        justify-content: space-around;
    }
`

export default Payment