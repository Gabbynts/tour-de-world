import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { useInfiniteQuery } from 'react-query';
import { getPhotos } from '@/pages/api/unsplash';
import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(
      'nature',
      ({ pageParam = 1 }) =>
        getPhotos(
          'nature',
          6,
          pageParam,
          't5WxxhORJ7sAw_rEMQVskzTEdzMq4sLKhHWhk99FqSQ'
        ),
      {
        getNextPageParam: (lastPage, allPages) =>
          lastPage.length === 0 ? undefined : allPages.length + 1,
        cacheTime: 60 * 60 * 1000,
      }
    );

  if (status == 'loading') {
    return (
      <div className='page_loader'>
        <div className='loader'></div>
      </div>
    );
  }

  if (status == 'error') {
    return <div>Error</div>;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Photos | Tour De World</title>
          <meta name='TourDeWorld' content='' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='min-h-screen layout py-24'>
          {/* <div className='-mt-5 w-auto'>
            <Image
              src='/images/background-pg2.jpg'
              alt='bg-pagination'
              height={150}
              width={200}
              className='w-full absolute -z-10'
            />
          </div> */}
          <div className='flex flex-col items-center gap-3'>
            <h1 className='text-[80px] font-thin'>OVERVIEW</h1>
            <div className='flex flex-wrap gap-5 justify-center'>
              {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.map((photo) => (
                    <div key={photo.id}>
                      <Image
                        key={photo.id}
                        src={photo.urls.regular}
                        alt={photo.alt_description}
                        width={300}
                        height={100}
                        className='img w-[380px] h-[450px] border-2 border-[#3795BD]'
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className='flex justify-center mt-4'>
              <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                className='transition duration-200'
              >
                <BsArrowDownCircle className='animate-bounce text-[50px]' />
              </button>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
