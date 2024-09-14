import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Image src={"/img.jpg"} alt="Image" width={227} height={300} />
        <div className=" border-t-white border-t-2 mt-5 w-full">
            <div className="flex justify-between items-center">
                <span>Name</span>
                <span>Year</span>
            </div>

            <h1 className="text-lg">Title</h1>
        </div>
    </div>
  )
}

export default Card