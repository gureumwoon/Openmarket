import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { children, width, height, bg, margin, padding, font_size, _disabled, _onClick, align } = props;
    const styles = { width, height, margin, padding, font_size, bg, align };
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
    ${(props) => props.margin ? `margin:${props.margin};` : ""}
    ${(props) => props.padding ? `padding:${props.margin};` : ""}
    align-self: ${(props) => props.align};
`

export default Button;