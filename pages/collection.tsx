import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import Collection from '../src/components/collection/collection';

export default function CollectionPage() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCollection(JSON.parse(localStorage.getItem('pokemonList')));
    }
  }, []);

  return (
    <Wrap>
      <h2>COLLECTION</h2>
      <br />
      <Collection collection={collection} />
    </Wrap>
  );
}

const Wrap = styled.main`
  position: relative;
  font-family: 'Montserrat';
  font-weight: 900;
  margin: 0 auto;

  h2 {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
  }
`;
