import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
export  default async function fetchSongnames() {
  noStore();
  try {
    const data = await sql`SELECT name, artist, song_image_url FROM songs`;
    return data.rows;
  } catch (err) {
    console.error("error caught : ", err);
    throw new Error("failed to fetch songs names");
  }
}

