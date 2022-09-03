import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneProductDB } from '../redux/modules/product';
import { addCartDB } from '../redux/modules/cart';

//elements
import Button from '../elements/Button';

//components
import Nav from '../components/Nav'
import Footer from '../components/Footer'


function ProductDetail() {
    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector((state) => state.product.productOne)
    const product_stock = product.stock
    // console.log(product)
    const isLogin = localStorage.getItem("token")
    const userId = localStorage.getItem("id")

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        dispatch(getOneProductDB(id))
    }, [dispatch, id])

    const handleMinus = () => {
        if (1 < quantity) {
            setQuantity(quantity - 1)
        }
    }

    const handlePlus = () => {
        if (quantity <= product_stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleCart = () => {
        const itemData = {

        }
        dispatch(addCartDB());
        navigate(`/cart/${userId}`);
    }

    return (
        <div>
            <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            <SectionOne>
                <img src={product.image} alt="" />
                <div className='container-right'>
                    <div className='info'>
                        <p>{product.seller_store}</p>
                        <p>{product.product_name}</p>
                        <span className='info-price'>{product.price}</span>
                        <span>원</span>
                    </div>
                    <div className='info2'>
                        <p>택배배송/무료배송</p>
                        {/* <div className='quantity-container'>
                            <button>-</button>
                            <div>1</div>
                            <button>+</button>
                        </div> */}
                        <Button
                            quantity_button
                            children={quantity}
                            _onClickMinus={handleMinus}
                            _onClickPlus={handlePlus}
                        />
                    </div>
                    <div className='info3'>
                        <p>총 상품 금액</p>
                        <div>
                            <p>총 수량 {quantity}개</p>
                            <span>{product.price * quantity}</span>
                            <span>원</span>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <Button width="416px" height="60px" margin="0 14px 0 0">바로구매</Button>
                        <Button width="200px" height="60px" bg="#767676" _onClick={handleCart}>장바구니</Button>
                    </div>
                </div>
            </SectionOne>
            <SectionTwo>
                <Button tab_active_button>버튼</Button>
                <Button tab_active_button _disabled="true" >리뷰</Button>
                <Button tab_active_button _disabled="true">Q&A</Button>
                <Button tab_active_button _disabled="true">반품/교환정보</Button>
            </SectionTwo>
            <Footer />
        </div>
    )
}

const SectionOne = styled.div`
    width: 1250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px auto 140px;
    @media screen and (max-width:1320px) {
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 600px;
        height: 600px;
        margin-right: 50px;
        @media screen and (max-width:1320px) {
        margin-right: 0;
    }
    }
    .container-right {
        width: 100%;
        display:flex;
        flex-direction: column;
        @media screen and (max-width:1320px) {
        width: 600px;
        margin-top: 60px;
    }
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
    width: 1280px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 80px;
    @media screen and (max-width:1320px) {
        width: 600px;
    }
`

export default ProductDetail