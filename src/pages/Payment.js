import React from 'react'
import styled from "styled-components";
import DeliveryInfo from '../components/DeliveryInfo';
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
                <div className='price-sum'>
                    <p>총 주문금액</p>
                    <p>46,500원</p>
                </div>
                <DeliveryInfo />
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
  .price-sum {
    margin: 30px 0 96px;
    display: flex;
    align-items: center;
    width: 1280px;
    justify-content: flex-end;
    p {
        &:first-child {
            font-size: 18px;
            font-weight: 500;
            margin-right: 10px;
        }
        &:nth-child(2) {
            font-size: 24px;
            font-weight: 700;
            color: #EB5757;
        }
    }
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