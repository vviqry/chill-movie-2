// src/App.jsx - Main app dengan routing dan global state
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import DaftarSaya from "./pages/DaftarSaya/DaftarSaya.jsx";
import Playground from "./pages/Playground.jsx";

function App() {
  // ========== GLOBAL WATCHLIST STATE ==========
  // State watchlist di App.jsx agar bisa diakses dari semua page
  const [watchlist, setWatchlist] = useState([]);

  // CREATE - Menambah film ke watchlist
  const addToWatchlist = (movie) => {
    if (!watchlist.find(m => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  // DELETE - Menghapus film dari watchlist
  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter(m => m.id !== id));
  };

  // HELPER - Cek apakah film ada di watchlist
  const isInWatchlist = (id) => watchlist.some(m => m.id === id);
  // =============================================

  // Props untuk watchlist yang akan di-pass ke pages
  const watchlistProps = {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist
  };

  return (
    <Routes>
      {/* Home sebagai halaman utama */}
      <Route path="/" element={<Home {...watchlistProps} />} />

      {/* Daftar Saya page */}
      <Route path="/daftar-saya" element={<DaftarSaya {...watchlistProps} />} />

      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Test/Playground */}
      <Route path="/test" element={<Playground />} />
    </Routes>
  );
}

export default App;

