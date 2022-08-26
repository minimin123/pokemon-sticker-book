import styled from '@emotion/styled';
import { color } from '../../../styles/theme';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 400px;
  height: 500px;
  background-color: ${color.WHITE};
  border: 2px solid ${color.BLACK};
  margin: 0 auto;

  @media all and (max-width: 400px) {
    width: 300px;
    height: 375px;
    padding: 25px;
  }

  .title {
    font-size: 26px;
    font-weight: bold;
    color: ${color.RED};
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
`;
