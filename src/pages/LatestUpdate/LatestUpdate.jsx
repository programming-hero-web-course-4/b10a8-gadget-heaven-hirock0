import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { CiSearch } from "react-icons/ci";
import { useAppContext } from "../../AppContextProvider";
import { useState } from "react";
import SearchProducts from "../../components/SearchProducts/SearchProducts";
import { FaRegCheckCircle } from "react-icons/fa";

const QualityText = [
  {
    title: "Good Quality",
  },
  {
    title: "Branded Products",
  },
  {
    title: "Good Price",
  },
  {
    title: "Long lasting",
  },
  {
    title: "User friendly",
  },
];

const LatestUpdate = () => {
  const { products } = useAppContext();
  const [searchData, setSearchData] = useState("");
  const [searchProductsArray, setSearchProductsArray] = useState([]);
  const [flag, setFlag] = useState(false);
  const [validator, setValidator] = useState(false);
  const onSearchText = (text) => {
    setSearchData(text);
    if (text == "") {
      setFlag(false);
      setValidator(false);
    }
  };

  const onSearchProducts = (e) => {
    e.preventDefault();
    const findProducts = products.filter((item) =>
      item.product_title.toLowerCase().includes(searchData.toLowerCase())
    );
    setSearchProductsArray(findProducts);
    setFlag(true);
    if (findProducts.length == 0) {
      setValidator(true);
    }
  };

  console.log(validator);
  return (
    <main className=" bg-zinc-100 pb-10 py-5">
      <section className="">
        <Marquee>
          <div className=" flex gap-20">
            {QualityText.map((item, index) => (
              <h1
                key={index}
                className={`${
                  index == 0 && "ml-20"
                } flex items-center gap-2 text`}
              >
                <FaRegCheckCircle className=" text-green-600 " size={20} />
                <span>{item.title}</span>{" "}
              </h1>
            ))}
          </div>
        </Marquee>
      </section>
      <div className=" ">
        {/* ------------------------- */}
        <div className=" text-center mt-5">
          <h1 className=" text-3xl font-semibold">You can find your </h1>
          <h1 className="text-center text-lime-500 font-semibold text-2xl">
            <Typewriter
              options={{
                strings: ["update products .", "latest products ."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        {/* -------------------- */}
        <div className="">
          {/* search_section_start */}
          <div className=" flex items-center justify-center mt-5  h-20">
            <div className=" w-1/2 max-md:w-4/6 max-sm:w-full">
              <form className=" relative bg-white shadow-lg flex items-center rounded-full overflow-hidden">
                <input
                  onChange={(e) => onSearchText(e.target.value)}
                  type="text"
                  name="search"
                  placeholder=" Search"
                  className=" border w-full pl-5 h-12 rounded-full outline-none"
                />
                <button
                  onClick={onSearchProducts}
                  className=" absolute right-0 bg-lime-400 text-black font-semibold h-full flex items-center justify-center w-14"
                >
                  <CiSearch size={25} />
                </button>
              </form>
            </div>
          </div>
          {/* search_section_end */}

          {/* ----- */}

          <div
            className={` ${
              validator
                ? "grid  grid-cols-1 "
                : "grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center"
            }  mt-5 `}
          >
            {!flag ? (
              products?.map((item, index) => (
                <SearchProducts item={item} key={index} />
              ))
            ) : searchProductsArray.length !== 0 ? (
              searchProductsArray?.map((item, index) => (
                <SearchProducts item={item} key={index} />
              ))
            ) : (
              <div className=" h-[50vh]  ">
                <h1 className=" text-center text-xl max-sm:text-base">
                  There are no data found!
                </h1>
              </div>
            )}
          </div>
          {/* ---------- */}
        </div>
        {/* --------------------- */}
      </div>
    </main>
  );
};

export default LatestUpdate;
