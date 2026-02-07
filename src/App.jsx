import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import DaftarSaya from "./pages/DaftarSaya/DaftarSaya.jsx";
import Playground from "./pages/Playground.jsx";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (!watchlist.find(m => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter(m => m.id !== id));
  };

  const isInWatchlist = (id) => watchlist.some(m => m.id === id);

  const watchlistProps = {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist
  };

  return (
    <Routes>
      <Route path="/" element={<Home {...watchlistProps} />} />
      <Route path="/daftar-saya" element={<DaftarSaya {...watchlistProps} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<Playground />} />
    </Routes>
  );
}

export default App;

