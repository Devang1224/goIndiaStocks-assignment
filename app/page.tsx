import Card from "@/components/Card";
import {getData} from "../services/getData"
import MarketStory from "@/components/MarketStory";

export default function Home() {

  return (
   

      <div className="h-full flex justify-between p-4 gap-20 ">

        <div className="h-full flex flex-col gap-4 flex-grow">
          <h1 className="text-[28px] font-semibold hidden xl:block">Discussion Form</h1>
          <div className="h-full overflow-y-auto">
           {
            getData?.map((item)=>(
              <Card key={item.id} item={item}/>
            ))
           }
          </div>
        </div>

        <div className="h-[94%] max-w-[25%] hidden xl:block ">
          <h1 className="text-[22px] font-semibold hidden xl:block">Market stories</h1>
          <div className="h-full flex flex-col mt-6 overflow-y-auto">
           <MarketStory/>
           <MarketStory/>
           <MarketStory/>
           <MarketStory/>
          </div>
        </div>

       </div>

  );
}
