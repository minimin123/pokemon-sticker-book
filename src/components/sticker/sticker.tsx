import styled from '@emotion/styled';
import QR from 'qrcode.react';

export default function Sticker({ id, name, image }) {
  return (
    <Flip>
      <div className="card">
        <section className="front">
          <div className="label">
            <span className="name">
              <span className="id">{id}</span>
              {name.toUpperCase()}
            </span>
          </div>
          <img src={image} alt={name} />
          <p>@Pokemon</p>
        </section>
        <section className="back">
          <img
            src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
            alt="pokemon logo"
          />
          <QR
            value={`https://www.pokemonkorea.co.kr/pokedex?snumber=${id}&snumber2=${id}`}
            size={140}
            id="qr-gen"
            includeMargin={false}
            imageSettings={{
              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png',
              width: 40,
              height: 40,
              x: 100,
              y: 100,
              excavate: false,
            }}
          />
          <p>
            visit the official website <br />
            to see more information
          </p>
        </section>
      </div>
    </Flip>
  );
}

const Flip = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  perspective: 1980px;
  font-family: 'Montserrat';

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
    background-color: white;
    border: 2px solid black;
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
    @media all and (max-width: 400px) {
      padding: 25px;
    }
    .label {
      font-size: 26px;
      @media all and (max-width: 400px) {
        font-size: 16px;
      }

      .name {
        background-color: white;
        padding-right: 25px;
        border: 2px solid black;
        border-radius: 20px;
        font-weight: bold;
        user-select: none;
        @media all and (max-width: 400px) {
          padding-right: 15px;
        }

        .id {
          background-color: black;
          color: white;
          margin-right: 20px;
          padding: 0 25px;
          border-radius: 15px;
          @media all and (max-width: 400px) {
            margin-right: 15px;
          }
        }
      }
    }

    img {
      width: 300px;
      height: 300px;
      margin: 0 auto;
      padding-top: 20px;

      @media all and (max-width: 400px) {
        width: 200px;
        height: 200px;
      }
    }

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
