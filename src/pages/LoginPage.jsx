import styles from "../styles";
import { exp1 } from "../assets";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className={`${styles.paddingX} w-screen  bg-base-200  `}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg)`,
        objectFit: "cover",
        backgroundSize: "",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${styles.boxWidth}  `}>
        <div className="hero min-h-screen  text-slate-100 bg-base-100/20  backdrop-blur-sm ring-1 ring-base-100/20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold ">Login now!</h1>
              <p className="py-6">Login Untuk Melihat Film Kesayanganmu </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-100">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-100">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <Link to="/" className="btn btn-primary">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
