import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 400px;
  height: 500px;
  background-color: white;
  border: 2px solid black;
  font-family: 'Montserrat';
  margin: 0 auto;

  @media all and (max-width: 400px) {
    width: 300px;
    height: 375px;
    padding: 25px;
  }

  .title {
    font-size: 26px;
    font-weight: bold;
    color: red;
    @media all and (max-width: 400px) {
      font-size: 16px;
    }
  }

  .message {
    margin-top: 10px;
    height: 60px;
    @media all and (max-width: 400px) {
      font-size: 14px;
    }
  }

  img {
    width: 300px;
    height: 300px;
    margin: 0 auto;

    @media all and (max-width: 400px) {
      width: 200px;
      height: 200px;
    }
  }
`;
