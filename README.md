# POKEMON STICKER BOOK
### 포켓몬 번호와 이름을 검색하고 스티커처럼 모을수 있는 웹페이지
<img src ='https://user-images.githubusercontent.com/97211582/185539087-ad6bb5cf-eead-4cf7-abed-da8f0ae53dd6.gif' width=50%>

#### 프로젝트 기간 : 2022.08.17 ~ 2022.08.19
#### URL : https://pokemon-sticker-book-minimin123.vercel.app/

### Getting Started

```bash
yarn install
yarn dev
```
-----------------------
## Description
POKEMON STICKER BOOK은 포켓몬의 번호와 이름을 검색하고, 검색 결과를 스티커처럼 모을 수 있는 웹페이지 입니다. Next.js의 getServerSideProps를 이용한 서버사이드 렌더링 구현을 목표로 제작하였습니다.


### 1. 기술스택 및 사용한 라이브러리
 
 - Next.js
 - Typescript
 - React
 - React-Query 
 - Axios
 - Qrcode.react
 - Emotion
 - EsLint, Prettier
 

### 2. 기능 목록

|기능|구현|
|---|---|
|비동기 통신|axios, react-query|
|데이터 저장|local storage|
|QR코드 생성|qrcode.react 라이브러리|


### 3. 상세 기능
#### 1) 포켓몬 번호로 포켓몬 스티커를 검색할 수 있습니다.
- axios와 react-query를 통한 비동기통신으로 입력한 포켓몬의 데이터를 조회합니다.
- 스티커를 Hover 시, 뒷면의 QR코드가 나타납니다. QR코드는 qrcode.react 라이브러리를 통하여 구현하였습니다. 
- loading시에는 skeleton UI가 표시되고, api 통신 실패 시 에러메시지 카드를 표시합니다. 
- 포켓몬 번호와 이름은 있으나 이미지 데이터가 없을 경우, 기본이미지를 표시하되 QR코드 조회를 통해 더 많은 정보를 확인하도록 메시지를 표시하였습니다.

#### 2) 조회한 스티커 목록을 collection 페이지에서 확인할 수 있습니다.
 - 각각의 스티커는 local storage에 데이터가 저장됩니다.
 
#### 3) 각각의 스티커 페이지들은 서버사이드 렌더링 됩니다. 
 - 각 스티커 페이지는 Next.js의 getServerSideProps를 이용한 서버사이드 렌더링을 통하여 구현했습니다.
 - 메타 태그 적용하여 페이지 공유 시 미리보기 지원됩니다. <br><img src='https://user-images.githubusercontent.com/97211582/185539065-8ef76308-2a16-4d96-bdaf-0948c8f8f263.gif' width=50%>
 
 


-----------------------

