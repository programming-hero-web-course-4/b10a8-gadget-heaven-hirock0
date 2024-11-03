import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const ref = useRef();
  const [flag, setFlag] = useState(false);
  const [menuFlag, setMenuFlag] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const hightData = ref.current.getBoundingClientRect();
      if (hightData.y == 0) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
    window.addEventListener("click", () => {
      setMenuFlag(false);
    });
  }, []);

  return (
    <nav
      ref={ref}
      className={` ${
        flag && "bg-white"
      } sticky top-0 z-50 text-white flex items-center h-24 mt-5  `}
    >
      <div
        className={`  flex justify-between  items-center ${
          pathname == "/" && !flag
            ? "bg-purple-500 rounded-t-lg "
            : " text-black"
        }  h-full`}
      >
        <div className="">Gadget Heaven</div>
        <div className=" max-md:fixed max-md:right-0 max-md:top-24 ">
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`${
              !menuFlag ? " max-md:translate-x-full " : " max-md:translate-x-0"
            } max-md:transition-all  max-md:flex-col max-md:bg-white max-md:text-black max-md:shadow-lg max-md:items-start max-md:gap-2 max-md:p-5 max-md:rounded-sm  flex items-center gap-5`}
          >
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/dashboard"}>
              <li>Dashboard</li>
            </NavLink>
            <NavLink>
              <li>Home</li>
            </NavLink>
          </ul>
        </div>
        <div className=" flex items-center gap-3">
          <button>cart</button>
          <button>wish</button>
          <button
            onClick={(e) => {
              e.stopPropagation(), setMenuFlag((prev) => !prev);
            }}
            className=" md:hidden"
          >
            <LuMenu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
