import Navlinks from "./Navlinks";

const Sidebar = () => {
  return (
    <div className="h-screen w-[20%] border-4 border-red-600 p-[0.5rem] flex flex-col text-red-600">
      <div className="bg-red-600 w-full h-[20%] mb-[3rem]">1</div>
      <Navlinks />
    </div>
  );
};

export default Sidebar;
