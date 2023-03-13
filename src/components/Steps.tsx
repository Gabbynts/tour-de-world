import React from 'react'
import Typography from './Typography'

type Props = {
    number: string,
    text: string
}

function Steps({number, text}: Props) {
  return (
    <div className='flex text-[30px] items-center gap-x-2 text-[#FFF6FF]'>
        <div className='flex items-center justify-center bg-black/10 w-[36px] md:w-[72px] h-[36px] md:h-[60px] rounded-2xl'>
            <Typography sizeVariant='s' colorVariant='primary' className='font-bold'> 
              {number} 
            </Typography>
        </div>
        <Typography sizeVariant='s' colorVariant='primary' className='font-light ml-2 lg:text-3xl'>
          {text}
        </Typography>
    </div>
  )
}

export default Steps