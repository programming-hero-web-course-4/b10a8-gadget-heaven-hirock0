import { useEffect, useState } from "react";
import ProductCards from "./components/ProductCards/ProductCards";
import { useAppContext } from "./AppContextProvider";
import { NavLink } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const { category, setCategory } = useAppContext();
  const filterProducts = products?.filter((item, index) => {
    if (category == "All Products") {
      return item;
    } else {
      return item?.category == category;
    }
  });

  const onAllProductsWithCategories = async () => {
    try {
      const fetchData = await fetch("/api/informations.json");
      const reqApi = await fetchData.json();
      const categoriesData = await reqApi?.categories;
      setCategories(categoriesData);
      const productsData = await reqApi?.products;
      setProducts(productsData);
    } catch (error) {
      throw new Error(error);
    }
  };

  const onCategory = (label, idx) => {
    setActiveButton(idx);
    setCategory(label);
  };

  useEffect(() => {
    onAllProductsWithCategories();
  }, []);

  return (
    <main className="">
      <section className=" container mx-auto  h-[850px] max-md:h-[800px] max-sm:h-[680px]  ">
        <div className="relative w-full pt-5   text-center bg-purple-500 pb-40 max-sm:pb-32 text-white px-4  rounded-b-lg">
          <h1 className=" text-4xl  max-sm:text-2xl  font-semibold">
            Upgrade Your Tech Accessorize with <br /> with Gadget Heaven
            Accessories
          </h1>
          <div className=" flex items-center justify-center">
            <p className=" text-sm mt-5 w-5/6 ">
              Explore the latest gadgets that will take your experience to the
              next label. Form smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
          </div>
          <div className=" flex items-center justify-center mt-5">
            <NavLink to={"/dashboard"}>
              <button className=" bg-white px-5 py-3 shadow-lg hover:bg-slate-200 active:bg-slate-300 rounded-full text-black">
                Shope Now
              </button>
            </NavLink>
          </div>
          {/* small_card_start */}
          <div className="  absolute -bottom-full max-md:-bottom-80 max-sm:-bottom-72 h-[500px]   right-0 left-0  flex items-center justify-center">
            <div className=" h-full w-5/6  max-sm:h-72 max-md:h-96 border p-5 backdrop:filter backdrop-blur-3xl rounded-lg">
              <div className=" h-full   bg-purple-500 rounded-lg ">
                <img
                  src="/assets/banner.jpg"
                  alt="smallLogo"
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* small_card_end */}
        </div>
      </section>
      <section className=" bg-zinc-100 py-10">
        <div className="  container mx-auto px-5">
          <h1 className=" text-center font-semibold text-3xl max-md:text-2xl">
            Explore Cutting-Edge Gadgets
          </h1>
          {/* cards_start */}
          <div className=" flex max-lg:flex-col gap-3 mt-10">
            {/* left_start */}
            <div className=" bg-white rounded-lg lg:p-5  h-fit  w-1/6 max-lg:w-full ">
              <div className=" lg:flex lg:flex-col lg:items-center gap-5 max-lg:grid max-lg:grid-cols-3 max-sm:grid-cols-2 justify-items-center max-lg:p-5 ">
                {categories?.map((item, index) => (
                  // <CategoryBtn key={index} item={{item:item,index}} />

                  <button
                    key={index}
                    onClick={() => {
                      onCategory(item?.label, index);
                    }}
                    className={`${
                      activeButton === index
                        ? " bg-lime-500 text-lime-500 "
                        : "bg-transparent hover:bg-slate-200 "
                    } transition-all bg-zinc-100 shadow-lg text-sm text-slate-600 w-full  py-3  px-3 rounded-full`}
                  >
                    {item?.label}
                  </button>
                ))}
              </div>
            </div>
            {/* left_end */}
            <div className="w-5/6  max-lg:w-full ">
              {filterProducts?.length !== 0 ? (
                <div className="grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center">
                  {filterProducts?.map((item, index) => (
                    <ProductCards key={index} item={item} />
                  ))}
                </div>
              ) : (
                <div className=" h-[500px]">
                  <h1 className=" text-center text-2xl mt-5 max-sm:text-xl">
                    Data is not available!
                  </h1>
                </div>
              )}
            </div>
          </div>
          {/* cards_end */}
        </div>
      </section>
    </main>
  );
};

export default App;
