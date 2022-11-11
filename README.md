# 🛒 Open Market (호두마켓)

오픈마켓 서비스는 판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 서비스입니다.

상품을 판매하려고 한다면 판매자로 로그인하여 상품 정보를 등록 및 수정할 수 있습니다. 판매자가 상품을 구매하는 것은 불가능합니다. 오픈마켓에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣어, 상품을 구매할 수 있습니다.

***

## ⚙️ 기술 스택

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Thunk-764ABC?style=for-the-badge&logo=Thunk&logoColor=white">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">

***

## 💡 주요기능

메인페이지(무한스크롤)

### 구매자
- 로그인 페이지
- 회원 가입 페이지
- 상품 목록 페이지
- 상품 상세 페이지
- 장바구니 페이지
- 주문/결제 페이지
  
### 판매자
- 로그인 페이지
- 회원 가입 페이지
- 상품 목록 페이지
- 상품 상세 페이지
- 판매자 센터 페이지
- 상품 등록 페이지
- 상품 삭제 & 수정
  
## 회원가입

<div align="center">
  <table>
    <tr>
      <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/197980825-33c174b0-b77b-4a4e-941c-4d66064d9034.gif"
            width="500px;"
            alt=""
          /><br/><sub><b>구매자 회원가입</b></sub><br />
      </td>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198013665-a0685b69-4f35-4f68-8e54-3dc647a627d4.gif"
            width="500px;"
            alt=""
          /><br /><sub><b>판매자 회원가입</b></sub><br />
      </td>
    </tr>
  </table>
</div>

- 칸에 정보를 입력하지 않고 넘어가려고 하면 '필수 정보입니다'라는 문구가 칸 아래에 붉은 글씨로 나타난다.(칸의 테두리 컬러도 붉은색으로 바뀐다.)
- 아이디는 String이어야 하고 다른 조건은 없다. 입력을 마치고 중복확인을 해서 검증을 받아서 중복 아이디가 아닌 경우에 회원가입이 가능하다. 
중복아이디일 경우 '이미 사용 중인 아이디입니다.'라는 경고문구가 나타나고 중복아이디가 아닐 경우 '멋진 아이디네요 :)'라는 문구가 나타난다.
아디이 중복확인을 하지 않고 회원가입 버튼을 누르면 '아이디 중복확인을 해주세요'라는 문구가 띄워진 alert창이 나타난다.
- 비밀번호는 8자 이상, 한개 이상의 영소문자가 필수적으로 들어가야 하고, 최소 한개의 숫자,최소 한개의 특수 문자한개 이상의 숫자가 필수적으로 들어가야 합니다. 조건에 맞는 비밀번호를 입력하면 칸 안에 있는 체크아이콘과 칸의 테두리가 초록색으로 변한다. 조건에 맞지 않으면,'8자 이상, 영문 대 소문자,숫자,특수문자를 사용하세요.'라는 경고 문구가 나타난다.
- 비밀번호 재확인 칸은 위의 비밀번호와 일치하지 않으면, '비밀번호가 일치하지 않습니다'라는 경고 문구가 나타나고 일치하면, '비밀번호가 일치합니다' 문구로 바뀌고 비밀번호 입력칸과 마찬가지로 체크아이콘도 회색에서 초록색으로 바뀐다.
- 이름칸은 따로 조건은 없고 빈칸일 경우 '다른 칸들과 마찬가지로 필수 정보입니다. 경고 문구가 나타난다.
- 휴대전화의 첫번 째 칸은 화살표 아이콘을 클릭하면 드롭다운이 되고 거기서 휴대전화의 앞자리를 선택한다. 선택하고 나면 드롭다운박스가 올라가고 칸 안에 선택한 값이 들어와있다. 번호를 다 입력하고 만약 가입한 적이 있는 핸드폰 번호면 '해당 사용자 전화번호는 이미 존재합니다.'라는 경고문구가 뜨고 사용 가능한 번호면 경고문구가 사라진다.
- 이메일 칸은 이메일 형식이 아닐경우 '잘못된 이메일 형식입니다.'라는 경고 문구가 나타나고 맞게 입력하면 '올바른 이메일 형식 입니다' 문구로 바뀐다.
- 판매자 회원가입의 사업자등록번호는 10자리로 이루어진 숫자여야 한다. 조건에 맞게 입력하면, '올바른 형식 입니다' 문구가 나타나고, 중복확인을 거쳐야 한다. 사용 가능한 사업자등록번호면 '사용 가능한 사업자등록번호입니다.'문구가 뜨고 중복된 사업자등록번호면 '이미 등록된 사업자등록번호입니다.' 경고 문구가 뜬다. 만약 사업자등록번호 중복확인을 하지 않고 회원가입 버튼을 누르면 '사업자등록번호를 인증해주세요.' 문구의 alert창이 뜬다.
- 스토어 이름은 중복됐을 경우 '해당 스토어이름은 이미 존재합니다.'라는 경고문구가 나타나고, 사용 가능한 스토어 이름이면 '사용 가능한 스토어 이름 입니다.'라는 문구가 나타납니다.
  
