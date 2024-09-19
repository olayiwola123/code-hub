import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", link: "#" },
  { id: 3, title: "About Us", link: "#" },
  { id: 4, title: "Our Team", path: "/team" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        <div>
          <h1 className="font-bold text-3xl text-primary">Code Hub</h1>
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <Link to={"/login"}>
              <button className="primary-btn">Sign In</button>
            </Link>
          </ul>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-4xl">
            {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          className="fixed top-0 left-0 w-3/4 h-full bg-secondary shadow-lg z-50 flex flex-col p-4"
        >
          <ul className="flex flex-col gap-6 mt-8">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="text-lg text-gray-800 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <Link to={'/login'}>
              <button className="primary-btn mt-6" onClick={toggleMobileMenu}>
                Sign In
              </button>
            </Link>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
