import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../elements/Button';
import CartCheckBox from './CartCheckBox';
import { getProductDB } from '../redux/modules/product';

//assets
import MinusIcon from "../assets/images/minus-icon_2.svg";
import PlusIcon from "../assets/images/plus-icon_2.svg";
import DeleteIcon from '../assets/images/icon-delete.svg';
import UserModal from './UserModal';
import { modifyCartDB } from '../redux/modules/cart';

function CartGrid(props) {
    const { cart_sum_grid, checkSingleBox, checkList } = props
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartList)
    const product = useSelector((state) => state.product.products)
    const cartId = cart.map((c, i) => c.product_id)
    const item = product.filter((i) => cartId.includes(i.product_id))
    console.log(item)
    console.log(cart)

    const [modal, setModal] = useState(0);
    const [itemId, setItemId] = useState();
    const [radioCheck, setRadioCheck] = useState(false);

    const amount = [];
    const price = [];
    const price2 = [];

    const [count, setCount] = useState(amount)

    cart && cart.map((c, i) =>
        amount.push(c.quantity)
    )

    item && item.map((p, i) =>
        price.push(p.price)
    )


    // 제품의 가격을 cart리스트의 quantity(수량)만큼 곱해서 배열에 넣기
    for (let i = 0; i < amount.length; i++) {
        price2.push(amount[i] * price[i])
    }

    // 장바구니에 들어있는 제품들 가격의 합계 구하기.
    const sum = price2.reduce((acc, cur) =>
        acc + cur
    )


    useEffect(() => {
        dispatch(getProductDB())
    }, [dispatch])


    if (cart_sum_grid) {
        return (
            <SumGrid>
                <div className='product-price'>
                    <div>
                        <p>총 상품금액</p>
                        <span>{sum}</span>
                        <span>원</span>
                    </div>
                    <img src={MinusIcon} alt="" />
                    <div>
                        <p>상품 할인</p>
                        <span>0</span>
                        <span>원</span>
                    </div>
                    <img src={PlusIcon} alt="" />
                    <div>
                        <p>배송비</p>
                        <span>0</span>
                        <span>원</span>
                    </div>
                </div>
                <div className='price-sum'>
                    <p>결제 예정 금액</p>
                    <div>
                        <span>{sum}</span>
                        <span>원</span>
                    </div>
                </div>
            </SumGrid>
        )
    }
    return (
        <>
            {
                item.map((p, i) => {
                    return <Grid key={i}>
                        <CartCheckBox
                            margin="0 40px 0 30px"
                            onChange={(e) => checkSingleBox(e.target.checked, cart[i].product_id)}
                            checked={checkList.includes(cart[i].product_id) ? true : false}
                        />
                        <div className='cart-info'>
                            <img src={p.image} alt="" />
                            <div className='info-text'>
                                <p>{p.seller_store}</p>
                                <p>{p.product_name}</p>
                                <p>{p.price}</p>
                                <p>택배배송/ 무료배송</p>
                            </div>
                        </div>
                        <Button quantity_button margin="0 148px 0 0"
                            _onClickMinus={() => {
                                setModal(1)
                                setItemId(p.product_id)
                            }}
                            _onClickPlus={() => {
                                setModal(1)
                                setItemId(p.product_id)
                            }}
                        >
                            {
                                cart[i].quantity
                            }
                        </Button>
                        <div className='cart-price'>
                            <p>{p.price * (cart[i].quantity)}원</p>
                            <Button width="130px" height="40px" font_weight="500">주문하기</Button>
                        </div>
                        <img className="icon-delete" src={DeleteIcon} alt="" onClick={() => setModal(2)} />
                        {
                            itemId === cart[i].product_id ?
                                modal === 1 ? <UserModal modal_to_check
                                    children={count[i]}
                                    _onClickMinus={() => {
                                        let countCopy = [...count]
                                        countCopy[i] -= 1
                                        setCount(countCopy)
                                    }}
                                    _onClickPlus={() => {
                                        let countCopy = [...count]
                                        countCopy[i] += 1
                                        setCount(countCopy)
                                    }}
                                    btn_children_1="취소"
                                    btn_children_2="수정"
                                    margin="26px 0 0 0"
                                    _onClick={() => setModal(0)}
                                    _onClick2={() => {
                                        const itemData = {
                                            product_id: cart[i].product_id,
                                            quantity: count[i],
                                            is_active: item[i].product_id === cart[i].product_id,
                                        }
                                        dispatch(modifyCartDB(cart[i].cart_item_id, itemData))
                                    }}
                                    _onClickBg={() => setModal(0)}
                                /> : null
                                    ||
                                    modal === 2 ?
                                    <UserModal modal_to_check
                                        _disabled={true}
                                        children2="상품을 삭제하시겠습니까?"
                                        btn_children_1="취소"
                                        btn_children_2="확인"
                                        margin="40px 0 0 0"
                                        _onClick={() => setModal(0)}
                                        _onClickBg={() => setModal(0)}
                                    /> : null
                                :
                                null
                        }
                    </Grid>
                })
            }
        </>
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
    position: relative;
    @media screen and (max-width:1320px) {
        width: 900px;
    }
    .cart-info {
        display: flex;
        margin-right: 48px;
        align-items: center;
        @media screen and (max-width:1320px) {
            margin-right: 35px;
    }
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
                @media screen and (max-width:1320px) {
                    width: 194.8px;
                }
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
        @media screen and (max-width:1320px) {
        margin-left: 35px;
    }
        p {
            font-size: 18px;
            font-weight: bold;
            color: #EB5757;
            margin-bottom: 26px;
        }
    }
    .icon-delete {
        position: absolute;
        top: 18px;
        right: 18px;
        cursor: pointer;
    }
`

const SumGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1280px;
    height: 150px;
    background-color: #F2F2F2;
    border-radius: 10px;
    margin: 70px 0 40px;
    text-align: center;
    @media screen and (max-width:1320px) {
        width: 900px;
    }
    .product-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 121px;
        margin-right: 229px;
        width: 100%;
        @media screen and (max-width:1320px) {
            margin: 0 90px;
        }
        div {
            p {
                margin-bottom: 12px;
            }
            span {
                &:nth-child(2) {
                    font-size: 24px;
                    font-weight: bold;
                }
            }
        }
    }
    .price-sum {
        margin-right: 91px;
        width: 238px;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 36px;
            font-weight: bold;
        }
        p {
            font-weight: bold;
            margin-bottom: 5px;
        }
        span {
            color: #EB5757;
            &:nth-child(2) {
                font-size: 36px;
                font-weight: bold;
            }
            &:nth-child(3) {
                font-size: 18px;
            }
        }
    }
`

export default CartGrid