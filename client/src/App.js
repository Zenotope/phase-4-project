import './App.css';
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Favorites from './Components/Favorites';
import Search from './Components/Search';
import SongDetail from './Components/SongDetail';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Search/>
    </div>
  );
}

export default App;