- 모든 칸에 정보를 다 입력했어도 이용약관 동의 부분을 체크하지 않으면 회원가입 버튼이 활성화 되지 않는다. 또한 동의 부분을 체크 했더라도 위의 정보입력 칸이 하나라도 비어있으면 버튼이 비활성화 된다. 모든 정보가 입력되었고, 동의 부분도 체크가 완료되면 버튼이 활성화 된다.


 

## 로그인

<div align="center">
  <table>
    <tr>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198020802-2b5eba60-fad8-43d2-a40c-ec384fa30c83.gif"
            alt=""
          /><br /><sub><b>로그인</b></sub><br />
      </td>
    </tr>
  </table>
</div>

## 상품 상세 페이지 & 판매자 센터

<div align="center">
  <table>
    <tr>
      <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198120167-7a7b2c84-af3a-49a4-bedc-62dcabc728da.gif"
            width="500px;"
            alt=""
          /><br/><sub><b>상세페이지(판매자 계정)</b></sub><br />
      </td>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198873229-e5be1820-0a94-4529-a887-90cd37558914.gif"
            width="500px;"
            alt=""
          /><br /><sub><b>상세페이지(구매자 계정)</b></sub><br />
      </td>
    </tr>
  </table>
</div>

## 상품등록

<div align="center">
  <table>
    <tr>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198225388-a1610c99-4b05-41ba-95ae-0993e121aa68.gif"
            alt=""
          /><br /><sub><b>상품등록(판매자 계정)</b></sub><br />
      </td>
    </tr>
  </table>
</div>

## 상품 삭제 & 수정

<div align="center">
  <table>
    <tr>
      <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198221567-b2ad536b-dc93-4878-9073-b878d5a3805c.gif"
            width="500px;"
            alt=""
          /><br/><sub><b>상품삭제</b></sub><br />
      </td>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198241667-6b63c788-467e-417f-b4a7-640a5679fb51.gif"
            width="500px;"
            alt=""
          /><br /><sub><b>상품수정</b></sub><br />
      </td>
    </tr>
  </table>
</div>

## 장바구니 기능

- ### 상세페이지

<div align="center">
  <table>
    <tr>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/198882086-dd0a812f-245a-4b44-a4b3-d97dc722510b.gif"
            alt=""
          /><br /><sub><b>상세페이지(장바구니기능)</b></sub><br />
      </td>
    </tr>
  </table>
</div>

- ### 장바구니페이지

<div align="center">
  <table>
    <tr>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/200166107-eb093cc1-f26c-4ad4-bbbc-e1f3ef71bb53.gif"
            alt=""
          /><br /><sub><b>장바구니페이지</b></sub><br />
      </td>
    </tr>
  </table>
</div>

- ### 구매하기

구매페이지로의 이동 방법 3가지
1. 상세페이지에서 바로구매
   
<div align="center">
  <table>
    <tr>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/200167918-416712aa-a7d2-4963-8caa-91657dcb6f07.gif"
            alt=""
          />
      </td>
    </tr>
  </table>
</div>

2. 장바구니 페이지에서 구매
   
<div align="center">
  <table>
    <tr>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/200555013-a6e3eb9f-c64b-4cbd-b2ef-666cf26882fd.gif"
            alt=""
          />
      </td>
    </tr>
  </table>
</div>   

3. 장바구니 페이지에서 개별구매

<div align="center">
  <table>
    <tr>
       <td align="center">
          <img
            src="https://user-images.githubusercontent.com/83581867/201094671-8e9af93a-5d09-4605-97ed-b6cac27ad929.gif"
            alt=""
          />
      </td>
    </tr>
  </table>
</div>







