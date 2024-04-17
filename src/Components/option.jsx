import { OptionItems } from "./OptionItems";

const Option = ({ setFilter, setClick }) => {
  return (
    <div className="max-w-[60vw] mx-auto flex justify-center items-center gap-4 lg:grid-cols-4 md:gap-1 mt-[2rem]  ">
      <ul>
        {OptionItems.map((item) => (
          <li key={item.id}>
            <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border border-slate-200 p-[2px] mb-2">
              <div className="moving-border absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>

              <button
                onClick={() =>
                  {
                    setFilter(item.title.toLocaleLowerCase())
                    setClick(true);
                  }                 
                  }
                className="relative z-20 flex justify-center items-center w-full rounded-3xl border-2 border-gray px-4 py-2 bg-gray-200 item-center "
              >
                {item.title}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Option;
