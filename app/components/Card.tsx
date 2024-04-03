// import fetchSongnames from "./data";
// import Image from "next/image";
// export default async function Card() {
//   const fetchData = await fetchSongnames();
//   return (
//     <>
//       <div className="flex gap-4">
//         {fetchData.await map((song) => {
//           return (
//             <div className="mt-4 flex">
//               <div className="w-[200px] text-[20px] flex flex-col  h-[300px]">
//                 <div className="pics bg-green-600 w-full h-[200px] text-red-600">
//                     <Image src={song.song_image_url} alt="feuck" width={200} height={200} />
//                 </div>
//                 <div className="p-[0.4rem]">
//                   <p>{song.name}</p>
//                   <p className="text-[17px]">By {song.artist}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
import fetchSongnames from "./data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Card() {

  const fetchData = await fetchSongnames();

  return (
    <>
      <div className="flex gap-4">
        {fetchData.map((song, index) => (
          <div key={index} className="mt-4 flex">
            <div className="w-[200px] text-[20px] flex flex-col  h-[300px]">
              <div className="pics bg-green-600 w-full h-[200px] text-red-600">
                <Image
                  src={song.song_image_url}
                  alt={song.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-[0.4rem]">
                <p>{song.name}</p>{" "}
                {/* Assuming song name property is named song_name */}
                <p className="text-[17px]">By {song.artist}</p>{" "}
                {/* Assuming artist name property is named artist_name */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
