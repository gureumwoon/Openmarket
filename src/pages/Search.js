import queryString from 'query-string'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav'

function Search() {
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")
    // const { search } = useLocation();
    // const values = queryString.parse(search)
    // console.log(values)
    return (
        <div>
            {userType === "SELLER" ?
                <Nav />
                :
                <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            }
        </div>
    )
}

export default Search