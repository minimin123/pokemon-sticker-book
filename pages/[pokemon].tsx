import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import { getPokemonById } from '../src/service';
import OgTags from '../src/components/ogTags/ogTags';
import Sticker from '../src/components/sticker/sticker';

export default function Result() {
  const router = useRouter();

  const pokemonId = String(router.query?.pokemon);

  const { data, isError, isLoading } = useQuery(
    ['getPokemon', pokemonId],
    () => getPokemonById(pokemonId),
    {
      enabled: !!pokemonId,
    },
  );

  const id = data?.id;
  const name = data?.name;
  const image = data?.sprites.other.dream_world.front_default;

  if (isError) return <div>에러</div>;
  if (isLoading) return <div>로딩중.....</div>;

  return (
    <div>
      <OgTags title={name} description={name} img={image} />
      <Sticker id={id} name={name} image={image} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const id = context.params?.pokemon;

  await queryClient.prefetchQuery(['getPokemon'], () =>
    getPokemonById(String(id)),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});
