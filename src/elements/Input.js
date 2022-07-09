import React from 'react'
import styled from "styled-components";

function Input(props) {
    const { label, type, placeholder, defaultValue, _onChange, _onBlur, borderColor, margin, width, height, padding, is_flex } = props;
    const styles = { width, height, borderColor, margin, padding, is_flex }
    return (
        <label>
            <LabelText>{label}</LabelText>
            <InputField
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={_onChange}
                onBlur={_onBlur}
                {...styles}
            />
        </label>
    )
}

Input.defaultProps = {
    border: "1px solid #c4c4c4",
    type: "text",
    is_flex: false,
    _onChange: () => { },
    _onBlur: () => { }
}

const LabelText = styled.p`
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    margin-top: 16px;
    color: #767676
`

const InputField = styled.input`
     width: ${(props) => props.width || "100%"};
     height: ${(props) => props.height || "54px"};
     border: 1px solid #c4c4c4;
     margin: ${(props) => props.margin};
     padding: 17px;
     box-sizing: border-box;
     border-radius: 5px;
     font-size: 16px;
     ${(props) => props.is_flex ? `display: flex; flex-direction: row-reverse; justify-content: center; align-items: center;` : ""}
     &:focus {
        outline: none;
        border: 1px solid ${(props) => props.borderColor || "#21BF48"};
     }
`

export default Input