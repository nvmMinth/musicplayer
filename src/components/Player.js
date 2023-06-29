import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  activeSong,
  setActiveSong,
  isPlaying,
  setIsPlaying,
}) => {
  //state
  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currentTime: 0,
    animatePlayRange: 0,
  });

  //Ref
  const audioRef = useRef();
  //Event handlers
  const playingHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    console.log(e);
    const duration = e.target.duration;

    // Animate Play percentage
    const roundCurrentTime = Math.round(currentTime);
    const roundDuration = Math.round(duration);
    const playRange = Math.round((roundCurrentTime / roundDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animatePlayRange: playRange,
    });
  };
  const dragTimeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    console.log(audioRef);
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = (direction) => {
    let activeIndex = songs.findIndex((song) => song.id === activeSong.id);
    if (direction === "skip-back") {
      setActiveSong(
        songs[activeIndex === 0 ? songs.length - 1 : activeIndex - 1]
      );
    }
    if (direction === "skip-forward") {
      setActiveSong(
        songs[activeIndex + 1 === songs.length ? 0 : activeIndex + 1]
      );
    }
  };
  //Auto play audio when skip
  const autoPlayHandler = () => {
    isPlaying && audioRef.current.play();
  };
  //Format Time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // Play range Styles
  const playAnimate = {
    transform: `translateX(${songInfo.animatePlayRange}%)`,
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${activeSong.color[0]}, ${activeSong.color[1]})`,
          }}
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragTimeHandler}
          />
          <div className="animate-track" style={playAnimate}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={playingHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
      <audio
        src={activeSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onProgress={autoPlayHandler}
        onEnded={() => skipTrackHandler("skip-forward")}
      ></audio>
    </div>
  );
};

export default Player;
