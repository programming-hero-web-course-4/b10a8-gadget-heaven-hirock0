import { BiSortAlt2 } from "react-icons/bi";
import ReUseAbleCards from "../../../components/ReUseAbleCards/ReUseAbleCards";
import { useAppContext } from "../../../AppContextProvider";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Carts = () => {
  const navigate = useNavigate();
  const { carts, setCarts } = useAppContext();
  const [sortedCards, setSortedCards] = useState([]);
  const [flag, setFlag] = useState(false);
  const [modalFlag, setModalFlag] = useState(false);
  const [preSavePrice, setPreSavePrice] = useState(0);
  const TotalPrice = carts.reduce(
    (accumulate, item) => accumulate + item.price,
    0
  );

  const sortHandler = () => {
    if (carts.length == 0) {
      toast.warning("Data not available!");
    } else {
      const sortedData = carts.sort((a, b) => b.price - a.price);
      toast.success("It has been sorted by Descending order ");
      setSortedCards(sortedData);
    }
  };

  const onBuyHandler = () => {
    try {
      setPreSavePrice(TotalPrice);
      setCarts([]);
      toast.success("Buy successful!");
    } catch (error) {
      toast.warn("Something goes wrong!");
    }
  };

  useEffect(() => {
    if (modalFlag) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalFlag]);

  return (
    <main>
      <div className="">
        <div className=" flex max-md:flex-col my-5 items-center justify-between">
          <h1 className=" text-xl font-semibold">Cart</h1>
          <div className=" flex max-md:flex-col items-center gap-2">
            <h1 className="  font-semibold text-xl">
              Total cost : ${Number(TotalPrice).toLocaleString()}
            </h1>
            <div className=" flex items-center gap-2">
              <button
                onClick={() => {
                  sortHandler(), setFlag(true);
                }}
                className=" hover:bg-purple-100 active:bg-purple-300 text-sm flex   items-center  py-2 px-4 border border-purple-500 text-purple-500 shadow-lg rounded-full"
              >
                <span>Sort by Price</span>
                <BiSortAlt2 size={20} />
              </button>
              <button
                disabled={carts.length == 0 ? true : false}
                onClick={() => {
                  onBuyHandler(), setModalFlag(!modalFlag);
                }}
                className={`${
                  carts.length == 0
                    ? "  border text-slate-600 bg-slate-200 shadow-lg py-2 flex items-center px-4 rounded-full"
                    : "text-sm text-white py-3 px-4 rounded-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800"
                } `}
              >
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
      {/* modal_section_start */}
      <section
        className={`${
          !modalFlag ? "hidden" : "block"
        } fixed top-0 left-0 right-0 bottom-0 bg-zinc-800/80 z-50 flex items-center justify-center`}
      >
        <div className=" bg-white shadow-lg   p-10 max-sm:p-5 lg:w-[500px]  text-center rounded-lg ">
          <div className=" flex items-center justify-center">
            <img
              src="https://i.ibb.co.com/d5hDkw9/check.png"
              alt="check"
              className=" w-32"
            />
          </div>
          <h1 className=" text-xl font-semibold">Payment Successfully</h1>
          <div className=" divider divider-black"></div>
          <h1 className=" mb-2">Thanks for purchasing</h1>
          <h1 className=" mb-5">
            Total:$ {Number(preSavePrice).toLocaleString()}
          </h1>
          <div className=" flex items-center justify-center">
            <button
              onClick={() => {
                setModalFlag(false),
                  setTimeout(() => {
                    navigate("/");
                  }, 1000);
              }}
              className=" w-5/6 py-2 bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-500 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </section>
      {/* modal_section_end */}
    </main>
  );
};

export default Carts;
