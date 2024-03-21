import React from 'react'
import Image from "next/image";
import avatar from "../public/assets/avatar-1-msCO90xk.ico";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

interface Props {
    item: {
        id: number;
        image: any;
        title: string;
        desc: string;
        likes: string;
        views: string;
        comments: string;
        lastVisited: string;
    }
}

const Card = ({item}:Props) => {

  return (
    <div className="mt-5 cursor-pointer flex justify-start gap-4 items-start pl-5 py-1 pr-4 rounded-md shadow-primary border border-r-0  border-top">
    <div className="shrink-0">
      <Image
        src={item.image}
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
        alt="user image"
      />
    </div>
    <div className="flex flex-col gap-2 py-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center ">
          <h1 className="font-semibold text-[16px] sm:text-[18px] text-[#000000af]">
            {item.title}
          </h1>
          <button className="bg-[#214d9f] text-[10px] text-white py-[2px] px-3 rounded-full ">
            Sector 2
          </button>
        </div>
        <p className="flex items-start text-[12px] sm:text-[14px] text-[#6291be] font-semibold">
          {item.lastVisited}
        </p>
      </div>
      <p className='text-[14px] sm:text-[16px]'>
      {item.desc}
      </p>
      <div className="flex gap-4 sm:gap-10">
        <div className="flex gap-1 items-center">
          <FavoriteBorderIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          <p className="font-semibold text-[12px] sm:text-[14px] whitespace-nowrap">{item.likes}</p>
        </div>
        <div className="flex gap-1 items-center">
          <VisibilityOutlinedIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          <p className="font-semibold text-[12px] sm:text-[14px] whitespace-nowrap">{item.views}</p>
        </div>
        <div className="flex gap-1 items-center">
          <ChatBubbleOutlineOutlinedIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          <p className="font-semibold text-[12px] sm:text-[14px] whitespace-nowrap">{item.comments} Comments</p>
        </div>
        <div className="flex gap-1 items-center">
          <ShareOutlinedIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          <p className="font-semibold text-[12px] sm:text-[14px] whitespace-nowrap">Share</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card