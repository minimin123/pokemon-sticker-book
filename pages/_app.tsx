import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import SearchBar from '../src/components/searchBar/searchBar';

import { reset } from '../styles/reset';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SearchBar />
        <Global styles={reset} />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
