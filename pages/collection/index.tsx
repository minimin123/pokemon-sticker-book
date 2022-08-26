import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Wrap } from '../../styles/collection.styles';

export default function CollectionPage() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection(JSON.parse(localStorage.getItem('pokemonList')));
  }, []);

  return (
    <Wrap>
      <h2>COLLECTION</h2>
      <div className="collection-wrap">
        <section className="collection">
          {!collection && (
            <p>Search Pokemon ID or name and collect pokemon-sticker!</p>
          )}

          {collection?.map((item, index) => (
            <div className="sticker" key={`collection-${index}`}>
              <span className="id">{item.id}</span>
              <Image
                src={item.image ?? '/pokeball-icon.png'}
                alt={item.name}
                width={150}
                height={150}
              />
              <div className="name">{item.name}</div>
            </div>
          ))}
        </section>

        <div className="shadow" />
      </div>
    </Wrap>
  );
}
