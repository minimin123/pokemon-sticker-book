import { Wrap } from './collection.styles';

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
            <img src={item.image} alt={item.name} />
            <div className="name">{item.name}</div>
          </div>
        ))}
      </section>
      <div className="shadow" />
    </Wrap>
  );
}
