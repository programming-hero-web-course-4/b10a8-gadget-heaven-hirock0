import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAppContext } from "../../AppContextProvider";
import { toast } from "react-toastify";
import { onCartHandler } from "../../pages/Details/Details";
const ReUseAbleCards = ({ item }) => {
  const { carts, setCarts, setWishlists, wishlists } = useAppContext();
  const onDeleteHandler = (Id) => {
    if (item[1] === "Wishlists") {
      const filterWishlists = wishlists.filter(
        (item) => item.product_id !== Id
      );
      setWishlists(filterWishlists);
      toast.warn("Wishlist data deleted!");
    } else {
      const filterCarts = carts.filter((item) => item.product_id !== Id);
      setCarts(filterCarts);
      toast.warn("Cart data deleted!");
    }
  };
  

  return (
    <div className=" bg-white p-5 rounded-lg shadow-lg flex gap-5 items-center max-md:flex-col">
      <div className=" flex items-center justify-center ">
        <img
          src={item[0]?.product_image}
          alt={item[0]?.product_title}
          className=" w-52 h-40 rounded-lg"
        />
      </div>

      <div className="  flex w-full max-md:flex-col  items-center gap-2 justify-between ">
        <div className=" space-y-3">
          <h1 className=" text-xl font-semibold">{item[0]?.product_title}</h1>
          <p className=" opacity-70">{item[0]?.description}</p>
          <h1>Price: $ {item[0]?.price}</h1>
          {item[1] === "Wishlists" ? (
            <button onClick={()=>onCartHandler(item[0],carts,setCarts)} className=" bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-700 active:bg-purple-800 shadow-lg">
              Add Cart
            </button>
          ) : null}
        </div>
        <button
          onClick={() => onDeleteHandler(item[0]?.product_id)}
          className=" text-red-500"
        >
          <IoIosCloseCircleOutline size={25} />
        </button>
      </div>
    </div>
  );
};

export default ReUseAbleCards;
