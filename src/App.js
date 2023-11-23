import React from "react";
import NavBar from "./components/NavBar/NavBar";
import {orginals,action,trending,ComedyMovies} from './url'
import './components/NavBar/NavBar.css'
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
    </div>
  );
}

export default App;
