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

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = (movieId) => {
    if (isVertical) {
      setHoveredMovieId(movieId);
    }
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };

  return (
    <section className={styles.movieRow}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.sliderContainer}>
        <button 
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={scrollLeft}
          aria-label="Scroll Left"
        >
          <img src="/arrow_left.png" alt="Left" />
        </button>

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
              
              {movie.isNewEpisode && (
                <div className={styles.episodeBadgeContainer}>
                  <EpisodeBadge />
                </div>
              )}
              
              {movie.isTop10 && (
                <div className={styles.top10BadgeContainer}>
                  <Top10Badge />
                </div>
              )}
              
              {!isVertical && (
                <>
                  <div className={styles.movieInfo}>
                    <span className={styles.movieTitle}>{movie.title}</span>
                  </div>
                  
                  {movie.rating && (
                    <div className={styles.ratingContainer}>
                      <img src="/bintang.svg" alt="Rating" className={styles.starIcon} />
                      <span className={styles.ratingText}>{movie.rating}</span>
                    </div>
                  )}
                </>
              )}

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
