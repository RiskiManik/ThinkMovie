const Card = ({ src, title, count, vote, date }) => {
  return (
    <div className="card md:w-[240px] w-[175px]  relative rounded-sm bg-base-200 my-4 mx-2  ">
      <figure>
        <img
          src={src}
          alt={title}
          className="aspect-[2/3]  w-full object-cover "
        />
      </figure>
      <div className="card-body p-0 gap-0 leading-3  text-white">
        <h2 className="card-title md:max-w-[240px] max-w-[175px] leading-5  w-full h-24  bg-gradient-to-t from-base-300 pl-1  pt-4 absolute sm:bottom-[12.5%] bottom-[16%]">
          {title}
        </h2>
        <p className=" text-slate-500 truncate text-base pl-1"> {date}</p>
        <div className="card-actions pt-2 justify-end">
          {vote != null && (
            <div className="badge badge-outline text-warning ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star mr-1"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>{" "}
              {`${vote}/10`}
            </div>
          )}
          <div className="badge badge-outline text-info ">
            {count}
            {"   "}
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
        </div>
      </div>
    </div>
  );
};

const validasi = (gender) => {
  if (gender === 1) {
    return "Female";
  } else if (gender === 2) {
    return "Male";
  } else if (gender === 3) {
    return "non-Binary";
  } else return "No set";
};
export default Card;
