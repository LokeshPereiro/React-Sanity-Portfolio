import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import "./WaveNav.scss";

export const WaveNav = () => {
  return (
    <div className="rrss-container">
      <ul>
        <li className="list">
          <a href="#">
            <span className="icon">
              <BsTwitter />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <BsInstagram />
            </span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
        </li>

        <div className="rollingBall"></div>
      </ul>
    </div>
  );
};
