import React, { Fragment, useEffect, useState } from 'react'
import styled from "styled-components";
import Nav from '../components/Nav'
import Button from '../elements/Button';

//assets
import PlusIcon from "../assets/images/icon-plus.svg";
import { useNavigate } from 'react-router-dom';
import SellerCenterItem from './SellerCenterItem';
import { deleteProductDB, getSellerProductDB } from '../redux/modules/product';
import { useDispatch, useSelector } from 'react-redux';
import UserModal from '../components/UserModal';
import { deleteCartItemDB } from '../redux/modules/cart';

function SellerCenter() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sellerProducts = useSelector((state) => state.product.sellerProducts)

    const [modal, setModal] = useState(0);

    console.log(sellerProducts)
    useEffect(() => {
        dispatch(getSellerProductDB())
    }, [dispatch])

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
                        <Button seller_tab_button >판매중인 상품({sellerProducts.length})</Button>
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
                        {
                            sellerProducts.map((p, i) => {
                                return <Fragment key={i}>
                                    <SellerCenterItem
                                        {...p}
                                        _onClick={() => setModal(1)}
                                    />
                                    {modal === 1 &&
                                        <UserModal modal_to_check
                                            _disabled={true}
                                            children2="상품을 삭제하시겠습니까?"
                                            btn_children_1="취소"
                                            btn_children_2="확인"
                                            margin="40px 0 0 0"
                                            _onClick={() => setModal(0)}
                                            _onClick2={() => {
                                                dispatch(deleteProductDB(p.product_id))
                                                setModal(0)
                                            }}
                                            _onClickBg={() => setModal(0)}
                                        />}
                                </Fragment>
                            })
                        }
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
    }
`

export default SellerCenter