import { useState } from "react";
import search_50px from "@/assets/icons/search_50px.png";
import shopping_cart_50px from "@/assets/icons/shopping_cart_50px.png";
import user_50px from "@/assets/icons/user_50px.png";
import close_50px from "@/assets/icons/close_50px.png";
import { LINKS } from "@/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="bg-white fixed z-40 w-full ">
      {showMenu && (
        <nav className="fixed z-40 w-[90%] shadow-2xl  shadow-slate-800 h-full right-0 animate-show bg-white ">
          <div className="flex justify-end">
            <button onClick={handleCloseMenu}>
              <img className="h-7 m-5" src={close_50px} alt="" />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-6 text-sm">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="uppercase text-gray-500 transition hover:text-gray-500/75"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-6 pt-7 px-1">
            <button>
              <img className="h-5" src={search_50px} alt="" />
            </button>
            <button>
              <img className="h-5" src={user_50px} alt="" />
            </button>
            <button>
              <img className="h-5" src={shopping_cart_50px} alt="" />
            </button>
          </div>
        </nav>
      )}
      <div className="lg:px-24 px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/Home" className="font-medium lg:text-2xl text-lg">
              UI Store
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.link}
                      className="uppercase text-gray-500 transition hover:text-gray-500/75"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="lg:flex md:flex hidden justify-center space-x-6 ">
                <button>
                  <img className="h-5" src={search_50px} alt="" />
                </button>
                <button>
                  <img className="h-5" src={user_50px} alt="" />
                </button>
                <button>
                  <img className="h-5" src={shopping_cart_50px} alt="" />
                </button>
              </div>
              <div className="block md:hidden">
                <button
                  onClick={handleShowMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
