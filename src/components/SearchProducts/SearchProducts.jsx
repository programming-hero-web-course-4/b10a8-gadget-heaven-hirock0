import { NavLink } from "react-router-dom";

const SearchProducts = ({ item }) => {
  return (
    <div className=" p-5 rounded-lg bg-white shadow-lg w-full">
      <div className=" h-72 max-sm:h-52 ">
        <img
          src={item?.product_image}
          alt=""
          className=" w-full h-full object-contain "
        />
      </div>
      <div className=" text-center gap-1 flex flex-col items-center">
        <h1 className=" text-xl font-semibold">{item?.product_title}</h1>
        <h1 className=" opacity-80">
          Price: ${Number(item?.price).toLocaleString()}
        </h1>
        <NavLink
          to={`/details/${item?.product_id}`}
          className={
            "mt-3 w-1/2 py-2 rounded-lg bg-lime-500 hover:bg-lime-600 active:bg-lime-700 text-white"
          }
        >
          <button className="  w-full h-full  ">Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchProducts;
