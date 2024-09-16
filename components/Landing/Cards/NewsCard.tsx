import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = () => {
  return (
    <>
      <div className="card bg-transparent w-[20rem] shadow-xl mb-5">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body pb-2">
          <h2 className="card-title text-sm text-slate-300">May, 2024</h2>
          <p className="text-black text-lg font-bold">[ IMPORTANT ] If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end mt-[3rem]">
            <Link href="#">
                <span className="flex text-slate-300">Read Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
