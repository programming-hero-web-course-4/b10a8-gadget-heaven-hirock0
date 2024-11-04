
import ReUseCards from "../ReUseCards/ReUseCards"
import { BiSortAlt2 } from "react-icons/bi";
const ArrayList = [1, 2, 3, 4, 5, 6];
const WishLists = () => {
    return (
        <main>
      <div className="">
        <div className=" flex max-md:flex-col my-5 items-center justify-between">
          <h1 className=" text-xl font-semibold">Wishlist</h1>
          <div className=" flex max-md:flex-col items-center gap-2">
            <h1 className=" opacity-70">Total cost : 999.99</h1>
            <div className=" flex items-center gap-2">
                <button className=" text-sm flex   items-center  py-2 px-4 border border-purple-500 text-purple-500 rounded-full">
                <span>Sort by Price</span>
                <BiSortAlt2 size={20} />
                </button>
                <button className=" text-sm text-white py-3 px-4 rounded-full bg-purple-600">
                Purchase
                </button>
            </div>
          </div>
        </div>
        {/* cards_star */}

        <div className=" grid gap-5">
          {ArrayList.map((item, index) => (
                <ReUseCards key={index}/>
          ))}
        </div>
        {/* cards_end */}
      </div>
        </main>
    )
}

export default WishLists
