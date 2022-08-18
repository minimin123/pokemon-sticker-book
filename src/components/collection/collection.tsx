import { Wrap } from './collection.styles';
import Pokeball from '../../assets/pokeball-icon.png';

export default function Collection({ collection }) {
  return (
    <Wrap>
      <section className="collection">
        {!collection && (
          <p>Search Pokemon ID or name and collect pokemon-sticker!</p>
        )}
        {collection?.map((item, index) => (
          <div className="sticker" key={`collection-${index}`}>
            <span className="id">{item.id}</span>
            <img src={item.image ?? Pokeball.src} alt={item.name} />
            <div className="name">{item.name}</div>
          </div>
        ))}
      </section>
      <div className="shadow" />
    </Wrap>
  );
}
