'use client'

import { useRouter } from 'next/navigation'
import React from 'react'


interface Props {
    type:string
}

const NavBtn = ({type}:Props) => {

const router = useRouter()

  return (
    <>
    {
       (type==="discussion")?(
           <button 
            className=" flex-1 text-[18px] font-medium hover:bg-[#151f3cb1] px-4 py-2 sm:text-[28px] sm:px-6 sm:py-4 "
            onClick={()=>router.push("/")}
            >Discussion Form</button>
           ):(
            <button 
            className="flex-1 text-[18px] font-medium hover:bg-[#151f3cb1] px-4 py-2 sm:text-[28px] sm:px-6 sm:py-4 "
            onClick={()=>router.push("/market")}
            >Market Stories</button>
        )
    }
    </>
   
    )
}

export default NavBtn