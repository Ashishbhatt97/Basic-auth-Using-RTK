import React from "react";
import { NavLinks } from "../../utils/NavLink";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const Navbar: React.FC = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-20 w-full fixed mx-auto justify-between items-center bg-black"
      >
        <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
          <NavLink
            to={"/"}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            Logo
          </NavLink>

          <div className="flex gap-6 ">
            {NavLinks.map((link) => (
              <NavLink to={link.path} key={link.name}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
