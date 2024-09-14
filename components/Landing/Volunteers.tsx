import React from "react";
import { IoSend } from "react-icons/io5";

const Volunteers = () => {
  return (
    <>
      <div className="bg-white p-[3rem]">
        <div className="divider-neutral divider mb-[2rem]"></div>
        <h1 className="text-black text-center text-6xl mb-5">
          Community
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col bg-[#F2F2F2] h-[15rem]">
          <h1 className="text-black text-center text-2xl w-[40%] mb-5">
            Volunteer and Join our Dev Community
          </h1>
          <span className="flex border-b border-black pr-2">
            <label className="mr-3 input bg-transparent input-ghost focus:outline-none border-transparent focus:border-transparent focus:ring-0 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-slate-700"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none" placeholder="Email" />
            </label>

            <button>
                <IoSend className="text-slate-700" />
            </button>
          </span>
        </div>
    </>
  );
};

export default Volunteers;
