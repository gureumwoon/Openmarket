import React from 'react'
import styled from 'styled-components'

function SearchGrid(props) {
    return (
        <Container>
            <div>
                <img src={props.image} alt="" />
                <p className='product-name'>{props.store_name}</p>
                <p className='product'>{props.product_name}</p>
                <span className='product-price'>{props.price.toLocaleString()}</span>
                <span>원</span>
            </div>
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
export default SearchGrid