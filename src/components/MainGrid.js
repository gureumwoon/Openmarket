import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import useInfiniteScroll from '../hooks/use-infinitescroll';
import { api } from '../shared/api';

function MainGrid() {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [moreData, setMoreData] = useState(true)

    const getData = async () => {
        await api.get(`/products/?page=${page}`).then((res) => {
            setList((prev) => prev.concat(res.data.results))//리스트 추가
            setPage((prev) => prev + 1);
        }).catch((error) => {
            setMoreData(false)
            return;
        })
    }

    const target = useInfiniteScroll(async (entry, observer) => {
        await getData()
    })

    return (
        <Container>
            {
                list.map((p, i) => {
                    return <div key={p.product_id}>
                        <img src={p.image} alt="" onClick={() => navigate(`/detail/${p.product_id}`)} />
                        <p className='product-name'>{p.seller_store}</p>
                        <p className='product'>{p.product_name}</p>
                        <span className='product-price'>{p.price.toLocaleString()}</span>
                        <span>원</span>
                    </div>
                })
            }
            {moreData ? <div ref={target}></div> : null}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:repeat(3,380px);
    justify-content: center;
    gap: 70px;
    padding: 80px 0 180px;
    @media screen and (max-width:1300px) {
    grid-template-columns:repeat(2,380px);
}
    @media screen and (max-width:932px) {
        grid-template-columns:repeat(1,380px);
    }
    div {
        cursor: pointer;
    }
    img {
        margin-bottom: 16px;
        width: 380px;
        height: 380px;
        border: 1px solid #C4C4C4;
        border-radius: 10px;
    }
    .product-name {
        font-size: 16px;
        color: #767676;
    }
    .product {
        font-size: 18px;
        margin: 10px 0;
    }
    .product-price {
        font-size: 24px;
        font-weight: bold;
    }
`

export default MainGrid