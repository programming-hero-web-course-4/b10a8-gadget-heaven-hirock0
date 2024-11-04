const ProductCards = ({ item }) => {
  return (
    <div className=" w-full bg-white p-5 max-sm:p-3 rounded-lg ">
      <div className="">
        <img
          src={item.product_image}
          alt={item.product_title}
          className=" h-52 max-sm:h-80 w-full rounded-lg object-cover"
        />
      </div>
      <div className="mt-5 space-y-1">
        <h1 className=" text-xl">{item.product_title}</h1>
        <h1 className=" opacity-70">
          Price: {Number(item.price).toLocaleString()} $
        </h1>
        <button className=" text-sm rounded-full px-4 py-2 border border-purple-500 text-purple-500">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
