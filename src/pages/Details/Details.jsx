import { useParams } from "react-router-dom";
import { useAppContext } from "../../AppContextProvider";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Rate } from "antd";
import { toast } from "react-toastify";

export const onCartHandler = (cart, carts, setCarts) => {
  const validator = carts.some((item) => item.product_id == cart.product_id);
  if (!validator) {
    setCarts((prev) => [...prev, cart]);
    toast.success("Cart successful");
  } else {
    toast.success("Already exist!");
  }
};

export const onWishlistHandler = (wishlist, wishlists, setWishlists) => {
  const validator = wishlists.some(
    (item) => item.product_id == cart.product_id
  );
  if (!validator) {
    setWishlists((prev) => [...prev, wishlist]);
    toast.success("Wishlist successful");
  } else {
    toast.success("Already exist!");
  }
};

const Details = () => {
  const { productId } = useParams();
  const { products, setCarts, carts, wishlists, setWishlists } =
    useAppContext();

  const filterProduct = products?.filter(
    (item) => item?.product_id == productId
  );

  const onRatingHandler = (rating) => {
    toast.success(`You have add ${rating} stars`);
  };

  return (
    <main className="h-[700px] lg:h-screen max-lg:h-[1000px] max-sm:h-[1100px]  bg-slate-100">
      <section className=" relative bg-purple-500 pt-10 pb-32  text-white">
        <div className=" text-center flex flex-col items-center">
          <h1 className=" text-center text-2xl">Product Details</h1>
          <p className=" w-4/6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className=" absolute right-0 left-0 mt-10 flex  items-center justify-center">
          <div className=" flex w-5/6 max-lg:flex-col max-lg:p-5 max-lg:items-center  border bg-white py-5 text-black rounded-lg shadow-lg">
            <div className=" p-5 w-2/5 max-lg:w-4/6 max-sm:w-full flex items-center justify-center">
              <img
                src={filterProduct[0]?.product_image}
                alt=""
                className="  object-cover rounded-sm max-lg:h-72"
              />
            </div>
            <div className=" flex flex-col max-lg:mt-5 justify-center">
              <h1 className=" text-xl font-semibold">
                {filterProduct[0]?.product_title}
              </h1>
              <h1>Price $ {filterProduct[0]?.price}</h1>
              <button
                data-tip="Stock"
                className=" w-fit tooltip mt-3 rounded-full border bg-lime-100 border-lime-600 text-sm px-3 py-1 text-lime-600"
              >
                In Stock
              </button>
              <p className=" mt-3 opacity-70">
                {filterProduct[0]?.description}
              </p>
              <h1 className=" font-semibold mt-3">Specification:</h1>
              <ul className=" list-inside list-decimal">
                {filterProduct[0]?.Specification?.map((item, index) => (
                  <li key={index} className=" opacity-70 ">
                    {item}
                  </li>
                ))}
              </ul>
              <h1 className=" mt-3 font-semibold flex items-center gap-2">
                <span>Rating</span> <FaStar className=" text-yellow-500" />
              </h1>
              <div className=" flex items-center gap-3">
                <Rate
                  defaultValue={filterProduct[0]?.rating || 5}
                  onChange={onRatingHandler}
                  allowHalf
                />
                <h1>{filterProduct[0]?.rating}</h1>
              </div>
              <div className=" flex items-center gap-5 mt-3">
                <button
                  onClick={() => {
                    onCartHandler(filterProduct[0], carts, setCarts);
                  }}
                  className=" tooltip bg-purple-500 text-white px-4 py-1 rounded-full flex items-center gap-2 "
                  data-tip="cart"
                >
                  <span>Add To Cart</span>

                  <TiShoppingCart size={20} />
                </button>
                <div
                  className="tooltip cursor-pointer p-2 border rounded-full flex items-center justify-center w-8 h-8"
                  data-tip="Wishlist"
                  onClick={() => {
                    onWishlistHandler(
                      filterProduct[0],
                      wishlists,
                      setWishlists
                    );
                  }}
                >
                  <button className=" ">
                    <FaRegHeart className="  " size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
