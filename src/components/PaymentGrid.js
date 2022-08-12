import React from 'react'
import styled from "styled-components";

//assets
import ProductImg from "../assets/images/product-img.png";

function PaymentGrid() {
    return (
        <Grid>
            <div className='product-info'>
                <img src={ProductImg} alt="" />
                <div>
                    <p>백엔드글로벌</p>
                    <p>딥러닝 개발자 무릎 담요</p>
                    <p>수량: 1개</p>
                </div>
            </div>
            <div className='price-container'>
                <p>-</p>
                <p>무료배송</p>
                <p>17,500원</p>
            </div>
        </Grid>
    )
}

const Grid = styled.div`
    width: 1280px;
    height: 130px;
    border-bottom: 1px solid #C4C4C4;
    margin-top: 16px;
    display: flex;
    align-items: center;
    @media screen and (max-width:1300px) {
        width: 100%;
    }
    .product-info {
        width: 50%;
        display: flex;
        align-items: center;
        margin-left: 8px;
        img {
            width: 104px;
            height: 104px;
            border-radius: 10px;
            margin-right: 36px;
        }
        p {
            &:first-child,
            &:nth-child(3) {
                font-size: 14px;
                margin-bottom: 6px;
                color: #767676;
            }
            &:nth-child(2) {
                font-size: 18px;
                margin: 6px 0 10px;
            }
        }
    }
    .price-container {
        width: 50%;
        display: flex;
        justify-content: space-around;
        p {
            width: calc(50%/3);
            font-size: 18px;
            text-align: center;
                }
    }
`

export default PaymentGrid