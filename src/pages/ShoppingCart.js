import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import CartGrid from '../components/CartGrid';
import Footer from '../components/Footer';

// components
import Nav from '../components/Nav'
import CartCheckBox from '../components/CartCheckBox';
import Button from '../elements/Button';
import { deleteAllItemDB, getCartDB } from '../redux/modules/cart';
import DeleteIcon from '../assets/images/icon-delete.svg';
import { useNavigate } from 'react-router-dom';


function ShoppingCart() {
    const navigate = useNavigate();

    const [checkList, setCheckList] = useState([])

    const dispatch = useDispatch()
    const isLogin = localStorage.getItem("token")
    const cart = useSelector((state) => state.cart.cartList)
    const quantityList = cart.map((q) => q.quantity)
    const cartId = cart.map((c) => c.product_id)
    const product = useSelector((state) => state.product.products)
    const checkedCart = cart.filter((c, i) => checkList.includes(c.product_id))
    const item = product.filter((i) => cartId.includes(i.product_id))
    const checkedProduct = item.filter((c, i) => checkList.includes(c.product_id))

    const [modal, setModal] = useState(0);
    const [isCheck, setIsCheck] = useState(false)

    const amount = [];
    const price = [];
    const price2 = [];
    const shippingFee = [];

    const checkAllBox = (checked) => {
        if (checked) {
            const allCheck = []
            cart.forEach((cartItem) => allCheck.push(cartItem.product_id))
            setCheckList(allCheck)
            console.log(allCheck)
            setIsCheck(true)
        } else {
            setCheckList([])
            setIsCheck(false)
        }
    }

    const checkSingleBox = (checked, id) => {
        if (checked) {
            setCheckList([...checkList, id])
            setIsCheck(true)
        } else {
            setCheckList(checkList.filter((c) => c !== id))
            setIsCheck(false)
        }
    }

    checkedCart && checkedCart.map((c, i) =>
        amount.push(checkedCart.length === 0 ? 0 : checkedCart[i].quantity)
    )

    checkedProduct && checkedProduct.map((p, i) =>
        price.push(checkedProduct.length === 0 ? 0 : checkedProduct[i].price)
    )

    // 제품의 가격을 cart리스트의 quantity(수량)만큼 곱해서 배열에 넣기
    for (let i = 0; i < checkedCart.length; i++) {
        price2.push(amount[i] * price[i])
    }

    // 장바구니에 들어있는 제품들 가격의 합계 구하기.

    const sum = price2.length !== 0 ? price2.reduce((acc, cur) =>
        acc + cur
    ) : 0

    // 배송 합계 구하기
    checkedProduct.map((p) =>
        shippingFee.push(p.length === 0 ? 0 : p.shipping_fee)
    )

    const shippingFeeSum = shippingFee.length !== 0 ? shippingFee.reduce((acc, cur) => acc + cur) : 0

    const handleDeleteAll = () => {
        dispatch(deleteAllItemDB())
    }

    const navigateToPayment = () => {
        navigate("/payment", {
            state: {
                total_price: sum + shippingFeeSum,
                order_kind: "cart_order",
                item,
                shipping_fee: shippingFeeSum
            }
        })
    }

    console.log(sum + shippingFeeSum)

    useEffect(() => {
        dispatch(getCartDB())
    }, [dispatch])

    return (
        <div>
            <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            <Main>
                <h1>장바구니</h1>
                <div className='cart-nav'>
                    <CartCheckBox
                        margin="0 0 0 30px"
                        width="30%"
                        onChange={(e) => checkAllBox(e.target.checked)}
                        checked={checkList.length === cart.length && 0 < checkList.length && 0 < cart.length ? true : false}
                    />
                    <p>상품정보</p>
                    <p>수량</p>
                    <p>상품금액</p>
                    <img className="icon-delete" src={DeleteIcon} alt="" onClick={handleDeleteAll} />
                </div>
                {
                    cart && cart.length === 0 ?
                        <div className='empty-cart'>
                            <p>장바구니에 담긴 상품이 없습니다.</p>
                            <p>원하는 상품을 장바구니에 담아보세요!</p>
                        </div> :
                        <>
                            {
                                item && item.map((c, i) => {
                                    return <CartGrid
                                        key={i}
                                        {...c}
                                        cart={cart[i]}
                                        quantityList={quantityList[i]}
                                        amount={amount[i]}
                                        _onClickPlus={() => setModal(1)}
                                        _onClickMinus={() => setModal(1)}
                                        isCheck={isCheck}
                                        _onClick={() => setModal(2)}
                                        onChange={(e) => checkSingleBox(e.target.checked, cartId[i])}
                                        checked={checkList.includes(cartId[i]) ? true : false}
                                    />
                                })
                            }
                            <CartGrid cart_sum_grid
                                sum={sum + shippingFeeSum}
                                shippingFee={shippingFeeSum}
                            />
                            <Button
                                width="220px"
                                height="68px"
                                font_size="24px"
                                font_weight="bold"
                                margin="0 0 160px 0"
                                _onClick={navigateToPayment}
                            >
                                주문하기
                            </Button>
                        </>
                }
            </Main>
            <Footer />
        </div>
    )
}

const Main = styled.div`
    width: 100%;
    min-height: 573px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    h1 {
        font-size: 36px;
        margin: 54px 0 52px;
    }
    .cart-nav {
        position:relative;
        width: 1280px;
        height: 60px;
        background-color: #F2F2F2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 35px;
        @media screen and (max-width:1320px) {
                width: 900px;
        }
        p {
            font-size: 18px;
            &:nth-child(2) {
                width: 20%;
                text-align: start;
            }
            &:nth-child(3) {
                text-align: end;
                width: 20%;
            }
            &:nth-child(4) {
                margin-right: 131px;
                width: 25%;
                text-align: end;
            }
        }
        img {
            position: absolute;
            right: 18px;
            cursor: pointer;
        }
    }
    .empty-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            &:first-child {
                margin: 100px 0 17px;
                font-size: 18px;
                font-weight: bold;
            }
            &:nth-child(2) {
                font-size: 14px;
                color: #767676;
            }
        }
    }
`

export default ShoppingCart