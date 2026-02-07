// src/pages/Home/Home.jsx
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MovieRow from "../../components/MovieRow/MovieRow";
import Footer from "../../components/Footer/Footer";
import { movieCategories } from "../../data/movies";

// Menerima props watchlist dari App.jsx (parent)
const Home = ({ addToWatchlist, removeFromWatchlist, isInWatchlist }) => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />

      {/* Movie Sections */}
      <main className="home-main">
        {/* Melanjutkan Tonton Film */}
        <MovieRow
          title="Melanjutkan Tonton Film"
          movies={movieCategories.melanjutkanTonton}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />

        {/* Top Rating Film dan Series Hari ini */}
        <MovieRow
          title="Top Rating Film dan Series Hari ini"
          movies={movieCategories.topRating}
          isVertical={true}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />

        {/* Film Trending */}
        <MovieRow
          title="Film Trending"
          movies={movieCategories.filmTrending}
          isVertical={true}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />

        {/* Rilis Baru */}
        <MovieRow
          title="Rilis Baru"
          movies={movieCategories.rilisBaru}
          isVertical={true}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
