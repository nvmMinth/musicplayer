import React, {useState} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/Player'
import data from './data'
import Library from './components/Library'
import Nav from './components/Nav'

const App = () => {
  const [songs, setSongs] = useState(data())
  const [activeSong, setActiveSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryToggle, setLibraryToggle] = useState(false)

  return (
    <div className={`App ${libraryToggle? "app-transition" : ""}`}>
      <Nav libraryToggle={libraryToggle} setLibraryToggle={setLibraryToggle} />
      <Song activeSong={activeSong} />
      <Player songs={songs} activeSong={activeSong} setActiveSong={setActiveSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} activeSong={activeSong} setActiveSong={setActiveSong} libraryToggle={libraryToggle} setLibraryToggle={setLibraryToggle} />
    </div>
  )
}

export default App