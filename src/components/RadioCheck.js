import React from 'react'
import styled from "styled-components";

function RadioCheck(props) {
    const { width, margin, name } = props
    const styles = { width, margin }
    return (
        <Radio {...styles}>
            <input type="radio" name={name} />
        </Radio>
    )
}

const Radio = styled.div`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    input[type='radio'] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:2px solid #21BF48 ;
    position: relative;
    &:checked::after {
        display: inline-block;
        content: "";
        width: 12px;
        height: 12px;
        background-color: #21BF48;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        right: 2px;
    }
}
`


export default RadioCheck