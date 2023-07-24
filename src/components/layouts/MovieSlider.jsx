import Slider from "react-slick";
import Card from "../Card";
import styles from "../../styles";
import { useEffect, useState } from "react";
import { getImageMovie } from "../../services/movie.sevice";
import { Link } from "react-router-dom";

const MovieSlider = ({ kategori, page }) => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getImageMovie(kategori, page).then((data) => {
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
            <Link replace to={`/detail/${data.id}`} key={i}>
              <Card
                src={`${import.meta.env.VITE_BASE_IMAGE_URL}${
                  data.poster_path
                }`}
                date={data.overview}
                title={data.title}
                vote={data.vote_average}
                count={data.vote_count}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
