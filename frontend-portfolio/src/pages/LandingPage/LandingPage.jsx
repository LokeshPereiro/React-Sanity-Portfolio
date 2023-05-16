import "./LandingPage.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { fadeIn } from "../../helpers";

import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const LandingPage = () => {
  return (
    <>
      <main className="app__home">
        <div className="app__home-info">
          <div className="app__home-badge">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="badge-cmp"
            >
              <h4>
                <span>👋</span> Hello, I am
              </h4>
              <h1>Lokesh Pereiro MF</h1>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              className="tag-cmp app__flex"
            >
              <p className="p-text">MERN Stack Web Developer</p>
              <p className="p-text">Frontend passionate</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__home-img"
        >
          <img src={images.lok} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__home-circles"
        >
          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
      </main>
    </>
  );
};

export default AppWrap(LandingPage, "home");
