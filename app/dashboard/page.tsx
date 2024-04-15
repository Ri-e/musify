import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Video_player from "../components/Video_player";

export default async function page() {
  
  return (
    
    
    <div className="bg-red-100 h-[55rem] text-red-600 text-[25px] flex gap-4 scrollbar-hidden">
      <Sidebar />
      <div className="px-[4rem]">
        <div className="">
          <Card />
        </div>
        

      </div>
      <Video_player/>
    </div>
  );
}
