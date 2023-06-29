import React from "react";

const LibrarySong = ({ song, activeSong, setActiveSong }) => {
  const selectSongHandler = () => {
    setActiveSong(song)
  }
  return (
    <div className={`${song === activeSong? "library-song active" : "library-song"}`} onClick={selectSongHandler} >
      <img src={song.cover} alt={song.name} />
      <div className="song-descr">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
