import fetchSongnames from "./data";

export default async function Video_player() {
  const fetchData = fetchSongnames;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-red-600 h-[5rem]">
      <p>Hello</p>
    </div>
  );
}
