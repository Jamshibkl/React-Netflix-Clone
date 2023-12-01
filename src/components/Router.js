// router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shows from '../pages/Shows';
import Movies from '../pages/Movies';
import Sports from '../pages/Sports';
import Kids from '../pages/Kids';
import Watchlist from '../pages/Watchlist';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sports" element={<Sports />} /> {/* Fix: Removed extra single quote */}
        <Route path="/kids" element={<Kids />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
