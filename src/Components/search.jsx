import React from "react";

const Search = () => {
  return (
    <label class="relative block">
      <input
        class=" max-w-[20rem] mx-auto placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
    </label>
  );
};

export default Search;
