import Image from 'next/image'
import React from 'react'
import marketStoryImage from "../public/assets/images/download.jpeg"

const MarketStory = () => {
  return (
    <div className='flex flex-col rounded bg-white border mt-6'>
        <div className='w-full'>
           <Image 
            src={marketStoryImage}
            className='w-full rounded'
            alt="story image"
           />
        </div>
        <div className='p-4 flex flex-col gap-2'>
            <p className='font-semibold text-[#000000d6]'>
                The Coldest Sunset
            </p>
            <p className='text-[14px] text-[#00000084] font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo blanditiis animi facilis in qui quo molestias nesciunt quasi minima nostrum.
            </p>
        </div>
    </div>
  )
}

export default MarketStory