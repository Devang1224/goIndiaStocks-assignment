import React from 'react'
import MarketStory from '@/components/MarketStory'

const page = () => {
  return (
       <div className="flex flex-1 w-full flex-col items-center">
          <h1 className="text-[22px] font-semibold hidden xl:block">Market stories</h1>
          <div className="h-full flex flex-col mt-6 overflow-y-auto">
           <MarketStory/>
           <MarketStory/>
           <MarketStory/>
           <MarketStory/>
          </div>
      </div>

  )
}

export default page
