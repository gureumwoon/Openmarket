import React from 'react'
import styled from "styled-components";
//Components
import Button from '../elements/Button';
//Elements
import { comma } from '../elements/Comma';

function SellerCenterItem(props) {
    return (
        <Item>
            <div className='basic-info'>
                <img src={props.image} alt="" />
                <div>
                    <p>{props.product_name}</p>
                    <p>재고: {props.stock}개</p>
                </div>
            </div>
            <p className='price-info'>{props.price.toLocaleString()}원</p>
            <div className='btn-container'>
                <Button width="80px" height="40px" >수정</Button>
                <Button width="80px" height="40px" bg="#FFFF" color="#767676" border="1px solid #c4c4c4" hover_color="black" hover_border="1px solid #767676">삭제</Button>
            </div>
        </Item>
    )
}

const Item = styled.div`
              width: 100%;
            height: 103px;
            display: flex;
            border-bottom: 1px solid #c4c4c4;
            background-color: #FFFF;
            align-items: center;
            img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background-color: #c4c4c4;
                margin-right: 30px;
            }
            .basic-info {
                display: flex;
                width: 50%;
                padding-left: 30px;
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                p {
                    &:first-child {
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    &:nth-child(2) {
                        color: #767676;
                    }
                }
            }
            .price-info {
                width: 30%;
                text-align: center;
                font-size: 18px;
            }
            .btn-container {
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
`

export default SellerCenterItem