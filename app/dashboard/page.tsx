import React from "react";
import Sidebar from "../components/Sidebar";
import ListenAgain from "../components/ListenAgain";

const page = () => {
  return (
    <div className="bg-black text-red-600 h-screen w-full text-[25px] flex gap-2">
      <Sidebar />
      <ListenAgain />
    </div>
  );
};

export default page;
