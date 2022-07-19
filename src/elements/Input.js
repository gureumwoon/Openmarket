import React from 'react'
import styled from "styled-components";

// assets
import Search from "../assets/images/search.svg";

function Input(props) {
    const { label, type, placeholder, defaultValue, _onChange, _onBlur, border, radius, borderBottom, borderColor, borderBottomColor, margin, width, height, padding, is_flex, nav_input } = props;
    const styles = { width, height, border, radius, borderBottom, borderColor, borderBottomColor, margin, padding, is_flex }
    if (nav_input) {
        return (
            <NavInputContainer>
                <NavInputField
                    type={type}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={_onChange}
                    onBlur={_onBlur}
                    {...styles}
                />
                <img className="search" src={Search} alt="search-icon" />
            </NavInputContainer>
        )
    }
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
     border: ${(props) => props.border};
     border-bottom: ${(props) => props.borderBottom};
     margin: ${(props) => props.margin};
     padding: ${(props) => props.padding || "17px"};
     box-sizing: border-box;
     border-radius: ${(props) => props.radius || "5px"};
     font-size: 16px;
     ${(props) => props.is_flex ? `display: flex; flex-direction: row-reverse; justify-content: center; align-items: center;` : ""}
     &:focus {
        outline: none;
        border: 1px solid ${(props) => props.borderColor || "#21BF48"};
        border-bottom: 1px solid ${(props) => props.borderBottomColor || "#21BF48"};
     }
`

const NavInputContainer = styled.div`
    position: relative;
    width: 400px;
    .search {
        position: absolute;
        top: 10px;
        right: 20px;
    }
`

const NavInputField = styled.input`
    width: 400px;
    height: 46px;
    border: 2px solid #21BF48;
    border-radius: 50px;
    padding: 13px 22px;
    font-size: 16px;
    line-height: 20.03px;
    &:focus {
        outline: none;
    }
`

export default Input