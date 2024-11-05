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
  const WishlistTotalPrice = wishlists.reduce(
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

  useEffect(() => {
    const HeaderTitle = document.querySelector("#headTitle");
    const path = pathname.split("/");
    HeaderTitle.innerHTML = `${
      path[1] === "" ? "Gadgets" : path[1]
    } | Gadget Heaven`;
  }, [pathname]);

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
        <div
          className={`${
            !menuFlag ? " max-md:translate-x-full " : " max-md:translate-x-0"
          }  max-md:fixed max-md:right-0 max-md:top-24 max-md:transition-all   max-md:bg-white max-md:h-screen max-md:w-[50vw] max-md:text-black max-md:shadow-lg max-md:gap-2 max-md:p-5 max-md:rounded-sm`}
        >
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`  flex items-center gap-5 max-md:flex-col max-md:items-start `}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive && " bg-black py-2 px-5 rounded-md text-white"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) =>
                isActive && " bg-black py-2 px-5 rounded-md text-white"
              }
            >
              <li>Statistics</li>
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive && " bg-black py-2 px-5 rounded-md text-white"
              }
            >
              <li>Dashboard</li>
            </NavLink>
          </ul>
        </div>
        <div className=" relative flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation(),
                setWishlistFlag(false),
                setMenuFlag(false),
                setCartFlag((prev) => !prev);
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
            } absolute top-14 bg-white text-black p-5 rounded-lg shadow-lg h-52 right-0 flex flex-col items-center  w-52`}
          >
            <h1 className=" font-semibold underline underline-offset-4 text-purple-500">
              Carts
            </h1>
            <h1 className=" font-semibold text-xl max-sm:text-base">
              {carts?.length} Items in Cart
            </h1>
            <div className=" divide-x-2 divider my-2"></div>
            <h1 className="mb-2">Subtotal: ${CartTotalPrice}</h1>
            <NavLink to={"/dashboard"}>
              <button className=" bg-purple-500 px-5 py-2 rounded-full hover:bg-purple-700 active:bg-purple-800 text-white">
                Dashboard
              </button>
            </NavLink>
          </div>
          {/* --------------------------- */}

          <button
            onClick={(e) => {
              e.stopPropagation(),
                setWishlistFlag((prev) => !prev),
                setMenuFlag(false),
                setCartFlag(false);
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
              onClick={(e) => e.stopPropagation()}
              className={`${
                !wishlistFlag ? "hidden" : "block"
              } absolute top-14 bg-white text-black p-5 rounded-lg shadow-lg h-52 right-0  w-52`}
            >
              <h1 className=" font-semibold underline underline-offset-4 text-purple-500">
                Wishlist
              </h1>
              <h1 className=" font-semibold text-xl max-sm:text-base">
                {wishlists?.length} Items in Cart
              </h1>
              <div className=" divide-x-2 divider my-2"></div>
              <h1 className="mb-2">Subtotal: ${WishlistTotalPrice}</h1>
              <NavLink to={"/dashboard"}>
                <button className=" bg-purple-500 px-5 py-2 rounded-full hover:bg-purple-700 active:bg-purple-800 text-white">
                  Dashboard
                </button>
              </NavLink>
            </div>
            {/* --------------------------- */}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation(), setWishlistFlag(false), setCartFlag(false);
              setMenuFlag((prev) => !prev);
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
