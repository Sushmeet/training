/*
Song List reducer to return a static list of songs
Selected Song reducer 
*/
import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "2:30",
    },
    {
      title: "All Star",
      duration: "3:15",
    },
    {
      title: "I want it that way",
      duration: "1:45",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

const favouriteTitle = () => {
  return "No Scrubs";
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  favouriteTitle,
});
