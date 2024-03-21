import Image from "next/image";
import avatar from "../public/assets/avatar-1-msCO90xk.ico"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Home() {
  return (
   <div className="h-screen">
    <div className="flex justify-between p-4">
    <div className="flex flex-col gap-4">
      <h1 className="text-[28px] font-semibold ">Discussion Form</h1>
      <div className="flex justify-start gap-4 items-start">
         <div>
            <Image src={avatar} className="w-[40px] h-[40px]"/>
         </div>
         <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <h1 className="font-semibold text-[18px] text-[#000000af]">Lorem Ipsum</h1>
                <button className="bg-[#214d9f] text-[14px] text-white py-[2px] px-3 rounded-full ">Sector 2</button>
            </div>
            <p className="flex items-start text-[14px] text-[#6291be] font-semibold">
              2 min ago
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae impedit quam, aut laboriosam earum saepe! Sint quis non reiciendis.
          </p>
          <div className="flex justify-between">
            <div>

            </div>
          </div>

         </div>
      </div>
    </div>
    <div>
      <h1 className="text-[22px] font-semibold">Market stories</h1>
    </div>
    </div>
    
   </div>
  );
}
