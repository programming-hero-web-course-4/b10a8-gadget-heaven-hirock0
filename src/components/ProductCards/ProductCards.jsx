import { Link } from "react-router-dom";

const ProductCards = ({ item }) => {
  return (
    <div className=" w-full bg-white p-5 max-sm:p-3 rounded-lg ">
      <div className=" h-72 max-sm:h-52  flex items-center justify-center">
        <img
          src={item.product_image}
          alt={item.product_title}
          className="  w-full h-full object-contain "
        />
      </div>
      <div className="mt-5 space-y-1 max-md:text-sm max-sm:text-base max-sm:flex max-sm:flex-col ">
        <h1 className=" text-xl max-md:text-base max-sm:text-2xl">
          {item.product_title}
        </h1>
        <h1 className=" opacity-70">
          Price: {Number(item.price).toLocaleString()} $
        </h1>
        <Link to={`/details/${item.product_id}`}>
          <button className="  hover:bg-slate-100 active:bg-slate-300 text-sm rounded-full px-4 py-2 border border-purple-500 text-purple-500">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
