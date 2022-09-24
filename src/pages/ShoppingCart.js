import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import CartGrid from '../components/CartGrid';
import UserModal from '../components/UserModal';
import Footer from '../components/Footer';

// components
import Nav from '../components/Nav'
import CartCheckBox from '../components/CartCheckBox';
import Button from '../elements/Button';
import { getCartDB } from '../redux/modules/cart';


function ShoppingCart() {
    const [checkList, setCheckList] = useState([])

    const dispatch = useDispatch()
    const isLogin = localStorage.getItem("token")
    const cart = useSelector((state) => state.cart.cartList)
    const quantityList = cart.map((q) => q.quantity)
    const cartId = cart.map((c) => c.product_id)
    const product = useSelector((state) => state.product.products)
    const cartItemId = cart.map((c, i) => cart[i].product_id)
    console.log(cartItemId)
    const checkedQuantity = cart.filter((c, i) => checkList[i] !== c.product_id[i])
    console.log(checkedQuantity)
    const item = product.filter((i) => cartId.includes(i.product_id))
    const checkedPrice = item.filter((c, i) => checkList[i] !== c.product_id[i])


    const [modal, setModal] = useState(0);
    const [isCheck, setIsCheck] = useState(false)

    const amount = [];
    const price = [];
    const price2 = [];

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

    checkedQuantity && checkedQuantity.map((c, i) =>
        amount.push(checkedQuantity.length === 0 ? 0 : checkedQuantity[i].quantity)
    )
    console.log(amount)


    checkedPrice && checkedPrice.map((p, i) =>
        price.push(checkedPrice.length === 0 ? 0 : checkedPrice[i].price)
    )
    console.log(price)

    // 제품의 가격을 cart리스트의 quantity(수량)만큼 곱해서 배열에 넣기
    for (let i = 0; i < checkedQuantity.length; i++) {
        price2.push(amount[i] * price[i])
    }
    console.log(price2)

    // 장바구니에 들어있는 제품들 가격의 합계 구하기.

    const sum = price2.length !== 0 ? price2.reduce((acc, cur) =>
        acc + cur
    ) : 0
    console.log(sum)

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
                </div>
                {
                    cart && cart.length === 0 ?
                        <div className='empty-cart'>
                            <p>장바구니에 담긴 상품이 없습니다.</p>
                            <p>원하는 상품을 장바구니에 담아보세요!</p>
                        </div> :
                        <>
                            {
                                item.map((c, i) => {
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
                                sum={sum}
                            />
                            <Button width="220px" height="68px" font_size="24px" font_weight="bold" margin="0 0 160px 0">주문하기</Button>
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