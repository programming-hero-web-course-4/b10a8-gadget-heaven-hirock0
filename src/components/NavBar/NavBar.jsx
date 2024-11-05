import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { useAppContext } from "../../AppContextProvider";

const NavBar = () => {
  const { carts, wishlists } = useAppContext();
  const location = useLocation();
  const pathname = location.pathname;
  const ref = useRef();
  const [flag, setFlag] = useState(false);
  const [menuFlag, setMenuFlag] = useState(false);
  const [cartFlag, setCartFlag] = useState(false);
  const [wishlistFlag, setWishlistFlag] = useState(false);

  const CartTotalPrice = carts?.reduce(
    (accumulate, item) => accumulate + item.price,
    0
  );

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
      setWishlistFlag(false);
      setCartFlag(false);
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
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              <li>Statistics</li>
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              <li>Dashboard</li>
            </NavLink>
          </ul>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className=" relative flex items-center gap-3"
        >
          <button
            onClick={() => {
              setWishlistFlag(false), setCartFlag((prev) => !prev);
            }}
            className=" relative tooltip"
            data-tip="Carts"
          >
            <TiShoppingCart size={25} />
            {carts.length !== 0 ? (
              <h1 className=" absolute -top-5 text-xs rounded-full w-5 bg-red-600 text-white flex items-center justify-center font-semibold h-5 right-0 ">
                {carts.length}
              </h1>
            ) : null}
          </button>
          {/* ----------- */}
          <div
            className={`${
              !cartFlag ? "hidden" : "block"
            } absolute top-14 bg-red-300 h-52 right-0  w-52`}
          >
            <h1>{CartTotalPrice}</h1>
          </div>
          {/* --------------------------- */}

          <button
            onClick={() => {
              setWishlistFlag((prev) => !prev), setCartFlag(false);
            }}
            className=" tooltip relative"
            data-tip="Wishlist"
          >
            <CiHeart size={25} />
            {wishlists.length !== 0 ? (
              <h1 className=" absolute -top-5 text-xs rounded-full w-5 bg-red-600 text-white flex items-center justify-center font-semibold h-5 right-0 ">
                {wishlists.length}
              </h1>
            ) : null}
            {/* ----------- */}
            <div
              className={`${
                !wishlistFlag ? "hidden" : "block"
              } absolute top-14 bg-red-300  h-52 right-0  w-52`}
            >
              <h1>wichList</h1>
            </div>
            {/* --------------------------- */}
          </button>
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
