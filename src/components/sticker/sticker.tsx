import QR from 'qrcode.react';
import { useEffect } from 'react';
import { Flip } from './sticker.styles';
import Pokeball from '../../assets/pokeball-icon.png';
import PokemonLogo from '../../assets/pokemon-logo.png';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export default function Sticker({ id, name, image }: Pokemon) {
  const currentPokemon = { id, name, image };
  const prevPokemonList = JSON.parse(localStorage.getItem('pokemonList'));

  useEffect(() => {
    if (!prevPokemonList) {
      localStorage.setItem('pokemonList', JSON.stringify([currentPokemon]));
    } else {
      localStorage.setItem(
        'pokemonList',
        JSON.stringify([currentPokemon, ...prevPokemonList]),
      );
    }
  }, []);

  return (
    <Flip>
      <div className="card">
        <section className="front">
          <div className="label">
            <span className="name">
              <span className="id">{id}</span>
              {name?.toUpperCase()}
            </span>
          </div>
          <img src={image ?? Pokeball.src} alt={name} />
          {image ? (
            <p>@Pokemon</p>
          ) : (
            <div>
              There is no image.
              <br />
              Check the QR code on the back of the sticker for more information.
            </div>
          )}
        </section>
        <section className="back">
          <img src={PokemonLogo.src} alt="pokemon logo" />
          <QR
            value={`https://www.pokemonkorea.co.kr/pokedex?snumber=${id}&snumber2=${id}`}
            size={140}
            id="qr-gen"
            includeMargin={false}
            imageSettings={{
              src: Pokeball.src,
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
