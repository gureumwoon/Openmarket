import React from 'react'
import Nav from '../components/Nav'

function Search() {
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")

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