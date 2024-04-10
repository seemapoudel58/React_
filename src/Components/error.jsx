import { AiOutlineWarning } from "react-icons/ai";

const Error = ({ message }) => {
  return (
    <div>
      <AiOutlineWarning size={250} color="red" className="mx-auto mt-[5rem] " />
      <h1 className="font-bold text-2xl m-3 mb-0">{message}</h1>
    </div>
  );
};

export default Error;
