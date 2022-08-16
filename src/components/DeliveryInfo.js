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
                    <Input radius="none" margin_top="0" margin_bottom="0" width="334px" height="40px" border="1px solid #C4C4C4" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                </div>
                <div className="order-phone">
                    <p className='cellphone'>휴대폰</p>
                    <div className='phone-input'>
                        <Input radius="none" width="80px" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                        <p>-</p>
                        <Input radius="none" width="80px" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                        <p>-</p>
                        <Input radius="none" width="80px" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                    </div>
                </div>
                <div className="order-email">
                    <p>이메일</p>
                    <Input radius="none" margin_top="0" margin_bottom="0" width="334px" height="40px" border="1px solid #C4C4C4" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                </div>
            </OrderingPersonInfo>
            <DeliveryInput>
                <p className="delivery-info">배송지 정보</p>
                <div className='recipient'>
                    <p>수령인</p>
                    <Input radius="none" margin_top="0" margin_bottom="0" width="334px" height="40px" border="1px solid #C4C4C4" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                </div>
                <div className="order-phone">
                    <p className='cellphone'>휴대폰</p>
                    <div className='phone-input'>
                        <Input radius="none" width="80px" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                        <p>-</p>
                        <Input radius="none" width="80px" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                        <p>-</p>
                        <Input radius="none" width="80px" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                    </div>
                </div>
                <div className='order-location'>
                    <p>배송주소</p>
                    <div className='location-input'>
                        <div className='postcode'>
                            <Input radius="none" width="170px" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                            <Button width="154px" height="40px" margin="0 0 0 10px">우편번호 조회</Button>
                        </div>
                        <Input radius="none" width="800px" width_screen="100%" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                        <Input radius="none" width="800px" width_screen="100%" height="40px" margin_top="0" margin_bottom="0" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                    </div>
                </div>
                <div className='delivery-message'>
                    <p>배송 메시지</p>
                    <Input radius="none" margin_top="0" margin_bottom="0" width="800px" width_screen="100%" height="40px" border="1px solid #C4C4C4" borderColor="#C4C4C4" borderBottomColor="#C4C4C4" />
                </div>
            </DeliveryInput>
            <PaymentInfo>
                <div className='payment-option'>
                    <p className='container-title'>결제수단</p>
                    <div className='option'>
                        <label>
                            <input type="radio" name="payment-option" />
                            신용/체크카드
                        </label>
                        <label>
                            <input type="radio" name="payment-option" />
                            무통장 입금
                        </label>
                        <label>
                            <input type="radio" name="payment-option" />
                            휴대폰 결제
                        </label>
                        <label>
                            <input type="radio" name="payment-option" />
                            네이버페이
                        </label>
                        <label>
                            <input type="radio" name="payment-option" />
                            카카오페이
                        </label>
                    </div>
                </div>
                <div className='final-payment'>
                    <p className='final-payment_txt'>최종결제 정보</p>
                    <div className='final-payment_info'>
                        <div className='payment-container_top'>
                            <div>
                                <p>-상품금액</p>
                                <p>
                                    <span>46,500</span>
                                    <span>원</span>
                                </p>
                            </div>
                            <div>
                                <p>-할인금액</p>
                                <p>
                                    <span>0</span>
                                    <span>원</span>
                                </p>
                            </div>
                            <div>
                                <div>
                                    <p>-배송비</p>
                                    <p>
                                        <span>0</span>
                                        <span>원</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>-결제금액</p>
                                <p>46,500원</p>
                            </div>
                        </div>
                        <div className='payment-container_bottom'>
                            <div className='consent-check'>
                                <input type="checkbox" />
                                <p>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
                            </div>
                            <Button width="228px" height="68px" font_size="24px" font_weight="700">결제하기</Button>
                        </div>
                    </div>
                </div>
            </PaymentInfo>
        </Info>
    )
}

const Info = styled.div`
    width: 1280px;
    @media screen and (max-width:1300px) {
        width: 100%;
    }
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
            @media screen and (max-width:1300px) {
                flex: 2;
        }
    }
        label {
            flex: 9;
            @media screen and (max-width:1300px) {
                flex: 8;
        }
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
            @media screen and (max-width:1300px) {
                flex: 2;
        }
        }
        .phone-input {
            display: flex;
            align-items: center;
            flex: 9;
            @media screen and (max-width:1300px) {
                flex: 8;
        }
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
            @media screen and (max-width:1300px) {
                flex: 2;
        }
        }
        label {
            flex: 9;
            @media screen and (max-width:1300px) {
                flex: 8;
        }
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
            @media screen and (max-width:1300px) {
                flex: 2;
        }
        }
        label {
            flex: 9;
            @media screen and (max-width:1300px) {
                flex: 8;
        }
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
            @media screen and (max-width:1300px) {
                flex: 2;
        }
        }
        .phone-input {
            display: flex;
            align-items: center;
            flex: 9;
            @media screen and (max-width:1300px) {
                flex: 8;
        }
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
            @media screen and (max-width:1300px) {
                flex: 2;
        }
        }
        .location-input {
            display: flex;
            flex-direction: column;
            flex: 9;
               @media screen and (max-width:1300px) {
                flex: 8;
        }
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
            @media screen and (max-width:1300px) {
                flex: 2;
        }
        }
        label {
            flex: 9;
            @media screen and (max-width:1300px) {
                flex: 8;
        }
        }
    }
`

const PaymentInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 100px;
    @media screen and (max-width:1300px) {
            display: flex;
            flex-direction: column;
    }
    .payment-option {
        width: 760px;
        margin-right: 40px;
        @media screen and (max-width:1300px) {
            margin-bottom: 70px;
        }
        .container-title {
        margin-bottom: -22px;
    }
        .option {
            padding-bottom: 18px;
            border-bottom: 1px solid #C4C4C4;
            label:nth-child(n+2):nth-child(-n+5) {
                input {
                    margin-left: 15px;
                }
            }
            input{
            margin-right: 10px;
        }
    }   
}
.final-payment {
    width: 100%;
    .final-payment_txt {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 18px;
        @media screen and (max-width:1300px) {
            text-align: left;
            margin-bottom: 50px;
        }
    }
    .final-payment_info {
        width: 480px;
        height: 400px;
        border: 2px solid #21bf48;
        border-radius: 10px;
        overflow: hidden;
        @media screen and (max-width:1300px) {
            margin: 0 auto;
        }
        .payment-container_top {
            width: 100%;
            height: 218px;
            padding: 34px 30px 0;
            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:nth-child(n+2):nth-child(-n+3) {
                    margin-top: 12px;
                }
                &:nth-child(3) {
                    display: flex;
                    flex-direction: column;
                    div {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                    }
                    &::after {
                        content: "";
                        display: block;
                        width: 100%;
                        height: 1px;
                        background-color: #C4C4C4;
                        margin: 18px 0 24px;
                    }
                }
                &:nth-child(4){
                    p:last-child {
                        color: #EB5757;
                        font-size: 24px;
                        font-weight: 700;
                    }
                }
                p>span:first-child {
                    font-size: 18px;
                    font-weight: 700;
                    margin-right: 4px;
                }
                p>span:nth-child(2) {
                    font-size: 14px;
                    color: #767676;
                }
            }
        }
        .payment-container_bottom {
            width: 100%;
            height: 182px;
            background-color: #F2F2F2;
            padding: 32px 30px 34px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .consent-check {
                display: flex;
                width: 100%;
                align-items: center;
                margin-bottom: 32px;
                input {
                    margin-right: 10px;
                }
            }
        }
    }
}
`

export default DeliveryInfo