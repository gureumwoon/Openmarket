import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDB } from '../redux/modules/product'

// components
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import MainGrid from '../components/MainGrid'


function SellerMain() {
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")
    const dispatch = useDispatch();
    const mainItem = useSelector((state) => state.product.productList)
    console.log("메인", mainItem)

    useEffect(() => {
        dispatch(getProductDB())
    }, [dispatch])

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