import React, { useState } from 'react'
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";

//assets
import Hodu from "../assets/images/Logo-hodu2.png"

function SignUp() {
    const [tab, setTab] = useState(0)

    return (
        <SignUpSection>
            <h1>
                <Logo src={Hodu} alt="Hodu Logo" />
            </h1>
            <ul className='tab-wrap'>
                <li onClick={() => setTab(0)}>
                    <div className={tab === 0 ? "tab-on1" : "tab1"}>
                        <span>
                            구매회원가입
                        </span>
                    </div>
                </li>
                <li onClick={() => setTab(1)}>
                    <div className={tab === 1 ? "tab-on2" : "tab2"}>
                        <span>
                            판매회원가입
                        </span>
                    </div>
                </li>
            </ul>
            <SignUpForm>
                {tab === 0 ?
                    <ul className='normal-form_wrap'>
                        <li className='normal-user'>
                            <div className='id-container'>
                                <Input
                                    width="246px"
                                    height="44px"
                                    label="아이디"
                                    margin="0 12px 0 0"
                                />
                                <Button
                                    height="44px"
                                    align="end"
                                    width="122px"
                                >중복확인</Button>
                            </div>
                            <Input label="비밀번호" height="44px" />
                            <Input label="비밀번호 재확인" height="44px" />
                            <Input label="이름" height="44px" />
                            <div className='phone'>
                                <Input label="휴대전화 번호" height="44px" />
                                <Input height="44px" />
                                <Input height="44px" />
                            </div>
                            <Input label="이메일" height="44px" />
                        </li>
                    </ul>
                    :
                    <ul className='form-wrap'>
                        <li className='sales-user'>
                            <div className='id-container'>
                                <Input
                                    width="246px"
                                    height="44px"
                                    label="아이디"
                                    margin="0 12px 0 0"
                                />
                                <Button
                                    height="44px"
                                    align="end"
                                    width="122px"
                                >중복확인</Button>
                            </div>
                            <Input label="비밀번호" height="44px" />
                            <Input label="비밀번호 재확인" height="44px" />
                            <Input label="이름" height="44px" />
                            <div className='phone'>
                                <Input label="휴대전화 번호" height="44px" />
                                <Input height="44px" />
                                <Input height="44px" />
                            </div>
                            <Input label="이메일" height="44px" />
                            <div className='id-container'>
                                <Input
                                    width="246px"
                                    height="44px"
                                    label="사업자 등록번호"
                                    margin="0 12px 0 0"
                                />
                                <Button
                                    height="44px"
                                    align="end"
                                    width="122px"
                                >인증</Button>
                            </div>
                            <Input label="스토어 이름" height="44px" />
                        </li>
                    </ul>
                }
            </SignUpForm>
            <label className='checkbox-label'>
                <input type="checkbox" />
                <p>호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.</p>
            </label>
            <Button _disabled={true} width="380px" height="50px" margin="0px 0px 100px" font_size="17px" >가입하기</Button>
        </SignUpSection>
    )
}

const SignUpSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .checkbox-label {
        display: flex;
        width: 380px;
        margin: 34px 0;
        input {
            align-self: baseline;
            margin-right: 10px;
        }
    }
    .tab-wrap {
    width: 440px;
    display: table;
    table-layout: fixed;
    box-sizing: border-box;
    border-collapse: collapse;
    .tab-on1 {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        border: 1px solid #c4c4c4;
        border-bottom: 1px solid transparent;
        border-radius: 10px 10px 0 0;
    }
    .tab-on2 {
        background-color: #fff;
        display: block;
        height: 60px;
        padding-top: 17px;
        box-sizing: border-box;
        border: 1px solid #c4c4c4;
        border-bottom: 1px solid transparent;
        border-radius: 10px 10px 0 0;
    }
    .tab1 {
       display: flex;
       align-items: center;
       justify-content: center;
       height: 60px;
       border: 1px solid #c4c4c4;
       border-radius: 10px 10px 0 0;
    }
    .tab2 {
        display: block;
        height: 60px;
        padding-top: 17px;
        box-sizing: border-box;
        border: 1px solid #c4c4c4;
        border-radius: 10px 10px 0 0;
    }
    li {
        display: table-cell;
        text-align: center;
        box-sizing: border-box;
        background-color: #f8f9fa;
        vertical-align: bottom;
        cursor: pointer;
        p{
            height: 60px;
            padding-top: 17px;
        }
    }
  }
`

const SignUpForm = styled.div`
  width: 440px;
  box-sizing: border-box;
  border: 1px solid #C4C4C4;
  border-top: none;
  .normal-form_wrap{
        padding: 40px 35px 36px;
        width: 100%;
        height: 616px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        li {
            .id-container {
              display: flex;
          }
          .phone {
            display: flex;
            align-items: end;
            justify-content: center;
            input:first-child::after{

            }
            label:first-child {
                margin-right: 12px;
            }
            label:last-child {
                margin-left: 12px;
            }
          }
        }
    }
    .form-wrap{
        padding: 40px 35px 36px;
        width: 100%;
        height: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        li {
            .id-container {
              display: flex;
          }
        }
    }
`

const Logo = styled.img`

`

export default SignUp