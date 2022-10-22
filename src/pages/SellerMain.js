import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDB, getProductDB2 } from '../redux/modules/product'

// components
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import MainGrid from '../components/MainGrid'


function SellerMain() {
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")
    const dispatch = useDispatch();
    const mainItem = useSelector((state) => state.product.products)
    console.log("메인", mainItem)

    const [isLoading, setIsLoading] = useState(false);
    const [target, setTarget] = useState("");

    const handleInterSect = ([entry], observer) => {
        if (entry.isIntersecting && !isLoading) {
            observer.unobserve(entry.target);
            setIsLoading(true);
            dispatch(getProductDB())
            setIsLoading(false);
            observer.observe(entry.target)
        }
    }


    useEffect(() => {
        dispatch(getProductDB())
        dispatch(getProductDB2())
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
            {/* {!isLoading && <div ref={setTarget}></div>} */}
            <Footer />
        </div>
    )
}

export default SellerMain