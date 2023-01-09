import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import SearchGrid from '../components/SearchGrid'
import { apis } from '../shared/api'

function Search() {
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")
    const location = useLocation();
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        apis.searchProduct(page, location.state.search)
            .then((res) => {
                if (page < Math.ceil(res.data.count / 15)) {
                    setPage((p) => p + 1)
                    setList((p) => p.concat(res.data.results))
                }
                const filterList = list.filter((p) => p.product_name.toLocaleLowerCase().includes(location.state.search.toLocaleLowerCase()))
                setSearchList(filterList)
            })
            .catch((error) => {
                console.log("서치에러", error)
            })
    }, [location.state.search, page])

    return (
        <div>
            {userType === "SELLER" ?
                <Nav />
                :
                <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            }
            <SearchGrid searchList={searchList} />
        </div>
    )
}

export default Search