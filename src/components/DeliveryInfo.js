import React from 'react'
import styled from "styled-components";

//element
import Input from '../elements/Input';
import Button from '../elements/Button';

function DeliveryInfo() {
    return (
        <Info>
            <p className='container-title'>배송정보</p>
            <OrderingPersonInfo>
                <p className="order-person">주문자 정보</p>
                <div className='order-name'>
                    <p>이름</p>
                    <Input margin_top="0" margin_bottom="0" width="334px" height="40px" border="1px solid #C4C4C4" />
                </div>
                <div className="order-phone">
                    <p className='cellphone'>휴대폰</p>
                    <div className='phone-input'>
                        <Input width="80px" height="40px" margin_top="0" margin_bottom="0" />
                        <p>-</p>
                        <Input width="80px" height="40px" margin_top="0" margin_bottom="0" />
                        <p>-</p>
                        <Input width="80px" height="40px" margin_top="0" margin_bottom="0" />
                    </div>
                </div>
                <div className="order-email">
                    <p>이메일</p>
                    <Input margin_top="0" margin_bottom="0" width="334px" height="40px" border="1px solid #C4C4C4" />
                </div>
            </OrderingPersonInfo>
            <DeliveryInput>
                <p className="delivery-info">배송지 정보</p>
                <div className='recipient'>
                    <p>수령인</p>
                    <Input margin_top="0" margin_bottom="0" width="334px" height="40px" border="1px solid #C4C4C4" />
                </div>
                <div className="order-phone">
                    <p className='cellphone'>휴대폰</p>
                    <div className='phone-input'>
                        <Input width="80px" height="40px" margin_top="0" margin_bottom="0" />
                        <p>-</p>
                        <Input width="80px" height="40px" margin_top="0" margin_bottom="0" />
                        <p>-</p>
                        <Input width="80px" height="40px" margin_top="0" margin_bottom="0" />
                    </div>
                </div>
                <div className='order-location'>
                    <p>배송주소</p>
                    <div className='location-input'>
                        <div className='postcode'>
                            <Input width="170px" height="40px" margin_top="0" margin_bottom="0" />
                            <Button width="154px" height="40px" margin="0 0 0 10px">우편번호 조회</Button>
                        </div>
                        <Input width="800px" height="40px" margin_top="0" margin_bottom="0" />
                        <Input width="800px" height="40px" margin_top="0" margin_bottom="0" />
                    </div>
                </div>
                <div className='delivery-message'>
                    <p>배송 메시지</p>
                    <Input margin_top="0" margin_bottom="0" width="800px" height="40px" border="1px solid #C4C4C4" />
                </div>
            </DeliveryInput>
            <PaymentInfo>
                <div className='payment-option'>
                    <p className='container-title'>결제수단</p>
                    <div>
                        <label>
                            <input type="radio" />
                            신용/체크카드
                        </label>
                        <label>
                            <input type="radio" />
                            무통장 입금
                        </label>
                        <label>
                            <input type="radio" />
                            휴대폰 결제
                        </label>
                        <label>
                            <input type="radio" />
                            네이버페이
                        </label>
                        <label>
                            <input type="radio" />
                            카카오페이
                        </label>
                    </div>
                </div>
                <div></div>
            </PaymentInfo>
        </Info>
    )
}

const Info = styled.div`
    width: 1280px;
    .container-title {
        font-size: 24px;
        font-weight: 500;
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #C4C4C4;
            margin: 18px 0 40px;
        }
    }
`

const OrderingPersonInfo = styled.div`
    width: 100%;
    .order-person {
            font-size: 18px;
            font-weight: 500;
            &::after {
                content: "";
                display: block;
                width: 100%;
                height: 2px;
                background-color: #C4C4C4;
                margin-top: 8px;
            }
        }
    .order-name {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        p {
            flex: 1;
        }
        label {
            flex: 9;
        }
    }
    .order-phone {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        .cellphone {
            flex: 1;
        }
        .phone-input {
            display: flex;
            align-items: center;
            flex: 9;
            p {
                margin: 0 10px;
            }
        }
    }
    .order-email {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        margin-bottom: 40px;
        p {
            flex: 1;
        }
        label {
            flex: 9;
        }
    }
`
const DeliveryInput = styled.div`
    width: 100%;
    .delivery-info {
        font-size: 18px;
        font-weight: 500;
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #C4C4C4;
            margin-top: 8px;
        }
    }
    .recipient {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        p {
            flex: 1;
        }
        label {
            flex: 9;
        }
    }
    .order-phone {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        .cellphone {
            flex: 1;
        }
        .phone-input {
            display: flex;
            align-items: center;
            flex: 9;
            p {
                margin: 0 10px;
            }
        }
    }
    .order-location {
        width: 100%;
        display: flex;
        align-items: flex-start;
        border-bottom: 1px solid #c4c4c4;
        padding: 8px 0;
        p {
            flex: 1;
        }
        .location-input {
            display: flex;
            flex-direction: column;
            flex: 9;
            label {
                &:nth-child(2) {
                    margin: 8px 0;
                }
            }
            .postcode {
                display: flex;
            }
        }
    }
    .delivery-message {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        margin-bottom: 70px;
        p {
            flex: 1;
        }
        label {
            flex: 9;
        }
    }
`

const PaymentInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container-title {
        margin-bottom: -22px;
    }
    .payment-option {
        width: 760px;
        padding: 18px 0;
    }
`

export default DeliveryInfo