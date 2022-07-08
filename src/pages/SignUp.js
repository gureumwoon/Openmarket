import React, { useState } from 'react'
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";

//assets
import Hodu from "../assets/images/Logo-hodu2.png";
import arrowUp from "../assets/images/icon-up-arrow.svg";

function SignUp() {
    const [tab, setTab] = useState(0)
    const [dropdown, setDropDown] = useState(false)
    const [phoneData, setPhoneData] = useState("")
    const [phoneData2, setPhoneData2] = useState("")
    const [phoneData3, setPhoneData3] = useState("")

    // 구매 회원가입 정보 저장
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [pw2, setPw2] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // 구매자 계정 에러 메세지
    const [idMessage, setIdMessage] = useState("")
    const [pwMessage, setPwMessage] = useState("")
    const [pw2Message, setPw2Message] = useState("")
    const [emailMessage, setEmailMessage] = useState("")

    // 판매자 계정 에러 메세지
    const [salesIdMessage, setSalesIdMessage] = useState("")
    const [salesPwMessage, setSalesPwMessage] = useState("")
    const [salesPw2Message, setSalesPw2Message] = useState("")
    const [salesEmailMessage, setSalesEmailMessage] = useState("")

    // 구매자 계정 유효성 검사
    const [isPw, setIsPw] = useState()
    const [isPw2, setIsPw2] = useState()
    const [isId, setIsId] = useState()
    const [isEmail, setIsEmail] = useState()

    // 판매자 계정 유효성 검사
    const [salesIsId, setSalesIsId] = useState()
    const [salesIsPw, setSalesIsPw] = useState()
    const [salesIsPw2, setSalesIsPw2] = useState()
    const [salesIsEmail, setSalesIsEmail] = useState()

    const hadnleArrow = () => {
        setDropDown(!dropdown)
    }

    const handleSelect = (e) => {
        setPhoneData(e.target.textContent)
        setDropDown(false)
    }

    // Id 유효성 검사
    const idCheck = (e) => {
        setId(e.target.value)
        const regId = /^[a-zA-Z][0-9a-zA-Z]{0,19}$/
        if (tab === 0) {
            if (!regId.test(id)) {
                setIdMessage("닉네임 형식에 맞게 입력해주세요")
                setIsId(false)
            } else {
                setIdMessage("멋진 아이디네요 :)")
                setIsId(true)
            }
        } else if (tab === 1) {
            if (!regId.test(id)) {
                setSalesIdMessage("닉네임 형식에 맞게 입력해주세요")
                setSalesIsId(false)
            } else {
                setSalesIdMessage("멋진 아이디네요 :)")
                setSalesIsId(true)
            }
        }
    }

    // 비밀번호 유효성 검사
    const pwCheck = (e) => {
        setPw(e.target.value)
        const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/

        if (tab === 0) {
            if (!regPw.test(pw)) {
                setPwMessage("8자 이상 영문, 숫자 조합으로 입력해주세요")
                setIsPw(false)
            } else {
                setPwMessage("올바른 비밀번호 입니다.")
                setIsPw(true)
            }
        } else if (tab === 1) {
            if (!regPw.test(pw)) {
                setSalesPwMessage("8자 이상 영문, 숫자 조합으로 입력해주세요")
                setSalesIsPw(false)
            } else {
                setSalesPwMessage("올바른 비밀번호 입니다.")
                setSalesIsPw(true)
            }
        }
    }

    // 비밀번호 확인 유효성 검사
    const isSamePw = (e) => {
        setPw2(e.target.value)
        if (tab === 0) {
            if (pw === e.target.value) {
                setPw2Message("비밀번호가 일치합니다.")
                setIsPw2(true)
            } else {
                setPw2Message("비밀번호가 일치하지 않습니다")
                setIsPw2(false)
            }
        } else if (tab === 1) {
            if (pw === e.target.value) {
                setSalesPw2Message("비밀번호가 일치합니다.")
                setSalesIsPw2(true)
            } else {
                setSalesPw2Message("비밀번호가 일치하지 않습니다")
                setSalesIsPw2(false)
            }
        }
    }

    // 이메일 유효성 검사
    const emailCheck = (e) => {
        setEmail(e.target.value)
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if (tab === 0) {
            if (!regEmail.test(email)) {
                setEmailMessage("이메일 형식에 맞게 입력해주세요")
                setIsEmail(false)
            } else {
                setEmailMessage("올바른 이메일 형식 입니다")
                setIsEmail(true)
            }
        } else if (tab === 1) {
            if (!regEmail.test(email)) {
                setSalesEmailMessage("이메일 형식에 맞게 입력해주세요")
                setSalesIsEmail(false)
            } else {
                setSalesEmailMessage("올바른 이메일 형식 입니다")
                setSalesIsEmail(true)
            }
        }
    }

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
                {tab === 0 &&
                    <ul className='normal-form_wrap'>
                        <li className='normal-user'>
                            <div className='id-container'>
                                <Input
                                    width="246px"
                                    height="44px"
                                    label="아이디"
                                    margin="0 12px 0 0"
                                    _onChange={idCheck}
                                    borderColor={
                                        id.length > 0 && (
                                            isId ? "#21BF48" : "#EB5757"
                                        )
                                    }
                                />
                                <Button
                                    height="44px"
                                    align="end"
                                    width="122px"
                                >중복확인</Button>
                            </div>
                            {id.length > 0 && (
                                <>
                                    <Message className={`${isId ? "success" : "error"}`}>
                                        {idMessage}
                                    </Message>
                                </>
                            )}
                            <Input
                                type="password"
                                label="비밀번호"
                                height="44px"
                                _onChange={pwCheck}
                                borderColor={
                                    pw.length > 0 && (
                                        isPw ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {pw.length > 0 && (
                                <>
                                    <Message className={`${isPw ? "success" : "error"}`}>
                                        {pwMessage}
                                    </Message>
                                </>
                            )}
                            <Input
                                type="password"
                                label="비밀번호 재확인"
                                height="44px"
                                _onChange={isSamePw}
                                borderColor={
                                    pw2.length > 0 && (
                                        isPw2 ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {pw2.length > 0 && (
                                <>
                                    <Message className={`${isPw2 ? "success" : "error"}`}>
                                        {pw2Message}
                                    </Message>
                                </>
                            )}

                            <Input label="이름" height="44px" />
                            <Phone>
                                <div className='dropdown'>
                                    <Input defaultValue={phoneData} label="휴대전화 번호" height="44px" />
                                    <img className={`${!dropdown ? "on" : "off"}`} src={arrowUp} alt="" onClick={hadnleArrow} />
                                    {dropdown === true ? <ul className="dropdown-items">
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >010</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >011</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >016</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >017</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >018</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >019</button>
                                        </li>
                                    </ul> : null}
                                </div>
                                <Input height="44px" />
                                <Input height="44px" />
                            </Phone>
                            <Input
                                label="이메일"
                                height="44px"
                                _onChange={emailCheck}
                                borderColor={
                                    email.length > 0 && (
                                        isEmail ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {email.length > 0 && (
                                <>
                                    <Message className={`${isEmail ? "success" : "error"}`} style={{ marginBottom: "15px" }}>
                                        {emailMessage}
                                    </Message>
                                </>
                            )}
                        </li>
                    </ul>
                }
                {tab === 1 &&
                    <ul className='form-wrap'>
                        <li className='sales-user'>
                            <div className='id-container'>
                                <Input
                                    width="246px"
                                    height="44px"
                                    label="아이디"
                                    margin="0 12px 0 0"
                                    _onChange={idCheck}
                                />
                                <Button
                                    height="44px"
                                    align="end"
                                    width="122px"
                                >중복확인</Button>
                            </div>
                            {id.length > 0 && (
                                <>
                                    <Message className={`${salesIsId ? "success" : "error"}`}>
                                        {salesIdMessage}
                                    </Message>
                                </>
                            )}
                            <Input label="비밀번호" height="44px" _onChange={pwCheck} />
                            {pw.length > 0 && (
                                <>
                                    <Message className={`${salesIsPw ? "success" : "error"}`}>
                                        {salesPwMessage}
                                    </Message>
                                </>
                            )}
                            <Input label="비밀번호 재확인" height="44px" />
                            {pw2.length > 0 && (
                                <>
                                    <Message className={`${salesIsPw2 ? "success" : "error"}`}>
                                        {salesPw2Message}
                                    </Message>
                                </>
                            )}
                            <Input label="이름" height="44px" />
                            <Phone>
                                <div className='dropdown'>
                                    <Input defaultValue={phoneData} label="휴대전화 번호" height="44px" />
                                    <img className={`${!dropdown ? "on" : "off"}`} src={arrowUp} alt="" onClick={hadnleArrow} />
                                    {dropdown === true ? <ul className="dropdown-items">
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >010</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >011</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >016</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >017</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >018</button>
                                        </li>
                                        <li className="dropdown-item" onClick={handleSelect}>
                                            <button className="dropdown-option" >019</button>
                                        </li>
                                    </ul> : null}
                                </div>
                                <Input height="44px" _onChange={(e) => setPhoneData2(e.target.value)} />
                                <Input height="44px" _onChange={(e) => setPhoneData3(e.target.value)} />
                            </Phone>
                            <Input label="이메일" height="44px" />
                            {email.length > 0 && (
                                <>
                                    <Message className={`${salesIsEmail ? "success" : "error"}`} >
                                        {salesEmailMessage}
                                    </Message>
                                </>
                            )}
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
            {tab === 0 ?
                <Button width="380px" height="50px" margin="0px 0px 100px" font_size="17px" _disabled={!isId || !isPw || !isPw2 || !isEmail ? true : false} >가입하기</Button>
                :
                <Button _disabled={true} width="380px" height="50px" margin="0px 0px 100px" font_size="17px" >가입하기</Button>
            }
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
    img.off{
            transform:rotate(180deg)
        }
`

const Phone = styled.div`
   display: flex;
            align-items: end;
            justify-content: center;
            label:first-child {
                margin-right: 12px;
                position: relative;
            }
            img {
                position: absolute;
                top: 58px;
                left: 88px;
                cursor: pointer;
            }
            label:last-child {
                margin-left: 12px;
            }
            .dropdown {
                display: flex;
                flex-direction: column;
                position: relative;
                .dropdown-items {
                    position: absolute;
                    z-index: 2;
                    background-color: white;
                    border: 1px solid #C4C4C4;
                    top: 100px;
                    width: 114.84px;
                    border-radius: 5px;
                    height: 100px;
                    overflow-y: scroll;
                    box-shadow: 0 2px 5px 1px rgba(64 60 67 / 16%);
                    transition: border-color 200ms ease-in, padding 200ms ease-in,max-height 200ms ease-in,box-shadow 200ms ease-in;
                    padding-top: 6px;
                    box-sizing: border-box;
            .dropdown-item {
                width: 100%;
                height: 28px;
                line-height: 25px;
                text-align: center;
                cursor:pointer;
                &:hover {
                    background-color:#E0E0E0;
                    transition: all 0.5s;
                }
            }
         }
            }
`

const Message = styled.p`
  font-size: 13px;
  align-self: flex-start;
  height: 5px;
  margin: 5px 0;
  color: ${(props) => (props.className === "success" ? "#21BF48" : "#EB5757;")}
`

const Logo = styled.img`

`

export default SignUp