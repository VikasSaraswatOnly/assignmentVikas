import { useState } from "react";
import songs from "./songsData";

const MusicLibrary = () => {
  const [search, setSearch] = useState("");
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Music Library</h2>
      <input
        type="text"
        placeholder="Search by title or artist..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredSongs.map((song) => (
          <li key={song.id}>{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicLibrary;
