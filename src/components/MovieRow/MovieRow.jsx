// src/components/MovieRow/MovieRow.jsx
// Komponen Carousel/Slider untuk menampilkan daftar film

import { useRef, useState } from 'react';
import styles from './MovieRow.module.css';
import { EpisodeBadge, Top10Badge } from '../Badges';
import HoverCard from '../HoverCard/HoverCard';

const MovieRow = ({ 
  title, 
  movies, 
  isVertical = false,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
  isWatchlistRow = false
}) => {
  const rowRef = useRef(null);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  // Fungsi scroll ke kiri
  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  // Fungsi scroll ke kanan
  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // Handle mouse enter dengan delay
  const handleMouseEnter = (movieId) => {
    if (isVertical) {
      setHoveredMovieId(movieId);
    }
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };

  return (
    <section className={styles.movieRow}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      {/* Slider Container */}
      <div className={styles.sliderContainer}>
        {/* Arrow Left */}
        <button 
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={scrollLeft}
          aria-label="Scroll Left"
        >
          <img src="/arrow_left.png" alt="Left" />
        </button>

        {/* Movies Row */}
        <div className={styles.moviesContainer} ref={rowRef}>
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className={`${styles.movieCard} ${isVertical ? styles.movieCardVertical : ''}`}
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src={movie.image} 
                alt={movie.title} 
                className={styles.movieImage}
                loading="lazy"
              />
              
              {/* Badge Episode Baru - Pojok Kiri Atas */}
              {movie.isNewEpisode && (
                <div className={styles.episodeBadgeContainer}>
                  <EpisodeBadge />
                </div>
              )}
              
              {/* Badge Top 10 - Pojok Kanan Atas */}
              {movie.isTop10 && (
                <div className={styles.top10BadgeContainer}>
                  <Top10Badge />
                </div>
              )}
              
              {/* Title & Rating - Hanya untuk horizontal cards */}
              {!isVertical && (
                <>
                  {/* Title di kiri bawah */}
                  <div className={styles.movieInfo}>
                    <span className={styles.movieTitle}>{movie.title}</span>
                  </div>
                  
                  {/* Rating di kanan bawah */}
                  {movie.rating && (
                    <div className={styles.ratingContainer}>
                      <img src="/bintang.svg" alt="Rating" className={styles.starIcon} />
                      <span className={styles.ratingText}>{movie.rating}</span>
                    </div>
                  )}
                </>
              )}

              {/* Hover Card - Netflix Style (Hanya untuk vertical cards) */}
              {isVertical && hoveredMovieId === movie.id && (
                <HoverCard 
                  movie={movie} 
                  onMouseLeave={handleMouseLeave}
                  onAddToWatchlist={onAddToWatchlist}
                  onRemoveFromWatchlist={onRemoveFromWatchlist}
                  isInWatchlist={isInWatchlist}
                  isWatchlistRow={isWatchlistRow}
                />
              )}
            </div>
          ))}
        </div>

        {/* Arrow Right */}
        <button 
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={scrollRight}
          aria-label="Scroll Right"
        >
          <img src="/arrow_right.png" alt="Right" />
        </button>
      </div>
    </section>
  );
};

export default MovieRow;
