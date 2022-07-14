import React, { useState } from 'react'
import styled from "styled-components";

// elements
import Input from "../elements/Input";
import Button from "../elements/Button";
import Tab from "../elements/Tab";

//assets
import Hodu from "../assets/images/Logo-hodu15.png";
import arrowUp from "../assets/images/icon-up-arrow.svg";

function SignUp() {
    const [tab, setTab] = useState(0)
    const [dropdown, setDropDown] = useState(false)
    const [phoneData1, setPhoneData] = useState("")
    const [phoneData2, setPhoneData2] = useState("")
    const [phoneData3, setPhoneData3] = useState("")
    const phoneData = phoneData1 + phoneData2 + phoneData3

    // 회원가입 정보 저장
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [pw2, setPw2] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [bin, setBin] = useState("")
    const [storeName, setStoreName] = useState("")

    // 구매자 계정 에러 메세지
    const [idMessage, setIdMessage] = useState("")
    const [pwMessage, setPwMessage] = useState("")
    const [pw2Message, setPw2Message] = useState("")
    const [nameMessage, setNameMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [phoneMessage, setPhoneMessage] = useState("")

    // 판매자 계정 에러 메세지
    const [salesIdMessage, setSalesIdMessage] = useState("")
    const [salesPwMessage, setSalesPwMessage] = useState("")
    const [salesPw2Message, setSalesPw2Message] = useState("")
    const [salesNameMessage, setSalesNameMessage] = useState("")
    const [salesEmailMessage, setSalesEmailMessage] = useState("")
    const [salesPhoneMessage, setSalesPhoneMessage] = useState("")
    const [salesBinMessage, setSalesBinMessage] = useState("")
    const [salesStoreNameMessage, setSalesStoreNameMessage] = useState("")

    // 구매자 계정 유효성 검사
    const [isPw, setIsPw] = useState()
    const [isPw2, setIsPw2] = useState()
    const [isId, setIsId] = useState()
    const [isName, setIsName] = useState()
    const [isEmail, setIsEmail] = useState()
    const [isPhone, setIsPhone] = useState()

    // 판매자 계정 유효성 검사
    const [salesIsId, setSalesIsId] = useState()
    const [salesIsPw, setSalesIsPw] = useState()
    const [salesIsPw2, setSalesIsPw2] = useState()
    const [salesIsName, setSalesIsName] = useState()
    const [salesIsEmail, setSalesIsEmail] = useState()
    const [salesIsPhone, setSalesIsPhone] = useState()
    const [salesIsBin, setSalesIsBin] = useState()
    const [salesIsStoreName, setSalesIsStoreName] = useState()

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
            } else if (e.target.value === "") {
                setIdMessage("필수 정보입니다")
                setIsId(false)
            } else {
                setIdMessage("멋진 아이디네요 :)")
                setIsId(true)
            }
        } else if (tab === 1) {
            if (!regId.test(id)) {
                setSalesIdMessage("닉네임 형식에 맞게 입력해주세요")
                setSalesIsId(false)
            } else if (e.target.value === "") {
                setSalesIdMessage("필수 정보입니다")
                setSalesIsId(false)
            } else {
                setSalesIdMessage("멋진 아이디네요 :)")
                setSalesIsId(true)
            }
        }
    }

    const idBlankCheck = () => {
        if (tab === 0) {
            if (id === "") {
                setIdMessage("필수 정보입니다")
                setIsId(false)
            }
        } else if (tab === 1) {
            if (id === "") {
                setSalesIdMessage("필수 정보입니다")
                setSalesIsId(false)
            }
        }
    }

    // 비밀번호 유효성 검사
    const pwCheck = (e) => {
        setPw(e.target.value)
        const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/

        if (tab === 0) {
            if (e.target.value === "") {
                setPwMessage("필수 정보입니다")
                setIsPw(false)
            } else if (!regPw.test(pw)) {
                setPwMessage("8자 이상 영문, 숫자 조합으로 입력해주세요")
                setIsPw(false)
            } else {
                setPwMessage("올바른 비밀번호 입니다.")
                setIsPw(true)
            }
        } else if (tab === 1) {
            if (e.target.value === "") {
                setSalesPwMessage("필수 정보입니다")
                setSalesIsPw(false)
            } else if (!regPw.test(pw)) {
                setSalesPwMessage("8자 이상 영문, 숫자 조합으로 입력해주세요")
                setSalesIsPw(false)
            } else {
                setSalesPwMessage("올바른 비밀번호 입니다.")
                setSalesIsPw(true)
            }
        }
    }

    const pwBlankCheck = () => {
        if (tab === 0) {
            if (pw === "") {
                setPwMessage("필수 정보입니다")
                setIsPw(false)
            }
        } else if (tab === 1) {
            if (pw === "") {
                setSalesPwMessage("필수 정보입니다")
                setSalesIsPw(false)
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
            } else if (e.target.value === "") {
                setPw2Message("필수 정보입니다")
                setIsPw2(false)
            } else {
                setPw2Message("비밀번호가 일치하지 않습니다")
                setIsPw2(false)
            }
        } else if (tab === 1) {
            if (pw === e.target.value) {
                setSalesPw2Message("비밀번호가 일치합니다.")
                setSalesIsPw2(true)
            } else if (e.target.value === "") {
                setSalesPw2Message("필수 정보 입니다")
                setSalesIsPw2(false)
            } else {
                setSalesPw2Message("비밀번호가 일치하지 않습니다")
                setSalesIsPw2(false)
            }
        }
    }

    const pw2BlankCheck = () => {
        if (tab === 0) {
            if (pw2 === "") {
                setPw2Message("필수 정보입니다")
                setIsPw2(false)
            }
        } else if (tab === 1) {
            if (pw2 === "") {
                setSalesPw2Message("필수 정보입니다")
                setSalesIsPw2(false)
            }
        }
    }

    const nameCheck = (e) => {
        setName(e.target.value)
        if (tab === 0) {
            if (e.target.value === "") {
                setNameMessage("필수 정보입니다")
                setIsName(false)
            }
        } else if (tab === 1) {
            if (e.target.value === "") {
                setSalesNameMessage("필수 정보입니다")
                setSalesIsName(false)
            }
        }
    }

    const nameBlankCheck = () => {
        if (tab === 0) {
            if (name === "") {
                setNameMessage("필수 정보입니다")
                setIsName(false)
            }
        } else if (tab === 1) {
            if (name === "") {
                setSalesNameMessage("필수 정보입니다")
                setSalesIsName(false)
            }
        }
    }

    // 이메일 유효성 검사
    const emailCheck = (e) => {
        setEmail(e.target.value)
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if (tab === 0) {
            if (e.target.value === "") {
                setEmailMessage("필수 정보입니다")
                setIsEmail(false)
            } else if (!regEmail.test(email)) {
                setEmailMessage("이메일 형식에 맞게 입력해주세요")
                setIsEmail(false)
            } else {
                setEmailMessage("올바른 이메일 형식 입니다")
                setIsEmail(true)
            }
        } else if (tab === 1) {
            if (e.target.value === "") {
                setSalesEmailMessage("필수 정보입니다")
                setSalesIsEmail(false)
            } else if (!regEmail.test(email)) {
                setSalesEmailMessage("이메일 형식에 맞게 입력해주세요")
                setSalesIsEmail(false)
            } else {
                setSalesEmailMessage("올바른 이메일 형식 입니다")
                setSalesIsEmail(true)
            }
        }
    }

    const emailBlankCheck = () => {
        if (tab === 0) {
            if (email === "") {
                setEmailMessage("필수 정보입니다")
                setIsEmail(false)
            }
        } else if (tab === 1) {
            if (email === "") {
                setSalesEmailMessage("필수 정보입니다")
                setSalesIsEmail(false)
            }
        }
    }

    const phoneBlankCheck = () => {
        if (tab === 0) {
            if (phoneData === "") {
                setPhoneMessage("필수 정보입니다")
                setIsPhone(false)
            }
        } else if (tab === 1) {
            if (phoneData === "") {
                setSalesPhoneMessage("필수 정보입니다")
                setSalesIsPhone(false)
            }
        }
    }

    // 스토어 네임 유효성 체크
    const storeNameCheck = (e) => {
        setStoreName(e.target.value)
    }

    const storeNameBlankCheck = () => {
        if (storeName === "") {
            setSalesStoreNameMessage("필수 정보입니다")
            setSalesIsStoreName(false)
        }
    }

    // 사업자 등록번호 유효성 체크

    const binCheck = (e) => {
        setBin(e.target.value)
        const regBin = /^\d{10}$/
        if (e.target.value === "") {
            setSalesBinMessage("필수 정보입니다")
            setSalesIsBin(false)
        } else if (!regBin.test(e.target.value)) {
            setSalesBinMessage("사업자 등록번호 형식이 잘못되었습니다")
            setSalesIsBin(false)
        } else {
            setSalesBinMessage("올바른 형식 입니다")
            setSalesIsBin(true)
        }
    }

    const binBlankCheck = () => {
        if (bin === "") {
            setSalesBinMessage("필수 정보입니다")
            setSalesIsBin(false)
        }
    }

    const buttoncheck = () => {
        if (tab === 0) {
            if (!isId || !isPw || !isPw2 || !isEmail || name === "" || phoneData === "") {
                return true;
            } else {
                return false;
            }
        } else {
            if (!isId || !isPw || !isPw2 || !isEmail || name === "" || phoneData === "" || bin === "" || storeName === "") {
                return true;
            } else {
                return false;
            }
        }
    }

    return (
        <SignUpSection>
            <h1 style={{ margin: "70px 0 50px" }}>
                <Logo src={Hodu} alt="Hodu Logo" />
            </h1>
            <Tab tab={tab} setTab={setTab} children="판매회원가입" children2="구매회원가입" />
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
                                    _onBlur={idBlankCheck}
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
                            {id.length >= 0 && (
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
                                _onBlur={pwBlankCheck}
                                borderColor={
                                    pw.length > 0 && (
                                        isPw ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {pw.length >= 0 && (
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
                                _onBlur={pw2BlankCheck}
                                borderColor={
                                    pw2.length > 0 && (
                                        isPw2 ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {pw2.length >= 0 && (
                                <>
                                    <Message className={`${isPw2 ? "success" : "error"}`}>
                                        {pw2Message}
                                    </Message>
                                </>
                            )}

                            <Input label="이름" height="44px" _onChange={nameCheck} _onBlur={nameBlankCheck} />
                            {name.length === 0 && (
                                <>
                                    <Message className={`${isName ? "success" : "error"}`}>
                                        {nameMessage}
                                    </Message>
                                </>
                            )}
                            <Phone>
                                <div className='dropdown'>
                                    <Input defaultValue={phoneData1} label="휴대전화 번호" height="44px" _onBlur={phoneBlankCheck} />
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
                                <Input height="44px" _onChange={(e) => setPhoneData2(e.target.value)} _onBlur={phoneBlankCheck} />
                                <Input height="44px" _onChange={(e) => setPhoneData2(e.target.value)} _onBlur={phoneBlankCheck} />
                            </Phone>
                            {phoneData.length === 0 && (
                                <>
                                    <Message className={`${isPhone ? "success" : "error"}`} >
                                        {phoneMessage}
                                    </Message>
                                </>
                            )}
                            <Input
                                label="이메일"
                                height="44px"
                                _onChange={emailCheck}
                                _onBlur={emailBlankCheck}
                                borderColor={
                                    email.length > 0 && (
                                        isEmail ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {email.length >= 0 && (
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
                                    _onBlur={idBlankCheck}
                                    borderColor={
                                        id.length > 0 && (
                                            salesIsId ? "#21BF48" : "#EB5757"
                                        )
                                    }
                                />
                                <Button
                                    height="44px"
                                    align="end"
                                    width="122px"
                                >중복확인</Button>
                            </div>
                            {id.length >= 0 && (
                                <>
                                    <Message className={`${salesIsId ? "success" : "error"}`}>
                                        {salesIdMessage}
                                    </Message>
                                </>
                            )}
                            <Input
                                label="비밀번호"
                                type="password"
                                height="44px"
                                _onChange={pwCheck}
                                _onBlur={pwBlankCheck}
                                borderColor={
                                    pw.length > 0 && (
                                        salesIsPw ? "#21BF48" : "#EB5757"
                                    )
                                } />
                            {pw.length >= 0 && (
                                <>
                                    <Message className={`${salesIsPw ? "success" : "error"}`}>
                                        {salesPwMessage}
                                    </Message>
                                </>
                            )}
                            <Input
                                label="비밀번호 재확인"
                                type="password"
                                height="44px"
                                _onChange={isSamePw}
                                _onBlur={pw2BlankCheck}
                                borderColor={
                                    pw2.length > 0 && (
                                        salesIsPw2 ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {pw2.length >= 0 && (
                                <>
                                    <Message className={`${salesIsPw2 ? "success" : "error"}`}>
                                        {salesPw2Message}
                                    </Message>
                                </>
                            )}
                            <Input label="이름" height="44px" _onChange={(e) => setName(e.target.value)} _onBlur={nameBlankCheck} />
                            {name.length === 0 && (
                                <>
                                    <Message className={`${salesIsName ? "success" : "error"}`}>
                                        {salesNameMessage}
                                    </Message>
                                </>
                            )}
                            <Phone>
                                <div className='dropdown'>
                                    <Input defaultValue={phoneData1} label="휴대전화 번호" height="44px" _onBlur={phoneBlankCheck} />
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
                                <Input height="44px" _onChange={(e) => setPhoneData2(e.target.value)} _onBlur={phoneBlankCheck} />
                                <Input height="44px" _onChange={(e) => setPhoneData3(e.target.value)} _onBlur={phoneBlankCheck} />
                            </Phone>
                            {phoneData.length === 0 && (
                                <>
                                    <Message className={`${salesIsPhone ? "success" : "error"}`} >
                                        {salesPhoneMessage}
                                    </Message>
                                </>
                            )}
                            <Input
                                label="이메일"
                                height="44px"
                                _onChange={emailCheck}
                                _onBlur={emailBlankCheck}
                                borderColor={
                                    email.length > 0 && (
                                        salesIsEmail ? "#21BF48" : "#EB5757"
                                    )
                                }
                            />
                            {email.length >= 0 && (
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
                                    _onChange={binCheck}
                                    _onBlur={binBlankCheck}
                                    borderColor={
                                        bin.length > 0 && (
                                            salesIsBin ? "#21BF48" : "#EB5757"
                                        )
                                    }
                                />
                                <Button
                                    height="44px"
                                    align="end"
                                    width="122px"
                                >인증</Button>
                            </div>
                            {bin.length >= 0 && (
                                <>
                                    <Message className={`${salesIsBin ? "success" : "error"}`}>
                                        {salesBinMessage}
                                    </Message>
                                </>
                            )}
                            <Input
                                label="스토어 이름"
                                height="44px"
                                _onChange={storeNameCheck}
                                _onBlur={storeNameBlankCheck}
                            />
                            {storeName.length === 0 && (
                                <>
                                    <Message className={`${salesIsStoreName ? "success" : "error"}`} >
                                        {salesStoreNameMessage}
                                    </Message>
                                </>
                            )}
                        </li>
                    </ul>
                }
            </SignUpForm>
            <label className='checkbox-label'>
                <input type="checkbox" />
                <p>호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.</p>
            </label>
            {tab === 0 ?
                <Button width="380px" height="50px" margin="0px 0px 100px" font_size="17px" _disabled={buttoncheck()} >가입하기</Button>
                :
                <Button width="380px" height="50px" margin="0px 0px 100px" font_size="17px" _disabled={buttoncheck()}>가입하기</Button>
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
`

const SignUpForm = styled.div`
  width: 440px;
  box-sizing: border-box;
  border: 1px solid #C4C4C4;
  border-top: none;
  .normal-form_wrap{
        padding: 40px 35px 36px;
        width: 100%;
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
  margin-top: 10px;
  color: ${(props) => (props.className === "success" ? "#21BF48" : "#EB5757;")}
`

const Logo = styled.img`

`

export default SignUp