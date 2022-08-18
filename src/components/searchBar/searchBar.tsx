import { useRouter } from 'next/router';
import { useState } from 'react';

import { Header } from './searchBar.styles';
import CollectionIcon from '../../assets/collection.svg';

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
    <Header>
      <button type="button" onClick={() => router.push('/')}>
        <h1>SEARCH POKEMON</h1>
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeInput} autoFocus />
        <button type="submit">SEARCH</button>
        <CollectionIcon
          onClick={() => router.push('collection')}
          alt="collection button"
        />
      </form>
    </Header>
  );
}
