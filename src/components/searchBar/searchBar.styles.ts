import styled from '@emotion/styled';
import { color } from '../../../styles/theme';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 20px;

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
  }

  form {
    display: flex;
    justify-content: center;
    margin: 30px;

    input {
      width: 240px;
      height: 50px;
      border: 2px solid ${color.BLACK};
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 20px;
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
      background-color: ${color.BLACK};
      color: ${color.WHITE};
      cursor: pointer;
      font-size: 18px;
    }
  }
`;
