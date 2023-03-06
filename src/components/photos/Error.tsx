import React from 'react'

interface Props {
  message: string
}

function errorPage({message}: Props) {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col items-center justify-center bg-[#fffefe] py-7 px-5
                      border-r-[5px] border-b-[5px] rounded-[18px] border-[#6e6e6e]'>
        <p className='text-[20px] text-black font-extralight'>
          Error: {message}
        </p>
        {/* <button className='bg-[#555] rounded-2xl border-r-[3px] border-b-[3px] px-8 py-2'>Ok</button> */}
      </div>
    </div>
  )
}

export default errorPage