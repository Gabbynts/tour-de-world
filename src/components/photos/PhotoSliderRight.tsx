import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    photos: Photo[] | undefined;
  }
  
  interface Photo {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
  }

function PhotoSliderRight({ photos }: Props) {
  return (
    <div className='flex flex-col'>
    <div className='slider top-12'>
      <div className='slide-track'>
        {photos?.map((photo) => (
          <Link href={`desert/${photo.id}`} className='slide' key={photo.id}>
            <Image
            src={photo.urls.regular}
            alt={photo.alt_description}
            width={300}
            height={100}
            className='img w-[350px] h-[400px] rounded-lg border-white border-2'
          />
          </Link>
        )) ?? []}
      </div>
    </div>
  </div>
  )
}

export default PhotoSliderRight