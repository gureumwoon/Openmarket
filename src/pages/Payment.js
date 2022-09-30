import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import DeliveryInfo from '../components/DeliveryInfo';
import Nav from '../components/Nav'
import PaymentGrid from '../components/PaymentGrid';
import { getProductDB } from '../redux/modules/product';

function Payment() {
    const location = useLocation();
    const dispatch = useDispatch();
    const isLogin = localStorage.getItem("token")
    const productList = useSelector((state) => state.product.products)
    console.log(productList.product_id)
    const productIdList = productList.map((p) => p.product_id)
    console.log(productIdList)
    const product = productList.filter((p) => p.product_id === location.state.product_id)
    console.log(product[0].store_name)
    const sum = location.state.price + location.state.shipping_fee
    console.log(sum)

    useEffect(() => {
        dispatch(getProductDB())
    }, [dispatch])
    return (
        <div>
            <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
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
                {
                    location.state.order_kind === "direct_order" &&
                    <PaymentGrid
                        product_image={location.state.product_image}
                        shop_name={location.state.store_name}
                        product_name={location.state.product_name}
                        quantity={location.state.quantity}
                        shipping_fee={location.state.shipping_fee === 0 ? 0 : location.state.shipping_fee}
                        price={location.state.price}
                    />
                }
                <div className='price-sum'>
                    <p>총 주문금액</p>
                    <p>{sum}원</p>
                </div>
                <DeliveryInfo
                    shipping_fee={location.state.shipping_fee === 0 ? 0 : location.state.shipping_fee}
                    price={location.state.price}
                    quantity={location.state.quantity}
                    product_id={location.state.product_id}
                    order_kind={location.state.order_kind}
                />
            </Main>

        </div >
    )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:1300px) {
    width: 800px;
    margin: 0 auto;
    }
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
    @media screen and (max-width:1300px) {
        width: 100%;
    }
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
    @media screen and (max-width:1300px) {
        width: 100%;
    }
    p {
        width: calc(50%/3);
        font-size: 18px;
        text-align: center;
        @media screen and (max-width:1300px) {
        width: 100%;
    }
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