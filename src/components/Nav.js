import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

// elements
import Button from "../elements/Button";
import Input from "../elements/Input";

// assets
import Hodu from "../assets/images/Nav-hodu.png";
import UserIcon from "../assets/images/icon-user.svg";
import Cart from "../assets/images/icon-shopping-cart.svg";

function Nav(props) {
    const { seller_nav, user_nav } = props
    if (seller_nav) {
        return (
            <SellerNavigation>
                <div>
                    <img style={{ width: "80px", height: "24px" }} src={Hodu} alt="Logo" />
                </div>
                <h1>판매자 센터</h1>
            </SellerNavigation>
        )
    }
    if (user_nav) {
        return (
            <Navigation>
                <div>
                    <h1>
                        <img src={Hodu} alt="Logo" />
                    </h1>
                    <Input nav_input placeholder="상품을 검색해보세요!" />
                </div>
                <div>
                    <Link to="/login">
                        <img src={Cart} alt="mypage-button" />
                        <p>장바구니</p>
                    </Link>
                    <Link to="/login">
                        <img src={UserIcon} alt="mypage-button" />
                        <p>마이페이지</p>
                    </Link>
                </div>
            </Navigation>
        )
    }
    return (
        <Navigation>
            <div>
                <h1>
                    <img src={Hodu} alt="Logo" />
                </h1>
                <Input nav_input placeholder="상품을 검색해보세요!" />
            </div>
            <div>
                <Link to="/login">
                    <img src={UserIcon} alt="mypage-button" />
                    <p>마이페이지</p>
                </Link>
                <Button seller_nav_button>판매자센터</Button>
            </div>
        </Navigation>
    )
}

const Navigation = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 320px;
  box-shadow: 0px 4px 5px 0px #0000001A;
;
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    margin-right: 30px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
    img {
        width: 32px;
    }
  }
    p {
      font-size: 12px;
      color: #767676;
    }
`

const SellerNavigation = styled.nav`
    width: 100%;
    height: 90px;
    box-shadow: 0px 4px 5px 0px #0000001A;
    padding: 26px 100px;
    display: flex;
    align-items: center;
    flex-direction: row;
    img {
        margin-right: 16px;
    }
    h1 {
        font-size: 30px;
        font-weight: 500;
        line-height: 37.56px;
    }
`

export default Nav