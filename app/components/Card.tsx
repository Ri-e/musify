
import fetchSongnames from "./data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Card() {

  const fetchData = await fetchSongnames();

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {fetchData.map((song, index) => (
          <div key={index} className="mt-4 flex hover:scale-[1.2] transition-all ease-in-out ">
            <div className="w-[200px] text-[20px] flex flex-col  h-[300px]">
              <div className="pics bg-green-600 w-full h-[200px] text-red-600">
                <Image
                  src={song.song_image_url}
                  alt={song.name}
                  width={200}
                  className="cursor-pointer"
                  height={200}
                />
              </div>
              <div className="p-[0.4rem]">
                <p>{song.name}</p>{" "}
                <p className="text-[17px]">By {song.artist}</p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
