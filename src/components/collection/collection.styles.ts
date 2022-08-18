import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: relative;
  width: 945px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 400px;
  }
  @media (max-width: 300px) {
    width: 200px;
  }

  .collection {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 600px;
    background-color: white;
    padding: 50px;
    margin: 100px auto;
    border: 2px solid black;
    border-radius: 20px;
    z-index: 0;
    @media (max-width: 300px) {
      padding: 10px;
    }

    p {
      margin: 0 auto;
    }

    .sticker {
      width: 200px;
      margin: 40px;
      font-family: 'Montserrat';
      font-weight: bold;
      @media (max-width: 300px) {
        margin: 10px;
      }

      .id {
        padding: 3px 12px;
        background-color: black;
        color: white;
        border-radius: 10px;
        font-size: 12px;
      }

      .name {
        margin-top: 10px;
        text-align: center;
      }

      img {
        width: 150px;
        height: 150px;
      }
    }
  }

  .shadow {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 20px;
    z-index: -1;
  }
`;
