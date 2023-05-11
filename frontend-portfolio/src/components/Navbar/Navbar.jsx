import { useState } from "react";
import { navLinks } from "../../helpers";
import { images } from "../../constants";
import "./Navbar.scss";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        {/* Logo */}
        <div className="app__navbar-logo">
          <a href="#home">
            <img src={images.logo} alt="logo" />
          </a>
        </div>

        {/* Upper Nav-Links */}
        <ul className="app__navbar-links">
          {navLinks.map((link) => (
            <li className="app__flex p-text" key={`link-${link}`}>
              <div />
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Side Nav Menu*/}
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {navLinks.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};
