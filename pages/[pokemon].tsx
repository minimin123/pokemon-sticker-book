import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import { getPokemonById } from '../src/service';

import OgTags from '../src/components/ogTags/ogTags';
import Sticker from '../src/components/sticker/sticker';
import SkeletonComponent from '../src/components/skeleton/skeleton';
import ErrorComponent from '../src/components/error/error';

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

  if (isError) return <ErrorComponent />;
  if (isLoading) return <SkeletonComponent />;

  return (
    <main>
      <OgTags title={name} description={name} img={image} />
      <Sticker id={id} name={name} image={image} />
    </main>
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
