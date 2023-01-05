import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import SearchGrid from '../components/SearchGrid'
import { apis } from '../shared/api'

function Search() {
    const navigate = useNavigate();
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")
    const location = useLocation();
    // const { search } = useLocation();
    // const values = queryString.parse(search)
    // console.log(values)
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    console.log(location.state.search)

    useEffect(() => {
        apis.searchProduct(page, location.state.search)
            .then((res) => {
                // const list = res.data.results
                setList((p) => p.concat(res.data.results))
                setPage((p) => p + 1)
                const filterList = list.filter((p) => p.product_name.toLocaleLowerCase().includes(location.state.search.toLocaleLowerCase()))
                setSearchList(filterList)
            })
            .catch((error) => {
                console.log("서치에러", error)
            })
    }, [])

    return (
        <div>
            {userType === "SELLER" ?
                <Nav />
                :
                <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            }
            <SearchGrid />
        </div>
    )
}

export default Search