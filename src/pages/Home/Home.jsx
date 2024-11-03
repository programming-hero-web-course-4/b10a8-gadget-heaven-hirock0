import App from "../../App";
const Home = () => {
  return (
    <section className=" container mx-auto  h-[750px] ">
    <div className="relative w-full  text-center bg-purple-500 pb-40 text-white  rounded-b-lg">
      
        <h1 className=" text-4xl  font-semibold">Upgrade Your Tech Accessorize with <br/> with Gadget Heaven Accessories</h1>
        <p className=" text-sm mt-5">
          Explore the latest gadgets that will take your experience to the next label. Form smart devices to <br/> the coolest accessories, we have it all!
        </p>
        <div className=" flex items-center justify-center mt-5">
          <button className=" bg-white px-5 py-3 rounded-full text-black">
            Shope Now
          </button>
        </div>
        {/* small_card_start */}
        <div className="  absolute -bottom-full h-[500px] w-full  flex items-center justify-center">
            <div className=" h-full w-5/6 border p-5 backdrop:filter backdrop-blur-3xl rounded-lg">
              <div className=" h-full  bg-purple-500 rounded-lg ">
                  <img src="/assets/banner.jpg" alt="smallLogo" className=" w-full h-full object-cover" />
              </div>
            </div>
        </div>
        {/* small_card_end */}

    </div>
</section>
  );
};

export default Home;
