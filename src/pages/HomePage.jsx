import Navbar from "../components/layouts/Navbar.jsx";
import styles from "../styles.js";
import Hero from "../components/layouts/Hero.jsx";
import MovieSlider from "../components/layouts/MovieSlider.jsx";
import Carousel from "../components/carousel.jsx";
import Footer from "../components/layouts/Footer.jsx";

const HomePage = () => {
  return (
    //
    <div className="bg-base-200 w-full overflow-hidden font-poppins">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-base-200  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-base-200 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h3
            className={` text-white font-semibold  sm:text-2xl  ${styles.paddingX}  pt-2`}
          >
            Now Playing!
          </h3>
          <MovieSlider kategori={"now_playing"} page={1} />
          <h3
            className={`  text-white font-semibold pt-2 ${styles.paddingX}  sm:text-2xl `}
          >
            Popular Movie
          </h3>
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
          <h3
            className={`${styles.paddingX}  text-white font-semibold  pb-2  sm:text-2xl  `}
          >
            Best TV
          </h3>
          <div className={`scale-90  `}>
            <Carousel aspek={"video"} kategori="tv" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
