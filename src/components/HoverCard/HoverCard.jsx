import styles from './HoverCard.module.css';

const HoverCard = ({ 
  movie, 
  onMouseLeave,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
  isWatchlistRow = false
}) => {
  const getHorizontalImage = (imagePath) => {
    if (imagePath && imagePath.includes('/V_')) {
      return imagePath.replace('/V_', '/H_');
    }
    return imagePath;
  };

  const horizontalImage = getHorizontalImage(movie.image);
  
  const inWatchlist = isInWatchlist ? isInWatchlist(movie.id) : false;

  const handleWatchlistClick = (e) => {
    e.stopPropagation();
    if (inWatchlist || isWatchlistRow) {
      onRemoveFromWatchlist && onRemoveFromWatchlist(movie.id);
    } else {
      onAddToWatchlist && onAddToWatchlist(movie);
    }
  };

  return (
    <div 
      className={styles.hoverCard}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img 
          src={horizontalImage} 
          alt={movie.title} 
          className={styles.hoverImage}
        />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} aria-label="Play">
            <img src="/play_circle.svg" alt="Play" />
          </button>
          
          <button 
            className={styles.actionButton} 
            aria-label={inWatchlist || isWatchlistRow ? "Remove from List" : "Add to List"}
            onClick={handleWatchlistClick}
            title={inWatchlist || isWatchlistRow ? "Hapus dari Daftar Saya" : "Tambah ke Daftar Saya"}
          >
            <img 
              src="/plus.svg"
              alt={inWatchlist || isWatchlistRow ? "Remove" : "Add"}
              className={`${styles.watchlistIcon} ${(inWatchlist || isWatchlistRow) ? styles.rotated : ''}`}
            />
          </button>
          
          <button className={`${styles.actionButton} ${styles.moreButton}`} aria-label="More Info">
            <img src="/arrow_down_circle.svg" alt="More" />
          </button>
        </div>

        <div className={styles.metadataRow}>
          <span className={styles.ratingBadge}>13+</span>
          <span className={styles.duration}>2j 33m</span>
        </div>

        <div className={styles.genreRow}>
          <span className={styles.genreText}>Drama • Komedi • Romantis</span>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;

