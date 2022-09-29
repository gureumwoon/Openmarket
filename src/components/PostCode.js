import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from "styled-components";

const PostCodeModal = (props) => {
    const { onComplete } = props;



    const handleSearch = (data) => {
        console.log(data)
    }

    return (
        <>
            <DaumPostcode
                onComplete={onComplete}
                onSearch={handleSearch}
                autoClose
            />
        </>
    )
}

PostCodeModal.defaultProps = {
    style: {
        width: "700px",
        height: "450px",
    },
};

export default PostCodeModal