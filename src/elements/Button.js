import React from "react";
import styled from "styled-components";

// elements
import ShoppingIcon from "../assets/images/icon-shopping-bag.svg";

const Button = (props) => {
    const { children, width, height, bg, margin, padding, font_size, font_weight, _disabled, _onClick, align, seller_nav_button } = props;
    const styles = { width, height, margin, padding, font_size, font_weight, bg, align };
    if (seller_nav_button) {
        return (
            <Btn {...styles} onClick={_onClick}>
                <img src={ShoppingIcon} alt="shopping-bag_icon" />
                {children}
            </Btn>
        )
    }
    return (
        <Btn {...styles} disabled={_disabled} onClick={_onClick}>{children}</Btn>
    )
}

Button.defaultProps = {
    children: null,
    width: "100%",
    margin: false,
    padding: false,
    _disabled: false,
    _onClick: () => { },
};

const Btn = styled.button`
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.disabled ? "#c4c4c4" : "#21BF48"};
    color:${(props) => props.color || "white"};
    border-radius: 5px;
    border: none;
    font-size: ${(props) => props.font_size};
    font-weight: ${(props) => props.font_weight};
    ${(props) => props.margin ? `margin:${props.margin};` : ""}
    ${(props) => props.padding ? `padding:${props.margin};` : ""}
    align-self: ${(props) => props.align};
`

export default Button;