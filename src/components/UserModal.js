import React, { useState } from 'react'
import styled from "styled-components";

//elements
import Button from '../elements/Button';

//assets
import DeleteIcon from '../assets/images/icon-delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { modifyCartDB } from '../redux/modules/cart';

function UserModal(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartList)
    const cartItemId = useSelector((state) => state.cart.cartList.cart_item_id)


    const { display, modal_to_check, _disabled, children, children2, children3, btn_children_1, btn_children_2, margin, _onClick, _onClickMinus, _onClickPlus, _onClickBg, _onClick2 } = props;


    if (modal_to_check) {
        return (
            <>
                <ModalBg onClick={_onClickBg}></ModalBg>
                <CheckModal>
                    <p>
                        {children2}<br />
                        {children3}
                    </p>
                    {
                        _disabled ?
                            null
                            :
                            <Button quantity_button children={children} _disabled={_disabled} display={display} _onClickMinus={_onClickMinus} _onClickPlus={_onClickPlus} />
                    }
                    <img src={DeleteIcon} alt="" onClick={_onClick} />
                    <BtnContainer margin={margin}>
                        <Button width="100px" height="40px" margin="0 10px 0 0" bg="#FFFF" color="#767676" border="1px solid #c4c4c4" _onClick={_onClick}>{btn_children_1}</Button>
                        <Button width="100px" height="40px" _onClick={_onClick2}>{btn_children_2}</Button>
                    </BtnContainer>
                </CheckModal>
            </>
        )
    }
    return (
        <Modal>
            <div className='triangle'></div>
            <ModalContent>
                <p>마이페이지</p>
                <p onClick={_onClick}>로그아웃</p>
            </ModalContent>
        </Modal>
    )
}

const ModalBg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    opacity: 0.5;
    @media screen and (max-width:1320px) {
        width: 100%;
        height: 100vh;
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        opacity: 0.5;
    }
`

const CheckModal = styled.div`
    width: 360px;
    height: 200px;
    border: 1px solid #C4C4C4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: #FFFF;
    top: 50%;
    left: calc(50% - 200px);
    z-index: 10;
    img {
        position: absolute;      
        top: 18px;
        right: 18px;
        cursor: pointer;
    }
    /* div {
        display: flex;
        align-items: center;
        justify-content: center;
    } */
    p {
        text-align: center;
        line-height: 20px;
    }
`

const BtnContainer = styled.div`
    margin: ${(props) => props.margin};
`

const Modal = styled.div`
    width: 130px;
    height: 118px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    right: 313px;
    .triangle {
        width: 30px;
        background-color: #FFFF;
        height: 30px;
        border-radius: 4px;
        box-shadow:-2px 2px rgb(178 178 178 / 0.3);
        transform: rotate(135deg);
        position: absolute;
        bottom: 102px;
        z-index: 2;
    }
`

const ModalContent = styled.div`
    width: 130px;
    height: 108px;
    box-shadow: 0px 0px 6px 0px #00000040;
    background-color: #FFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        width: 110px;
        height: 40px;
        text-align: center;
        border: 1px solid transparent;
        z-index: 3;
        line-height: 40px;
        color: #767676;
        cursor: pointer;
        &:first-child {
            margin-bottom: 8px;
        }
        &:hover {
            border: 1px solid #767676;
            border-radius: 5px;
            color: black;
            transition: all 0.3s ease-in;
        }
    }
`


export default UserModal