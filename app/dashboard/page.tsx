import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import fetchSongnames from "../components/data";
export default async function page() {

  return (
    
    <div className="bg-black h-screen w-full text-red-600 text-[25px] flex gap-4">
      <Sidebar />
      <div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
