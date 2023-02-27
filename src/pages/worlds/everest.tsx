import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { TiWorld } from 'react-icons/ti';
import { GiRoundStar } from 'react-icons/gi';
import Link from 'next/link';
import { listPhotos } from '@/constant/listPhotos';

export default function Home() {
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
          <div className='flex items-center'>
            <h1 className='text-[64px]'>Everest</h1>
            <div className='w-full pt-9 flex ml-4 flex-col'>
              <hr />
              <p>The unique experiences</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='slider top-12'>
              <div className='slide-track'>
                {listPhotos.map((photo, id) => (
                  <div className='slide'>
                    <Image
                      key={photo.id}
                      src={photo.imgUrl}
                      alt={photo.title}
                      width={300}
                      height={100}
                      className='img rounded-lg border-[#b999e2] border-2'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex items-center gap-5 pt-20'>
            <TiWorld className='text-[35px]' />
            <p>
              Traveling the world offers the opportunity to have the unique
              experiences.
            </p>
          </div>
          <div className='slider'>
            <div className='slide-track2'>
              {listPhotos.map((photo, id) => (
                <div className='slide'>
                  <Image
                    key={photo.id}
                    src={photo.imgUrl}
                    alt={photo.title}
                    width={300}
                    height={100}
                    className='img rounded-lg border-[#b999e2] border-2'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='pt-9'>
            <Link
              href='/forms/everest'
              className='flex w-[256px] justify-center items-center gap-x-2 bg-[#6E4C99] px-3 py-2 rounded-[10px] hover:bg-[#583c7e]'
            >
              Share Your Experiences <GiRoundStar />
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
