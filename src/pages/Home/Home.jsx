import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MovieRow from "../../components/MovieRow/MovieRow";
import Footer from "../../components/Footer/Footer";
import { movieCategories } from "../../data/movies";

const Home = ({ addToWatchlist, removeFromWatchlist, isInWatchlist }) => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />

      <main className="home-main">
        <MovieRow
          title="Melanjutkan Tonton Film"
          movies={movieCategories.melanjutkanTonton}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />

        <MovieRow
          title="Top Rating Film dan Series Hari ini"
          movies={movieCategories.topRating}
          isVertical={true}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />

        <MovieRow
          title="Film Trending"
          movies={movieCategories.filmTrending}
          isVertical={true}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />

        <MovieRow
          title="Rilis Baru"
          movies={movieCategories.rilisBaru}
          isVertical={true}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
