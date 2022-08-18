import OgTags from '../src/components/ogTags/ogTags';

export default function Home() {
  return (
    <div>
      <OgTags
        title="POKEMON STICKER BOOK"
        description="search your pokemon sticker!"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png"
      />
      Search Pokemon ID or name and collect pokemon-sticker!
    </div>
  );
}
