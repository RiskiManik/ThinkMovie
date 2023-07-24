import MovieSlider from "../components/layouts/MovieSlider";
import Carousel from "../components/carousel";
import Footer from "../components/layouts/Footer";
import styles from "../styles";
import Navbar from "../components/layouts/Navbar";
import Search from "../components/Search";

const ExploreMovie = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Search />
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-base-200  pt-20 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h3
            className={` text-white font-semibold  sm:text-2xl  ${styles.paddingX}  pt-2`}
          >
            Now Playing!
          </h3>
          <MovieSlider kategori={"now_playing"} page={1} />
          <MovieSlider kategori={"now_playing"} page={2} />
          <h3
            className={`  text-white font-semibold pt-2 ${styles.paddingX}  sm:text-2xl `}
          >
            Popular Movie
          </h3>
          <MovieSlider kategori={"popular"} page={Math.random() * 30} />
          <MovieSlider kategori={"popular"} page={Math.random() * 30} />
          <div className={`scale-90   `}>
            <Carousel aspek={"video"} kategori={"movie"} />
          </div>
          <h3
            className={`${styles.paddingX}  overflow-hidden  sm:text-2xl   text-white font-semibold mt-4 -mb-2`}
          >
            Top Rated Movie
          </h3>
          <MovieSlider kategori={"top_rated"} page={Math.random() * 10} />
          <MovieSlider kategori={"top_rated"} page={Math.random() * 20} />
          <h3
            className={`${styles.paddingX}  text-white font-semibold  pb-2  sm:text-2xl  `}
          >
            Best TV
          </h3>
          <div className={`scale-90  `}>
            <Carousel aspek={"video"} kategori="tv" />
          </div>
          <h3
            className={`${styles.paddingX}  overflow-hidden  sm:text-2xl   text-white font-semibold mt-4 -mb-2`}
          >
            Upcoming Movie
          </h3>
          <MovieSlider kategori={"upcoming"} page={Math.random() * 10} />
          <MovieSlider kategori={"upcoming"} page={Math.random() * 20} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ExploreMovie;
