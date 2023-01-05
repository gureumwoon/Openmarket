import React from 'react'
import styled from 'styled-components'

function SearchGrid() {
    return (
        <Container>
            <div>
                <img src="" alt="" />
                <p></p>
                <p></p>
                <span></span>
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
`
export default SearchGrid