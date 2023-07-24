import { useState } from "react";
import { searchMovie } from "../services/movie.sevice";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (q) => {
    if (q.length > 3) {
      const results = await searchMovie(q);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  return (
    <div className="form-control fixed top-0 z-10 py-2 px-4 w-full md:px-16  ">
      <div className="relative  ">
        <label
          htmlFor="search"
          className="btn btn-ghost btn-circle absolute right-5 md:right-1 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={({ target }) => handleSearch(target.value)}
          className="input border-none focus:outline-offset-0 w-full bg-base-200/20 backdrop-blur-sm rounded-none shadow text-white  "
        />
      </div>
      {searchResults.length > 0 && (
        <div className="overflow-x-auto bg-base-100 text-white/90 max-h-[80vh] scrl ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Overview</th>
                <th>Release Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((data, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask w-10 h-20">
                          <img
                            src={`${import.meta.env.VITE_BASE_IMAGE_URL}${
                              data.poster_path
                            }`}
                            alt={data.title}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold ">
                          {data.title == null ? data.name : data.title}
                        </div>
                        <div className="text-sm opacity-50">
                          {data.media_type}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="truncate max-w-[30vw]">{data.overview}</p>
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {data.vote_average}/10
                    </span>
                  </td>
                  <td>
                    {data.release_date == null
                      ? data.first_air_date
                      : data.release_date}
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Search;
