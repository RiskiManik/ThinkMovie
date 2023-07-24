import { useEffect, useState } from "react";
import styles from "../styles";
import MovieSlider from "../components/layouts/MovieSlider";
import { useParams, Link } from "react-router-dom";
import { detailMovie, detailTv } from "../services/movie.sevice";
import Navbar from "../components/layouts/Navbar";

const DetailMovie = () => {
  const [DetailMovie, setDetailMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    detailMovie(movieId)
      .then((data) => setDetailMovie(data))
      .catch(() => {
        detailTv(movieId).then((data) => setDetailMovie(data));
      });
  }, [movieId]);

  return (
    <div
      className={`h-full w-[96.7vw] sm:w-[98.79vw] pb-20  ${styles.paddingX} ${styles.paddingY} bg-base-200`}
    >
      <Navbar />
      <div
        className={`card lg:card-side bg-base-100 shadow-xl mb-10  ${styles.boxWidth} rounded-none text-slate-100`}
      >
        <figure>
          <img
            src={`${import.meta.env.VITE_BASE_IMAGE_URL}${
              DetailMovie.backdrop_path
            }`}
            alt={
              DetailMovie.title == null ? DetailMovie.name : DetailMovie.title
            }
            className="  object-cover  "
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title text-4xl font-bold self-center font-oswald">
            {DetailMovie.title == null ? DetailMovie.name : DetailMovie.title}
          </h2>
          <p className="indent-2">{DetailMovie.overview}</p>
          <div className="flex gap-2">
            <div className="badge badge-outline badge-warning">
              {DetailMovie.vote_average}/10{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star ml-1"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>

            <div className="badge badge-outline badge-info">
              {DetailMovie.vote_count}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="badge badge-md">{DetailMovie.popularity}</div>
          </div>
          <div className="card-actions justify-end">
            <Link to={DetailMovie.homepage} className="btn btn-primary">
              Watch
            </Link>
            <Link to={"/"} className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="ss:-ml-16 -ml-4">
        <h3
          className={`${styles.paddingX} ml-2 sm:text-2xl text-white font-semibold mt-4 -mb-2`}
        >
          List Movie
        </h3>
        <MovieSlider kategori={"top_rated"} page={Math.random() * 10} />
      </div>
    </div>
  );
};

export default DetailMovie;
