import React from 'react'
import styled from "styled-components";
import Button from '../elements/Button';
import RadioCheck from './RadioCheck';

//assets
import ProductImg from "../assets/images/product-img.png";

function CartGrid() {
    return (
        <Grid>
            <RadioCheck margin="0 40px 0 30px" />
            <div className='cart-info'>
                <img src={ProductImg} alt="" />
                <div className='info-text'>
                    <p>백엔드글로벌</p>
                    <p>딥러닝 개발자 무릎 담요</p>
                    <p>17,500원</p>
                    <p>택배배송/ 무료배송</p>
                </div>
            </div>
            <Button quantity_button margin="0 148px 0 0" />
            <div className='cart-price'>
                <p>17,500원</p>
                <Button width="130px" height="40px" font_weight="500">주문하기</Button>
            </div>
        </Grid>
    )
}

const Grid = styled.div`
    width: 1280px;
    height: 200px;
    border: 2px solid #C4C4C4;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .cart-info {
        display: flex;
        margin-right: 48px;
        img {
        width: 160px;
        height: 160px;
        border-radius: 10px;
        margin-right: 36px;
    }
    .info-text {
        align-self: center;
        p {
            &:first-child {
                font-size: 14px;
                color: #767676;
                margin-bottom: 10px;
            }
            &:nth-child(2) {
                width: 418px;
                font-size: 18px;
                margin-bottom: 10px;
            }
            &:nth-child(3) {
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 40px;
            }
            &:nth-child(4) {
                font-size: 14px;
                color: #767676;
            }
        }
    }
    }
    .cart-price {
        margin-left: 138px;
        text-align: center;
        p {
            font-size: 18px;
            font-weight: bold;
            color: #EB5757;
            margin-bottom: 26px;
        }
    }
`

export default CartGrid