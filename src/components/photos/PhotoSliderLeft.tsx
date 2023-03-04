import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SliderProps {
    photos: Photo[] | undefined;
  }
  
  interface Photo {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
  }

function PhotoSliderRight({ photos }: SliderProps) {
  return (
    <div className='flex flex-col'>
    <div className='slider top-12'>
        <div className='slide-track2'>
        {photos?.map((photo) => (
          <Link href={`paris/${photo.id}`} className='slide'>
            <Image
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.alt_description}
            width={300}
            height={100}
            className='img w-[350px] h-[400px] rounded-lg border-[#b999e2] border-2'
          />
          </Link>
        )) ?? []}
      </div>
    </div>
  </div>
  )
}

export default PhotoSliderRight