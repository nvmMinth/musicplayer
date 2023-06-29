import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, activeSong, setActiveSong, libraryToggle, setLibraryToggle }) => {
  return (
    <div className={`library ${libraryToggle? "library-active" : ""}`}>
      <h2 className="title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong key={song.id} song={song} activeSong={activeSong} setActiveSong={setActiveSong} />
        ))}
      </div>
    </div>
  );
};

export default Library;
