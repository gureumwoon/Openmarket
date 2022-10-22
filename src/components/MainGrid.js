import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { api, apis } from '../shared/api';

function MainGrid(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.products)
    console.log(product)

    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const target = useRef(null)

    useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(handleInterSect, {
                threshold: 0.4,
            });
            observer.observe(target.current) // 타겟 엘리먼트 지정
        }
        return () => observer && observer.disconnect();
    }, [target])

    const getData = async () => {
        const response = await api.get(`/products/?page=${page}`)
        setList(prev => [...prev, ...response.data.results]); //리스트 추가
    }

    const handleInterSect = ([entry], observer) => {
        if (entry.isIntersecting && !isLoading) {
            observer.unobserve(entry.target);
            setPage(prev => prev + 1) // 페이지 값 증가
            setIsLoading(true);
            // dispatch(getProductDB())
            setIsLoading(false);
            observer.observe(entry.target)
        }
    }

    return (
        <Container>
            {
                product.map((p, i) => {
                    const lastTarget = i === product.length - 9
                    return (
                        <div
                            key={i}
                            ref={lastTarget ? target : null}
                        >
                            <img src={p.image} alt="" onClick={() => navigate(`/detail/${p.product_id}`)} />
                            <p className='product-name'>{p.seller_store}</p>
                            <p className='product'>{p.product_name}</p>
                            <span className='product-price'>{p.price}</span>
                            <span>원</span>
                        </div>
                    )
                })
            }
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