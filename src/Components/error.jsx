import React from 'react';
import { AiOutlineWarning} from 'react-icons/ai';

const Error = () => {
  return (
    <div>
      <AiOutlineWarning size={250} color="red" className='mx-auto mt-[5rem] ' />
      <h1 className='font-bold text-2xl m-3 mb-0'>Error 404 - Page Not Found</h1>
    </div>
  );
};

export default Error;
