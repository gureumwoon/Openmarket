import React, { useEffect } from 'react'

// elements
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import MainGrid from '../components/MainGrid'
import { useDispatch, useSelector } from 'react-redux'
import { signInDB, userInfoDB } from '../redux/modules/user'

function SellerMain() {
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")
    const dispatch = useDispatch();

    return (
        <div>
            {userType === "SELLER" ?
                <Nav />
                :
                <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            }
            <Banner />
            <MainGrid />
            <Footer />
        </div>
    )
}

export default SellerMain