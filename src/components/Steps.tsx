import React from 'react'

type Props = {
    number: string,
    text: string
}

function Steps({number, text}: Props) {
  return (
    <div className='flex text-[30px] items-center gap-x-2'>
        <div className='flex items-center justify-center bg-black/10 w-[36px] md:w-[72px] h-[36px] md:h-[60px] rounded-2xl'>
            <p className='font-bold text-sm md:text-xl'>{number}</p>
        </div>
        <p className='flex-1 ml-2 font-light text-[18px] md:text-xl lg:text-3xl'>{text}</p>
    </div>
  )
}

export default Steps