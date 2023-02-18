import React from 'react'

type Props = {
    number: string,
    text: string
}

function Steps({number, text}: Props) {
  return (
    <div className='flex text-[30px] items-center gap-x-2'>
        <div className='flex items-center justify-center bg-black/10 w-[72px] h-[60px] rounded-2xl'>
            <p className='font-bold'>{number}</p>
        </div>
        <p className='flex-1 ml-2 font-light'>{text}</p>
    </div>
  )
}

export default Steps