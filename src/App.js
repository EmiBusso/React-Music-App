import { useState, useEffect } from "react";
import Player from "./components/Player/Player";

function App() {
  const [songs] = useState([
    {
      title: "Save Your Tears",
      artist: "The Weeknd",
      img_src: "./images/song-0.jpg",
      src: "./music/The Weeknd - Save Your Tears (Official Music Video).mp3",
    },
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/MachineGunKelly.mp3",
    },
    {
      title: "Peaches ft. Daniel Caesar, Giveon",
      artist: "Justin Bieber ",
      img_src: "./images/song-2.jpg",
      src: "./music/Justin Bieber-Peaches.mp3",
    },
    {
      title: "Levitating ft. DaBaby ",
      artist: "Dua Lipa",
      img_src: "./images/song-3.jpg",
      src: "./music/Dua Lipa - Levitating.mp3",
    },
    {
      title: "Cold Heart (PNAU Remix)",
      artist: "Elton John, Dua Lipa",
      img_src: "./images/song-4.jpg",
      src: "./music/Elton John, Dua Lipa - Cold Heart.mp3",
    },
    {
      title: "Bad Habits",
      artist: "Ed Sheeran",
      img_src: "./images/song-5.jpg",
      src: "./music/Ed Sheeran - Bad Habits.mp3",
    },
    {
      title: "Stay",
      artist: "The Kid LAROI ft. Justin Bieber",
      img_src: "./images/song-6.jpg",
      src: "./music/The Kid LAROI, Justin Bieber - STAY.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

      <footer>
        <div className="footer">
          💻 This project was coded by{" "}
          <a
            href="https://mystifying-archimedes-2ecfd3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Emilia Busso{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/EmiBusso/React-Music-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://focused-wozniak-ff9454.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
