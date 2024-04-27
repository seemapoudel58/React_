const Footer = ({ pages, totalPages, setPages }) => {
  return (
    <div className=" flex justify-center items-center gap-9 mt-[2rem]">
      {pages > 1 && (
        <button
          className="border rounded-md p-2 bg-black text-white text-lg  transition duration-300 ease-in-out hover:scale-105"
          onClick={() => {
            setPages(pages - 1);
          }}
        >
          Previous
        </button>
      )}
      <h3> Page: {pages}</h3>
      {pages < totalPages && (
        <button
          className="border rounded-md p-2 bg-black text-white text-lg transition duration-300 ease-in-out hover:scale-105"
          onClick={() => {
            setPages(pages + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Footer;
