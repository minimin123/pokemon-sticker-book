import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 50px;

  button {
    background-color: transparent;
    border: none;
  }

  svg {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  h1 {
    font-size: 40px;
    text-align: center;
    font-family: 'Montserrat';
  }

  form {
    display: flex;
    justify-content: center;
    margin: 50px;

    input {
      width: 240px;
      height: 50px;
      border: 2px solid black;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 20px;
      font-family: 'Montserrat';
      :focus {
        outline: none;
      }

      @media all and (max-width: 400px) {
        width: 200px;
      }
    }

    button {
      width: 100px;
      border: none;
      background-color: black;
      color: white;
      cursor: pointer;
      font-size: 18px;
      font-family: 'Montserrat';
    }
  }
`;
