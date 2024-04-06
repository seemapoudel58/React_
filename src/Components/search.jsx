const Search = () => {
  return (
    <div className="mx-auto flex w-full max-w-lg items-center justify-center mt-8">
      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border border-slate-200 p-[2px]">
        <div className="moving-border absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
        <div className="relative z-20 flex w-full rounded-3xl bg-white p-2">
          <input
            type="text"
            name="search"
            className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-1 text-gray-500 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            placeholder="Search for anything"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
