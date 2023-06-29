import React from "react";

const Song = ({ activeSong }) => {
  return (
    <div className="song-container">
      <img src={activeSong.cover} alt={activeSong.name} />
      <h2>{activeSong.name}</h2>
      <h3>{activeSong.artist}</h3>
    </div>
  );
};

export default Song;
