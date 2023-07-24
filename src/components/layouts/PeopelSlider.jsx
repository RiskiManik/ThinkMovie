import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "../../styles";

import Card from "../Card";
import { trendingMovie } from "../../services/movie.sevice";

const PeopelSlider = ({ kategori }) => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    trendingMovie(kategori).then((data) => {
      setListMovie(data);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          className: "center",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      className={` w-[96.7vw] sm:w-[98.79vw] sm:${styles.paddingX} pr-0 overflow-hidden pt-2  `}
    >
      <Slider {...settings}>
        {listMovie.map((data, i) => (
          <div key={i}>
            <Card
              src={`${import.meta.env.VITE_BASE_IMAGE_URL}${data.profile_path}`}
              date={data.original_name}
              title={data.name}
              count={data.popularity}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PeopelSlider;
