import React from 'react'
import styled from "styled-components";

function UserModal() {
    return (
        <Modal>
            <div className='triangle'></div>
            <ModalContent>
                <p>마이페이지</p>
                <p>로그아웃</p>
            </ModalContent>
        </Modal>
    )
}

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