import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Carts from "./Carts/Carts";
import WishLists from "./WishLists/WishLists";

const Dashboard = () => {
  return (
    <main className="bg-slate-100 pb-20">
      <section className=" bg-purple-500 pt-5 ">
        <div className="">
          <Tabs className={"w-full flex flex-col items-center"}>
            <div className=" text-white flex flex-col items-center text-center container mx-auto px-5 ">
              <h1 className=" text-3xl">Dashboard</h1>
              <p className=" lg:w-4/6">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
            <div className=" mt-5 pb-10">
              <TabList className={"flex max-md:flex-col gap-5 text-white "}>
                <Tab
                  className={
                    " select-none rounded-md cursor-pointer border py-2 w-52  text-center"
                  }
                >
                  Cart
                </Tab>
                <Tab
                  className={
                    " select-none rounded-md cursor-pointer border py-2 w-52  text-center"
                  }
                >
                  Wishlist
                </Tab>
              </TabList>
            </div>

            <div className=" bg-slate-100 w-full  text-black">
              <TabPanel>
                <Carts />
              </TabPanel>
              <TabPanel>
                <WishLists />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
