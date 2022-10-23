import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { api } from '../shared/api';

function MainGrid() {
    const navigate = useNavigate()
    const product = useSelector((state) => state.product.products)
    console.log("상품", product)

    const [page, setPage] = useState(1)
    console.log("페이지", page)
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const [moreData, setMoreData] = useState(true)
    const target = useRef(null)
    console.log("리스트", list)

    const handleInterSect = async ([entry], observer) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            await getData(page)
            // setPage((prev) => prev + 1)  // 페이지 값 증가
            observer.observe(entry.target)
        }
        return;
    }

    const getData = async (page) => {
        console.log("페이지2", page)
        await api.get(`/products/?page=${page}`).then((res) => {
            console.log("페치데이터", `/products/?page=${page}`)
            setList((prev) => prev.concat(res.data.results))//리스트 추가
            setMoreData(res.data.results.length >= 15)
            if (moreData) {
                setPage((prev) => prev + 1)  // 페이지 값 증가
            }
        })
    }

    // useEffect(() => {
    //     getData()
    // }, [page])

    useEffect(() => {
        let observer;
        if (target.current && moreData) {
            observer = new IntersectionObserver(handleInterSect, {
                threshold: 0.6,
            });
            observer.observe(target.current) // 타겟 엘리먼트 지정
        }
        return () => observer && observer.disconnect();
    }, [target])

    return (
        <Container>
            {
                list.map((p, i) => {
                    return <div key={i}>
                        <img src={p.image} alt="" onClick={() => navigate(`/detail/${p.product_id}`)} />
                        <p className='product-name'>{p.seller_store}</p>
                        <p className='product'>{p.product_name}</p>
                        <span className='product-price'>{p.price}</span>
                        <span>원</span>
                    </div>
                })
            }
            <div ref={target}></div>
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