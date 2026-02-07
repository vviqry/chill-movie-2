// src/data/movies.js - Data film dengan gambar spesifik

// Data untuk "Melanjutkan Tonton Film" dengan urutan yang benar
const melanjutkanTontonMovies = [
  { id: 1, title: "Don't Look Up", image: '/H_DLU.png', rating: '4.5/5' },
  { id: 2, title: 'All of Us Are Dead', image: '/H_AOUAD.png', rating: '4.6/5' },
  { id: 3, title: 'The BATMAN', image: '/H_TB.png', rating: '4.2/5' },
  { id: 4, title: 'A Man Called Otto', image: '/H_O.png', rating: '4.4/5' },
  { id: 5, title: 'Alice in Borderland', image: '/H_AIB.png', rating: '4.9/5' },
  { id: 6, title: 'Dillan 1991', image: '/H_D.png', rating: '11/100' },
  { id: 7, title: 'Jurassic World', image: '/H_JW.png', rating: '3.2/5' },
];

// Data untuk "Top Rating Film dan Series Hari ini"
const topRatingMovies = [
  { id: 101, title: 'Suzume', image: '/V_S.png', isNewEpisode: true },
  { id: 102, title: 'Jurassic World', image: '/V_JW.png' },
  { id: 103, title: 'Sonic 2', image: '/V_S2.png' },
  { id: 104, title: 'All of Us Are Dead', image: '/V_AOUAD.png', isNewEpisode: true },
  { id: 105, title: 'Big Hero 6', image: '/V_BH6.png' },
  { id: 106, title: 'Guardians of the Galaxy', image: '/V_GOTG.png' },
  { id: 107, title: 'La La Land', image: '/V_LM.png' },
  { id: 108, title: 'Moana', image: '/V_M.png' },
];

// Data untuk "Film Trending" - Semua item memiliki isTop10: true
const filmTrendingMovies = [
  { id: 201, title: 'The Tomorrow War', image: '/V_TTW.png', isTop10: true },
  { id: 202, title: 'Ant-Man', image: '/V_AM.png', isTop10: true },
  { id: 203, title: 'Guardians of the Galaxy', image: '/V_GOTG.png', isTop10: true },
  { id: 204, title: 'A Man Called Otto', image: '/V_O.png', isTop10: true },
  { id: 205, title: 'La La Land', image: '/V_LM.png', isTop10: true },
  { id: 206, title: 'Sonic 2', image: '/V_S2.png', isTop10: true },
  { id: 207, title: 'All of Us Are Dead', image: '/V_AOUAD.png', isTop10: true },
  { id: 208, title: 'Big Hero 6', image: '/V_BH6.png', isTop10: true },
];

// Data untuk "Rilis Baru"
const rilisBaruMovies = [
  { id: 301, title: 'La La Land', image: '/V_LM.png', isTop10: true },
  { id: 302, title: 'Duty After School', image: '/V_DAS.png', isNewEpisode: true },
  { id: 303, title: 'Big Hero 6', image: '/V_BH6.png' },
  { id: 304, title: 'All of Us Are Dead', image: '/V_AOUAD.png', isNewEpisode: true },
  { id: 305, title: 'Missing', image: '/V_Mis.png' },
  { id: 306, title: 'Duty After School 2', image: '/V_DAS.png' },
  { id: 307, title: 'Suzume', image: '/V_S.png' },
  { id: 308, title: 'Jurassic World', image: '/V_JW.png' },
];

// Generate array untuk gambar horizontal (h) - 37 gambar
const generateHorizontalMovies = () => {
  const movies = [];
  for (let i = 1; i <= 37; i++) {
    movies.push({
      id: i + 400,
      title: `Film ${i}`,
      image: `/h (${i}).png`,
      rating: (Math.random() * 2 + 3).toFixed(1),
    });
  }
  return movies;
};

// Generate array untuk gambar vertical (v) - 33 gambar
const generateVerticalMovies = () => {
  const movies = [];
  for (let i = 1; i <= 33; i++) {
    movies.push({
      id: i + 500,
      title: `Series ${i}`,
      image: `/v (${i}).png`,
      rating: (Math.random() * 2 + 3).toFixed(1),
    });
  }
  return movies;
};

// Export data
export const horizontalMovies = generateHorizontalMovies();
export const verticalMovies = generateVerticalMovies();

// Kategori film untuk Home page
export const movieCategories = {
  melanjutkanTonton: melanjutkanTontonMovies,
  topRating: topRatingMovies,
  filmTrending: filmTrendingMovies,
  rilisBaru: rilisBaruMovies,
  seriesPopuler: verticalMovies.slice(0, 10),
};

export default horizontalMovies;
