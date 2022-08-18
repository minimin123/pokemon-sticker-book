/* eslint-disable no-use-before-define */
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from '@emotion/styled';

export default function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleChangeInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!keyword) return;
    e.preventDefault();
    router.push(`${keyword}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChangeInput} autoFocus />
      <button type="submit">SEARCH</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  margin-bottom: 50px;

  input {
    width: 300px;
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
`;
