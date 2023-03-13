import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { TiWorld } from 'react-icons/ti';
import { GiRoundStar } from 'react-icons/gi';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { getPhotos } from '@/pages/api/unsplash';
import PhotoSliderRight from '@/components/photos/PhotoSliderRight';
import PhotoSliderLeft from '@/components/photos/PhotoSliderLeft';

interface QueryError {
  message: string;
  // Add any other properties you expect to use here
}

export default function Home() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, error } = useQuery(
    ['river-photos', page],
    () =>
      getPhotos(
        'river',
        9,
        page,
        't5WxxhORJ7sAw_rEMQVskzTEdzMq4sLKhHWhk99FqSQ'
      ),
    { keepPreviousData: true, staleTime: 5000 }
  );

  if (isLoading) {
    return (
      <div className='page_loader'>
        <div className='loader'></div>
      </div>
    );
  }

  if (isError) {
    const queryError = error as QueryError;
    return <div>Error: {queryError.message}</div>;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>River | Tour De World</title>
          <meta name='TourDeWorld' content='' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='min-h-screen layout py-24'>
          <div className='flex items-center'>
            <h1 className='text-[64px]'>Paris</h1>
            <div className='w-full pt-9 flex ml-4 flex-col'>
              <hr />
              <p>The unique experiences</p>
            </div>
          </div>
          <PhotoSliderRight photos={data} />

          <div className='flex items-center gap-5 pt-20'>
            <TiWorld className='text-[35px]' />
            <p>
              Traveling the world offers the opportunity to have the unique
              experiences.
            </p>
          </div>
          <PhotoSliderLeft photos={data} />
          <div className='pt-20'>
            <Link
              href='/forms/river'
              className='flex w-[256px] justify-center items-center gap-x-2 bg-[#AB7AE2] px-3 py-2 rounded-[10px] hover:bg-[#583c7e]'
            >
              Share Your Experiences <GiRoundStar />
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
