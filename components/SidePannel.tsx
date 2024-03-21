'use client'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import defaultUserImage from "../public/assets/images/defaultUser.jpeg"
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatIcon from '@mui/icons-material/Chat';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SidePannel() {
 
  const [drawerState,setDrawerState] = useState(false);
  const router = useRouter();


  const toggleDrawer = (open:boolean) => (event:any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open)
  };



  return (
    <div className={`flex items-center fixed xl:absolute h-full transition-all duration-300 ease-in-out  ${drawerState?"ml-0 ":"ml-[-250px]"} xl:static`}>
        
          <div className="h-full w-[250px]  bg-[#193279]">
             <div className='px-4 py-6 flex items-center justify-between border border-x-0 border-t-0'>
              <div className='flex items-center gap-2 font-medium'>
                <Image src={defaultUserImage} alt="" className='w-10 h-10 rounded-full'/>
                <p className='text-[#ffffffd7]'>Hello, User</p>
              </div>
              <div className='relative '>
                <div className='w-[8px] h-[8px] bg-[#e82e2e] rounded-full absolute right-2 top-1'></div>
                <NotificationsIcon className='w-10 h-10 text-white'/>
              </div>
             </div>
             <div className='pt-2 flex flex-col gap-1'>
                <button 
                className='w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'
                onClick={()=>router.push("/")}
                >
                  <div className='flex gap-2 items-center'>
                      <ChatIcon className='text-white w-7 h-7'/>
                      <p className='text-white font-medium whitespace-nowrap'>Discussion Forum</p>
                  </div>
                  <ArrowDropDownIcon className='text-white'/>
                </button>
                <button 
                className=' w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'
                onClick={()=>router.push("/market")}
                
                >
                  <div className='flex gap-2 items-center'>
                      <MonetizationOnIcon className='text-white w-7 h-7'/>
                      <p className='text-white font-medium whitespace-nowrap'>Market Stories</p>
                  </div>
                </button>
                <button className=' w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'>
                      <p className='text-white font-medium ml-[36px] whitespace-nowrap'>Setiment</p>
                </button>
                <button className=' w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'>
                      <p className='text-white font-medium ml-[36px] whitespace-nowrap'>Market</p>
                </button>
                <button className=' w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'>
                      <p className='text-white font-medium ml-[36px] whitespace-nowrap'>Sector</p>
                </button>
                <button className=' w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'>
                      <p className='text-white font-medium ml-[36px] whitespace-nowrap'>Watchlist</p>
                </button>
                <button className=' w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'>
                      <p className='text-white font-medium ml-[36px] whitespace-nowrap'>Events</p>
                </button>
                <button className=' w-full flex justify-between pl-4 py-2  pr-2 items-center hover:bg-[#151f3cb1]'>
                      <p className='text-white font-medium ml-[36px] whitespace-nowrap'>News/Interview</p>
                </button>
             </div>
          </div>

             <button onClick={toggleDrawer(!drawerState)} className='bg-[#193279] h-[100px]  flex items-center'>
               <ArrowRightIcon className='text-[white] max-w-[20px]'/>
             </button>
       
    </div>
  );
}