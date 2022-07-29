import React from 'react'
import styled from "styled-components";

//components
import Nav from '../components/Nav'
import Button from '../elements/Button';
import Input from '../elements/Input';

//assets
import UploadIcon from "../assets/images/icon-img.svg";
import UploadBg from "../assets/images/product-basic-img.png";

function Upload() {
    return (
        <div>
            <Nav seller_nav />
            <MainSection>
                <h1>상품등록</h1>
                <div className='section-container'>
                    <SectionOne>
                        <p className='caution-sentence'>*상품 등록 주의사항</p>
                        <div className='caution-contents'>
                            <p>- 너무 귀여운 사진은 심장이 아파올 수 있습니다.</p>
                            <p>- 유소년에게서 천자만홍이 피고 이상이 온갖 들
                                어 약동하다. 이상의 가지에 사랑의 있는가? 주며,
                                끓는 힘차게 얼음이 얼음 가치를 황금시대의 있음
                                으로써 사라지지 것이다. 이 뜨거운지라, 이상의
                                속에서 이것은 피가 보배를 황금시대의 싹이 사막
                                이다.
                            </p>
                            <p>- 자신과 우는 옷을 지혜는 아니다. 더운지라 설레
                                는 기쁘며, 위하여서, 평화스러운 광야에서 그리하
                                였는가? 소담스러운 위하여 인도하겠다는 어디 무
                                엇을 이상을 같지 따뜻한 청춘 칼이다.
                            </p>
                            <p>
                                - 가치를 그들을 예수는 찬미를 가슴이 과실이 이
                                것이다. 희망의 것이다. 보라, 풍부하게 이것은 황
                                금시대를 얼마나 인간에 돋고, 이것이다.
                            </p>
                        </div>
                    </SectionOne>
                    <SectionTwo>
                        <div className='top-container'>
                            <div style={{ position: "relative", marginRight: "40px" }}>
                                <p style={{ color: "#767676", marginBottom: "10px", lineHeight: "20.03px" }}>상품 이미지</p>
                                <img src={UploadBg} alt="" />
                                <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                                    <input id="file-input" type="file" style={{ display: "none" }} />
                                    <img src={UploadIcon} alt="" style={{ position: "absolute", top: "202px", left: "202px" }} />
                                </label>
                            </div>
                            <div style={{ width: "826px", marginTop: "-20px" }}>
                                <Input height="54px" label="상품명" placeholder="13/20" text_align="end" color="#c4c4c4" font_size="14px" />
                                <Input upload_input label="판매가" children="원" />
                                <p style={{ margin: "16px 0 10px 0", color: "#767676" }}>배송방법</p>
                                <Button width="220px" height="54px" margin="0 10px 0 0">택배,소포,등기</Button>
                                <Button width="220px" height="54px" bg="#FFFF" color="#767676" border="1px solid #c4c4c4" hover_color="black" hover_border="1px solid #767676">직접배송(화물배달)</Button>
                                <Input upload_input label="기본 배송비" children="원" />
                                <Input upload_input label="재고" children="개" />
                            </div>
                        </div>
                        <div className='bottom-container'>
                            <p className='product-detail'>상품 상세정보</p>
                            <div className="editor-section" >
                                <p>에디터영역</p>
                            </div>
                        </div>
                    </SectionTwo>
                </div>
            </MainSection >
        </div >
    )
}

const MainSection = styled.div`
    padding: 38px 100px 96px;
    h1 {
        font-size:36px;
    }
    .section-container {
        display: flex;
    }
`
const SectionOne = styled.div`
    margin-right: 80px;
    .caution-sentence {
        color:#EB5757;
        margin-bottom: 10px;
    }
    .caution-contents {
        width: 320px;
        padding: 20px 20px 5px 20px;
        background-color: #FFEFE8;
        display:flex;
        flex-direction: column;
        p {
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 15px;
        }
    }
`

const SectionTwo = styled.div`
    .top-container {
        display: flex;
    }
    .bottom-container {
        .product-detail {
            margin:40px 0 10px 0;
            color: #767676;
        }
        .editor-section {
            width: 100%;
            height: 700px;
            background-color: #F2F2F2;;
            border: 1px solid #C4C4C4;
            p {
                font-size: 48px;
                color: #c4c4c4;
                text-align: center;
                margin-top: 350px;
            }
        }
    }
`

export default Upload