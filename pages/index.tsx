import styled from '@emotion/styled';

import OgTags from '../src/components/ogTags/ogTags';

export default function Home() {
  return (
    <Wrap>
      <OgTags
        title="POKEMON STICKER BOOK"
        description="search your pokemon sticker!"
        img="/pokeball-icon.png"
      />
      <h1>Search Pokemon ID or name and collect pokemon-sticker!</h1>
    </Wrap>
  );
}

const Wrap = styled.main`
  h1 {
    text-align: center;
  }
`;
