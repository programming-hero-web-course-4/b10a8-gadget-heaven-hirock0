const ArrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const AllBtn = [1, 2, 3, 4, 5, 6, 7];

const App = () => {
  return (
    <main className="">
      <section className=" container mx-auto  h-[850px] max-md:h-[800px] max-sm:h-[680px]  ">
        <div className="relative w-full pt-5   text-center bg-purple-500 pb-40 max-sm:pb-32 text-white px-4  rounded-b-lg">
          <h1 className=" text-4xl  max-sm:text-2xl  font-semibold">
            Upgrade Your Tech Accessorize with <br /> with Gadget Heaven
            Accessories
          </h1>
          <p className=" text-sm mt-5">
            Explore the latest gadgets that will take your experience to the
            next label. Form smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className=" flex items-center justify-center mt-5">
            <button className=" bg-white px-5 py-3 rounded-full text-black">
              Shope Now
            </button>
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
                {AllBtn.map((item, index) => (
                  <button
                    key={index}
                    className=" bg-zinc-100 shadow-lg text-sm text-slate-600 w-full  py-3  px-3 rounded-full"
                  >
                    All Products
                  </button>
                ))}
              </div>
            </div>
            {/* left_end */}
            <div className="w-5/6  max-lg:w-full ">
              <div className=" max-lg:w-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
                {ArrayNum.map((item, index) => (
                  <div
                    key={index}
                    className=" w-full bg-white p-5 max-sm:p-3 rounded-lg "
                  >
                    <div className="">
                      <img
                        src="https://img.leboncoin.fr/api/v1/lbcpb1/images/b3/02/df/b302df7cf667622f92b633dd02df223912a64208.jpg?rule=ad-large"
                        alt="pod"
                        className=" h-52 max-sm:h-80 w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-5 space-y-1">
                      <h1 className=" text-xl">Dell XPS 13</h1>
                      <h1 className=" opacity-70">Price: 99.9Tk</h1>
                      <button className=" text-sm rounded-full px-2 py-2 border border-purple-500 text-purple-500">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* cards_end */}
        </div>
      </section>
    </main>
  );
};

export default App;
