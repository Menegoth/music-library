import { useState, useRef, Fragment }from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import ArtistView from "./components/ArtistView";
import AlbumView from "./components/AlbumView";
import SongView from "./components/SongView";

import "./App.css"

import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";

function App() {
  //state variables
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);
  let searchInput = useRef("");

  //api link
  const API_URL = "https://itunes.apple.com/search?term="

  function handleSearch(e, term) {
    e.preventDefault();
    async function fetchData() {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage("Not Found");
      }
    }
    fetchData();
  }

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Router>
          <Routes>
            <Route path="/" element={
              <Fragment>
                      {message}
                <SearchContext.Provider value={{
                  term: searchInput,
                  handleSearch: handleSearch
                }}>
                  <SearchBar />
                </SearchContext.Provider>
                <Gallery />
              </Fragment>
            } />
            <Route path="/album/:id" element={<AlbumView />} />
            <Route path="/artist/:id" element={<ArtistView />} />
            <Route path="/song/:id" element={<SongView />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
