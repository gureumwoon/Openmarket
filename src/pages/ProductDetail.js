import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'

//assets
import ProductImg from "../assets/images/product-img.png";
import Button from '../elements/Button';

function ProductDetail() {
    return (
        <div>
            <Nav />
            <SectionOne>
                <img src={ProductImg} alt="" />
                <div className='container-right'>
                    <div className='info'>
                        <p>백엔드글로벌</p>
                        <p>딥러닝 개발자 무릎담요</p>
                        <span className='info-price'>17,500</span>
                        <span>원</span>
                    </div>
                    <div className='info2'>
                        <p>택배배송/무료배송</p>
                        <div className='quantity-container'>
                            <button>-</button>
                            <div>1</div>
                            <button>+</button>
                        </div>
                    </div>
                    <div className='info3'>
                        <p>총 상품 금액</p>
                        <div>
                            <p>총 수량 1개</p>
                            <span>17,500</span>
                            <span>원</span>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <Button width="416px" height="60px" _disabled="true" margin="0 14px 0 0">바로구매</Button>
                        <Button width="200px" height="60px" _disabled="true">장바구니</Button>
                    </div>
                </div>
            </SectionOne>
            <SectionTwo>
                <Button tab_active_button>버튼</Button>
            </SectionTwo>
        </div>
    )
}

const SectionOne = styled.div`
    padding: 80px 320px;
    display: flex;
    img {
        margin-right: 50px;
    }
    .container-right {
        width: 100%;
        display:flex;
        flex-direction: column;
        .info {
            margin-bottom: 138px;
            p {
                &:first-child {
                    font-size: 18px;
                    color: #767676;
                    line-height: 23px;
                    margin-bottom: 16px;
                }
                &:nth-child(2) {
                    font-size: 36px;
                    line-height: 45px;
                    margin-bottom: 20px;
                }
            }
            span {
                &:nth-child(3) {
                    font-size: 36px;
                    font-weight: bold;
                    line-height: 45px;
                }
                &:nth-child(4) {
                    font-size: 18px;
                }
            }
            }
        .info2 {
            &::after {
                    display: block;
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #C4C4C4;
                    margin: 30px 0 32px;
                }
            p{
                color: #767676;
                line-height: 20px;
                &::after {
                    display: block;
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #C4C4C4;
                    margin: 20px 0 30px;
                }
            }
            .quantity-container {
                width: 150px;
                height: 50px;
                border: 1px solid #c4c4c4;
                display: flex;
                border-radius: 5px;
                align-items: center;
                div {
                    width: 50px;
                    height: 50px;
                    border-left: 1px solid #c4c4c4;
                    border-right:1px solid #c4c4c4;
                    text-align: center;
                    line-height: 50px;
                }
                button {
                    width: 50px;
                }
            }
        }
        .info3 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            p {
                font-size: 18px;
                font-weight: 500;
                line-height: 23px;
            }
            div {
                display: flex;
                p {
                    font-size: 18px;
                    line-height: 23px;
                    color: #767676;
                    align-self: center;
                    &::after {
                        display: inline-block;
                        content: "";
                        width: 2px;
                        height: 23px;
                        background-color: #C4C4C4;
                        vertical-align: bottom;
                        margin: 0 12px 0 11px;
                    }
                }
                span {
                    color:#21BF48;
                    &:nth-child(2) {
                        font-size: 36px;
                    }
                    &:nth-child(3) {
                        align-self: center;
                    }
                }
            }
        }
        .btn-container {
            display: flex;
        }
}
`

const SectionTwo = styled.div`
    padding: 0 320px;
`

export default ProductDetail