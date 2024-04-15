'use client'
import { IoPlayForward } from "react-icons/io5";
import ReactAudioPlayer from 'react-audio-player';

import { FaPause } from "react-icons/fa";

import { IoPlayBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
export default function Video_player() {
  
  const [playing, setPlaying] = useState(true)
  let play = () => {
    setPlaying(!playing)
  };
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-red-600 h-[5rem] text-white flex gap-[2.5rem] items-center justify-center ">
      <IoPlayBack className="cursor-pointer hover:scale-[1.2] transition-all ease-in-out " />
      {playing ? (
        <FaPlay onClick={ play} className="cursor-pointer text-[30px] hover:scale-[1.2] transition-all ease-in-out " />
      ) : (
        <FaPause onClick={ play} className="cursor-pointer text-[30px] hover:scale-[1.2] transition-all ease-in-out " />
        
      )}

      <IoPlayForward className="cursor-pointer hover:scale-[1.2] transition-all ease-in-out " />
      <ReactAudioPlayer src="https://music.youtube.com/watch?v=aLSolb9bMBA&list=RDAMVMyjCAM-1R6w4" controls/>
    </div>
  );
}
