import Navlinks from "./Navlinks";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-red-600 flex flex-col items-center text-red-600 text-[25px]">
      <div className=" flex  flex-col">
        <Navlinks />
      </div>
    </div>
  );
};

export default Sidebar;
