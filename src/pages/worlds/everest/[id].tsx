import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchPhoto } from '@/pages/api/unsplash';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import DetailPhotos from '@/components/photos/DetailPhotos';

interface QueryError {
  message: string;
  // Add any other properties you expect to use here
}

const PhotoPage = () => {
  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? router.query.id.join('')
    : router.query.id;
  const { isLoading, isError, data, error } = useQuery(
    ['photo', id],
    () => fetchPhoto(id, 't5WxxhORJ7sAw_rEMQVskzTEdzMq4sLKhHWhk99FqSQ'),
    {
      enabled: !!id,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    const queryError = error as QueryError;
    return <div>Error: {queryError.message}</div>;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Everest | Tour De World</title>
          <meta name='TourDeWorld' content='' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='min-h-screen layout py-24'>
          <DetailPhotos
           name={data?.user}
           image={data?.urls.regular}
           desc={data?.alt_description}
           date={data?.date}/>
        </main>
      </Layout>
    </>
  );
};

export default PhotoPage;
