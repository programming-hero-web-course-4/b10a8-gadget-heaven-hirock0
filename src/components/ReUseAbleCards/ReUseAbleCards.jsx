import { IoIosCloseCircleOutline } from "react-icons/io";
const ReUseAbleCards = () => {
  return (
    <div className=" bg-white p-5 rounded-lg shadow-lg flex gap-5 items-center max-md:flex-col">
      <div className=" flex items-center justify-center ">
        <img
          src="/assets/banner.jpg"
          alt=""
          className=" w-52 h-40 rounded-lg"
        />
      </div>

      <div className="  flex w-full max-md:flex-col  items-center gap-2 justify-between ">
        <div className=" space-y-3">
          <h1 className=" text-xl font-semibold">Samsung Galaxy S23 Ultra</h1>
          <p className=" opacity-70">
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>
          <h1>Price: $ 999.99</h1>
        </div>
        <button className=" text-red-500">
          <IoIosCloseCircleOutline size={25} />
        </button>
      </div>
    </div>
  );
};

export default ReUseAbleCards;
