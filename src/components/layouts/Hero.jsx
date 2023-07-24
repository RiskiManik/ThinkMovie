import Search from "../Search";
import Carousel from "../carousel";

const Hero = () => {
  return (
    <div className={`bg-base-200 w-full   `}>
      <Search />
      <Carousel aspek="3/4" kategori="all" />
    </div>
  );
};

export default Hero;
