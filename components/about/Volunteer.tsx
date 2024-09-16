import React from "react";
import { IoSend } from "react-icons/io5";

const Volunteer = () => {
  return (
    <>
      <div className="bg-white flex justify-center items-center">
        <div className="container flex justify-center items-center flex-col pb-8 border-t-black border-t pt-9">
          <h1 className="text-black text-center text-5xl w-[80%] mb-5">
            Volunteer and Join our Dev Community
          </h1>
          <span className="flex border-b border-black pr-2">
            <label className="mr-3 input bg-transparent input-ghost focus:outline-none border-transparent focus:border-transparent focus:ring-0 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-[36px] w-[36px] opacity-70 text-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none text-black"
                placeholder="Email"
              />
            </label>

            <button>
              <IoSend size={36} className="text-black" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
