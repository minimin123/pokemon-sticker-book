import Head from 'next/head';

interface IProps {
  title: string;
  description: string;
  img: string;
}

export default function OgTags({ title, description, img }: IProps) {
  return (
    <Head>
      <title>{title.toUpperCase()}</title>
      <link rel="icon" href={img} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
    </Head>
  );
}
