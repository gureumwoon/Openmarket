import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

// routes
import Login from '../pages/Login';

// elements
import Button from "./Button";
import Input from "./Input";

// assets
import Hodu from "../assets/images/Nav-hodu.png";
import UserIcon from "../assets/images/icon-user.svg";

function Nav() {
    return (
        <Navigation>
            <h1>
                <img src={Hodu} alt="Logo" />
            </h1>
            <Input nav_input />
            <Link to={Login}>
                <img src={UserIcon} alt="mypage-button" />
                <p>마이페이지</p>
            </Link>
            <Button seller_nav_button>판매자센터</Button>
        </Navigation>
    )
}

const Navigation = styled.nav`
  width: 100%;
  height: 90px;
`

export default Nav