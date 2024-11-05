import { BiSortAlt2 } from "react-icons/bi";
import ReUseAbleCards from "../../../components/ReUseAbleCards/ReUseAbleCards";
import { useAppContext } from "../../../AppContextProvider";
import { toast } from "react-toastify";
import { useState } from "react";
const Carts = () => {
  const { carts } = useAppContext();
  const [sortedCards, setSortedCards] = useState([]);
  const [flag, setFlag] = useState(false);
  const sortHandler = () => {
    const sortedData = carts.sort((a, b) => b.price - a.price);
    toast.success("It has been sorted by Descending order ");
    setSortedCards(sortedData);
  };

  return (
    <main>
      <div className="">
        <div className=" flex max-md:flex-col my-5 items-center justify-between">
          <h1 className=" text-xl font-semibold">Cart</h1>
          <div className=" flex max-md:flex-col items-center gap-2">
            <h1 className=" opacity-70">Total cost : 999.99</h1>
            <div className=" flex items-center gap-2">
              <button
                onClick={() => {
                  sortHandler(), setFlag(true);
                }}
                className=" hover:bg-purple-100 active:bg-purple-300 text-sm flex   items-center  py-2 px-4 border border-purple-500 text-purple-500 rounded-full"
              >
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

        {carts?.length !== 0 ? (
          <div className=" grid gap-5">
            {!flag
              ? carts?.map((item, index) => (
                  <ReUseAbleCards key={index} item={[item, "Carts"]} />
                ))
              : sortedCards?.map((item, index) => (
                  <ReUseAbleCards key={index} item={[item, "Carts"]} />
                ))}
          </div>
        ) : (
          <div className=" h-[60vh]">
            <h1 className=" text-center text-xl mt-10">There are no data</h1>
          </div>
        )}
        {/* cards_end */}
      </div>
    </main>
  );
};

export default Carts;
