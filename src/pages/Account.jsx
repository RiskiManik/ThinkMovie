import { Link } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import styles from "../styles";

const Account = () => {
  return (
    <div className={`${styles.paddingX} `}>
      <div className={`${styles.boxWidth} `}>
        <div className="overflow-x-auto h-full ">
          <table className="table table-pin-rows text-white font-poppins ">
            <thead>
              <tr>
                <th className=" text-slate-500 font-bold text-2xl ">Account</th>
              </tr>
            </thead>
            <tbody className="font-semibold text-base ">
              <tr>
                <td>
                  <Link> Notification</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link> Subscriptions</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link> Following</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link> Liked Movie</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link> Watch Letter</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link> My Playlist</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link> Settings</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={"/login"}> Logout</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Account;
