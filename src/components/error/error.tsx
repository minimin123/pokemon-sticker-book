import styled from '@emotion/styled';

export default function ErrorComponent() {
  return (
    <Wrapper>
      <div className="title">ERROR</div>
      <div className="message">
        Please check Pokemon ID <br />
        or name again
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png"
        alt="error"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 400px;
  height: 500px;
  background-color: white;
  border: 2px solid black;
  font-family: 'Montserrat';

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
