// src/components/HoverCard/HoverCard.jsx
// Komponen Hover Card Netflix Style untuk poster film vertikal

import styles from './HoverCard.module.css';

const HoverCard = ({ 
  movie, 
  onMouseLeave,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
  isWatchlistRow = false
}) => {
  // Convert vertical image path (V_) to horizontal (H_)
  const getHorizontalImage = (imagePath) => {
    if (imagePath && imagePath.includes('/V_')) {
      return imagePath.replace('/V_', '/H_');
    }
    return imagePath;
  };

  const horizontalImage = getHorizontalImage(movie.image);
  
  // Cek apakah film ini ada di watchlist
  const inWatchlist = isInWatchlist ? isInWatchlist(movie.id) : false;

  // Handler untuk add/remove dari watchlist
  const handleWatchlistClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (inWatchlist || isWatchlistRow) {
      // Jika sudah ada di watchlist atau ini row watchlist, hapus
      onRemoveFromWatchlist && onRemoveFromWatchlist(movie.id);
    } else {
      // Jika belum ada, tambahkan
      onAddToWatchlist && onAddToWatchlist(movie);
    }
  };

  return (
    <div 
      className={styles.hoverCard}
      onMouseLeave={onMouseLeave}
    >
      {/* Bagian Atas - Image */}
      <div className={styles.imageContainer}>
        <img 
          src={horizontalImage} 
          alt={movie.title} 
          className={styles.hoverImage}
        />
      </div>

      {/* Bagian Bawah - Info & Action */}
      <div className={styles.infoContainer}>
        {/* Row 1 - Action Buttons */}
        <div className={styles.actionRow}>
          <button className={styles.actionButton} aria-label="Play">
            <img src="/play_circle.svg" alt="Play" />
          </button>
          
          {/* Tombol Add/Remove Watchlist - Rotasi 405° saat di watchlist */}
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

        {/* Row 2 - Metadata */}
        <div className={styles.metadataRow}>
          <span className={styles.ratingBadge}>13+</span>
          <span className={styles.duration}>2j 33m</span>
        </div>

        {/* Row 3 - Genre */}
        <div className={styles.genreRow}>
          <span className={styles.genreText}>Drama • Komedi • Romantis</span>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;

