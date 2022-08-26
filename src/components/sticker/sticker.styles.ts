import styled from '@emotion/styled';
import { color } from '../../../styles/theme';

export const Flip = styled.div`
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 500px;
  perspective: 1980px;

  @media all and (max-width: 400px) {
    width: 300px;
    height: 375px;
  }

  :hover {
    cursor: pointer;
  }

  :hover .card {
    transform: rotateY(180deg);
  }

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.4s;
    transform-style: preserve-3d;
    background-color: ${color.WHITE};
    border: 2px solid ${color.BLACK};
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-shadow: 7px 9px 24px 0px rgba(90, 89, 89, 0.24);
  }

  .front {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    overflow-x: hidden;
    @media all and (max-width: 400px) {
      padding: 25px;
    }

    .label {
      font-size: 26px;
      @media all and (max-width: 400px) {
        font-size: 16px;
      }

      .name {
        overflow: hidden;
        font-weight: bold;
        padding-right: 17px;
        border: 2px solid ${color.BLACK};
        border-radius: 20px;
        background-color: ${color.WHITE};
        user-select: none;

        @media all and (max-width: 400px) {
          padding-right: 15px;
        }

        .id {
          background-color: ${color.BLACK};
          color: ${color.WHITE};
          margin-right: 15px;
          padding: 0 20px;
          border-radius: 15px;
          @media all and (max-width: 400px) {
            margin-right: 15px;
          }
        }
      }
    }

    /* img {
      width: 300px;
      height: 300px;
      margin: 0 auto;
      padding-top: 20px;

      @media all and (max-width: 400px) {
        width: 200px;
        height: 200px;
      }
    } */

    p {
      font-size: 19px;
      text-align: right;
      font-weight: bold;
      @media all and (max-width: 400px) {
        font-size: 12px;
      }
    }
  }

  .back {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transform: rotateY(180deg);

    img {
      width: 250px;
      @media all and (max-width: 400px) {
        width: 150px;
      }
    }

    p {
      padding-top: 50px;
      font-weight: bold;
    }
  }
`;
