const CategoryBtn = ({ item }) => {
  return (
    <>
      <button className=" bg-zinc-100 shadow-lg text-sm text-slate-600 w-full  py-3  px-3 rounded-full">
        {item.label}
      </button>
    </>
  );
};

export default CategoryBtn;
