import styled from '@emotion/styled';
import { color } from '../../../styles/theme';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: 0 auto;
  width: 400px;
  height: 500px;
  background-color: ${color.WHITE};
  border: 2px solid ${color.BLACK};

  @media all and (max-width: 400px) {
    width: 300px;
    height: 375px;
    padding: 25px;
  }

  @keyframes shine {
    to {
      background-position: 100px;
    }
  }

  .name {
    width: 240px;
    height: 35px;
    background-color: ${color.LIGHTGRAY};
    margin-bottom: 60px;
    border-radius: 50px;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(lightgrey 15px, transparent 0);
    background-position: 0px;
    animation: shine 1s infinite;

    @media all and (max-width: 400px) {
      width: 160px;
      height: 24px;
    }
  }

  .contents {
    width: 270px;
    height: 270px;
    margin: 0 auto;
    background-color: ${color.LIGHTGRAY};
    border-radius: 50%;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255, 0) 70%
    );
    background-position: 0px;
    animation: shine 1s infinite;

    @media all and (max-width: 400px) {
      width: 200px;
      height: 200px;
    }
  }
`;
