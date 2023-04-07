import React from 'react';
import './App.css';
import TopBanner from './Pages/Home';
import MovieList from './types/Movies';
import MyPodcast from './Pages/MyPodcast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navigation/Navigation.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" Component={TopBanner} />
        <Route path="/MyPodcast" Component={MyPodcast} />
        <Route path="/MovieList" Component={MovieList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
