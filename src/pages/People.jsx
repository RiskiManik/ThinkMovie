import Navbar from "../components/layouts/Navbar";
import styles from "../styles";
import Footer from "../components/layouts/Footer";
import PeopelSlider from "../components/layouts/PeopelSlider";
import Search from "../components/Search";

const People = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Search />
          <Navbar />
        </div>
      </div>
      <div className={`bg-base-200 pt-20 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h3
            className={` text-white font-oswald font-semibold  sm:text-2xl  ${styles.paddingX}  pt-2`}
          >
            Trending Actor
          </h3>
          <PeopelSlider kategori={"person"} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default People;
