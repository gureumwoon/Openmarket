import React, { useState } from 'react'
import styled from "styled-components";
import Nav from '../components/Nav'
import Button from '../elements/Button';

//assets
import PlusIcon from "../assets/images/icon-plus.svg";
import BasicProfile from "../assets/images/profile-bunny.png";
import { useNavigate } from 'react-router-dom';

function SellerCenter() {
    const navigate = useNavigate();
    return (
        <div>
            <Nav seller_nav />
            <MainSection>
                <Header>
                    <div>
                        <p>대시보드</p>
                        <p>백엔드글로벌</p>
                    </div>
                    <Button src={PlusIcon} seller_nav_button _onClick={() => navigate("/upload")}>상품 업로드</ Button>
                </Header>
                <Section>
                    <div className='button-container'>
                        <Button seller_tab_button >판매중인 상품(3)</Button>
                        <Button seller_tab_button _disabled={true}>주문/배송</Button>
                        <Button seller_tab_button _disabled={true}>문의/리뷰</Button>
                        <Button seller_tab_button _disabled={true}>통계</Button>
                        <Button seller_tab_button _disabled={true}>스토어 설정</Button>
                    </div>
                    <div className='dash-board'>
                        <div className='info-nav'>
                            <p>상품정보</p>
                            <p>판매가격</p>
                            <p>수정</p>
                            <p>삭제</p>
                        </div>
                        <div className='info-container'>
                            <div className='basic-info'>
                                <img src={BasicProfile} alt="" />
                                <div>
                                    <p>딥러닝 개발자 무릎담요</p>
                                    <p>재고: 370개</p>
                                </div>
                            </div>
                            <p className='price-info'>17,500원</p>
                            <div className='btn-container'>
                                <Button width="80px" height="40px" >수정</Button>
                                <Button width="80px" height="40px" bg="#FFFF" color="#767676" border="1px solid #c4c4c4" hover_color="black" hover_border="1px solid #767676">삭제</Button>
                            </div>
                        </div>
                    </div>
                </Section>
            </MainSection>
        </div>
    )
}

const MainSection = styled.div`
    padding: 38px 100px 96px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;
    div {
        display: flex;
        p {
            &:first-child {
                margin-right: 16px;
                font-size: 36px;
                font-weight: bold;
            }
            &:nth-child(2){
                font-size: 36px;
                font-weight: 500;
                color: #21BF48;
            }
        }
    }
`
const Section = styled.div`
    display: flex;
    .button-container {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
    }
    .dash-board {
        width: 1440px;
        height: 884px;
        border: 1px solid #c4c4c4;
        background-color: #F2F2F2;
        border-radius: 5px;
        .info-nav {
            width: 100%;
            height: 60px;
            background-color: #FFFF;
            display: flex;
            border-bottom: 1px solid #c4c4c4;
            align-items: center;
            text-align: center;
            p{
                font-size: 18px;
                &:first-child {
                    width: 50%;
                }
                &:nth-child(2) {
                    width: 30%;
                }
                &:nth-child(3) {
                    width: 10%;
                }
                &:nth-child(4) {
                    width: 10%;
                }
            }
        }
        .info-container {
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
        }
    }
`

export default SellerCenter