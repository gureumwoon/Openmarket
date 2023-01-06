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
                console.log(res)
                setList((p) => p.concat(res.data.results))
                if (page < Math.ceil(res.data.count / 15)) {
                    setPage((p) => p + 1)
                }
                const filterList = list.filter((p) => p.product_name.toLocaleLowerCase().includes(location.state.search.toLocaleLowerCase()))
                setSearchList(filterList)
            })
            .catch((error) => {
                console.log("서치에러", error)
            })
    }, [page])
    console.log(searchList)
    console.log(list)

    return (
        <div>
            {userType === "SELLER" ?
                <Nav />
                :
                <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            }
            {
                searchList.map((p) => {
                    return <SearchGrid {...p} />
                })
            }
        </div>
    )
}

export default Search