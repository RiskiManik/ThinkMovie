import Slider from "react-slick";
import { useEffect, useState } from "react";
import { trendingMovie } from "../services/movie.sevice";
import { Link } from "react-router-dom";

const Carousel = ({ aspek, kategori }) => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    trendingMovie(kategori).then((data) => {
      setListMovie(data);
    });
  }, []);
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };
  return (
    <div
      className={` w-[99.7vw] sm:max-h-screen sm:w-[98.79vw] 
     bg-base-200 overflow-hidden  `}
    >
      <Slider {...settings}>
        {listMovie.map((data, i) => (
          <div key={i}>
            <Link to={`/detail/${data.id}`}>
              <img
                src={`${import.meta.env.VITE_BASE_IMAGE_URL}${
                  data.backdrop_path
                }`}
                alt={data.title == null ? data.name : data.title}
                className={`aspect-${aspek}  w-[620px] sm:w-[98.79vw]  object-cover object-center `}
              />
              <div className="w-full h-full pb-10 text-white font-oswald absolute bg-base-200/40 bottom-0  z-10 ">
                <div className=" absolute bottom-0 sm:bottom-[25%] z-50 px-4 pb-2 flex flex-row-reverse items-center gap-4">
                  <div>
                    <h1 className=" text-xl sm:text-4xl py-1 font-bold drop-shadow-lg ">
                      {data.title == null ? data.name : data.title}
                    </h1>
                    <p className="overflow-hidden pt-1 indent-2 text-slate-300 font-poppins max-w-[50vw] max-h-24 sm:max-h-40">
                      {data.overview}
                    </p>
                  </div>
                  <img
                    src={`${import.meta.env.VITE_BASE_IMAGE_URL}${
                      data.poster_path
                    }`}
                    alt={data.title == null ? data.name : data.title}
                    className="w-[100px] h-[200px] sm:w-[200px] sm:h-[400px]  object-cover object-center shadow-lg"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
