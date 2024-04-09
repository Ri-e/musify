import Navlinks from "./Navlinks";
import clsx from "clsx";
const Sidebar = () => {
  return (
    <div
      className={
        "w-[20%] h-[55rem] border-r-2 border-red-600 flex flex-col items-center text-red-600 text-[25px]"
      }
    >
      <div className=" fixed">
        <Navlinks />
      </div>
    </div>
  );
};

export default Sidebar;
