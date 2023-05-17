import "./LandingPage.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { fadeIn } from "../../helpers";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="badge-cmp"
            >
              <h4>
                <span>👋</span> Hey there, It's me
              </h4>
              <h1 data-text="&nbsp;#LokeshPereiro">
                &nbsp;#LokeshPereiro&nbsp;
              </h1>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="tag-cmp"
            >
              <p>I'm a . . . </p>
              <TypeAnimation
                sequence={[
                  "🖥️ Full MERN Stack Developer",
                  4000,
                  "🖌️ Frontend Passionate",
                  4000,
                  "📚 Self-taught Developer",
                ]}
                speed={200}
                wrapper="span"
                repeat={Infinity}
              />
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
