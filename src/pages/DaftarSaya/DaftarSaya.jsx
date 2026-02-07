// src/pages/DaftarSaya/DaftarSaya.jsx
// Halaman Daftar Saya (Watchlist) - Menampilkan semua film yang disimpan user

import './DaftarSaya.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { EpisodeBadge, Top10Badge } from '../../components/Badges';
import HoverCard from '../../components/HoverCard/HoverCard';
import { useState } from 'react';

const DaftarSaya = ({ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }) => {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };

  return (
    <div className="daftar-saya-page">
      <Navbar />
      
      <main className="daftar-saya-main">
        <h1 className="daftar-saya-title">Daftar Saya</h1>
        
        {watchlist.length === 0 ? (
          // Empty State
          <div className="daftar-saya-empty">
            <p>Belum ada film di daftar kamu.</p>
            <p>Tambahkan film dengan klik tombol + pada film yang kamu suka!</p>
          </div>
        ) : (
          // Grid Layout seperti Figma
          <div className="daftar-saya-grid">
            {watchlist.map((movie) => (
              <div 
                key={movie.id} 
                className="daftar-saya-card"
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="daftar-saya-image"
                  loading="lazy"
                />
                
                {/* Badge Episode Baru */}
                {movie.isNewEpisode && (
                  <div className="daftar-saya-episode-badge">
                    <EpisodeBadge />
                  </div>
                )}
                
                {/* Badge Top 10 */}
                {movie.isTop10 && (
                  <div className="daftar-saya-top10-badge">
                    <Top10Badge />
                  </div>
                )}

                {/* Hover Card */}
                {hoveredMovieId === movie.id && (
                  <HoverCard 
                    movie={movie}
                    onMouseLeave={handleMouseLeave}
                    onAddToWatchlist={addToWatchlist}
                    onRemoveFromWatchlist={removeFromWatchlist}
                    isInWatchlist={isInWatchlist}
                    isWatchlistRow={true}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DaftarSaya;
