import { useAppContext } from "../../../AppContextProvider";
import ReUseAbleCards from "../../../components/ReUseAbleCards/ReUseAbleCards";
const WishLists = () => {
  const { wishlists } = useAppContext();
  return (
    <main>
      <div className="">
        <div className=" flex max-md:flex-col my-5 items-center justify-between">
          <h1 className=" text-xl font-semibold">Wishlist</h1>
        </div>
        {/* cards_star */}

        {wishlists?.length !== 0 ? (
          <div className=" grid gap-5">
            {wishlists?.reverse().map((item, index) => (
              <ReUseAbleCards key={index} item={[item, "Wishlists"]} />
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

export default WishLists;
