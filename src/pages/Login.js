import React, { useState } from 'react'
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Tab from "../elements/Tab";

// assets
import Hodu from "../assets/images/Logo-hodu15.png";

function Login() {
    const [tab, setTab] = useState(0)
    return (
        <LoginSection>
            <h1>
                <img src={Hodu} alt="" />
            </h1>
            <Tab tab={tab} setTab={setTab} />
            <LoginForm>
                {tab === 0 &&
                    <ul>

                    </ul>
                }
            </LoginForm>
        </LoginSection>
    )
}

const LoginSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoginForm = styled.div`
  width: 440px;
  box-sizing: border-box;
  border: 1px solid #C4C4C4;
  border-top: none;
`

export default Login