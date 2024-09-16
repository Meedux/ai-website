import React from 'react'

const Photos = () => {
  return (
    <>
    <div className="bg-white flex justify-center items-center pt-8">
        <div className="container">
            <h1 className="text-center text-black text-2xl mb-10">Eiusmod dolore velit do irure aute laborum pariatur et et aliqua. Reprehenderit culpa non irure reprehenderit nostrud sunt quis nisi exercitation cillum elit elit magna sunt. Deserunt deserunt duis et aliquip qui sit elit sunt pariatur aliquip..</h1>
            

            {/* Photos Section */}
            {/* Photos Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {/* First row */}
            <div className="col-span-2 flex justify-center items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 1"
                className="w-full object-cover h-auto"
              />
            </div>

            {/* Second row */}
            <div className="col-span-1">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 2"
                className="w-full object-cover h-auto"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 3"
                className="w-full object-cover h-auto"
              />
            </div>

            {/* Third row */}
            <div className="col-span-2">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder 4"
                className="w-full object-cover h-auto"
              />
            </div>

            {/* Fourth row */}
            <div className="col-span-1">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 5"
                className="w-full object-cover h-auto"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 6"
                className="w-full object-cover h-auto"
              />
            </div>

            {/* Fifth row */}
            <div className="col-span-2">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder 7"
                className="w-full object-cover h-auto"
              />
            </div>

            {/* Sixth row */}
            <div className="col-span-1 flex justify-center items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder 8"
                className="w-full object-cover h-auto"
              />
            </div>
          </div>


            <h1 className="text-center text-black text-2xl mb-8">Eiusmod dolore velit do irure aute laborum pariatur et et aliqua. Reprehenderit culpa non irure reprehenderit nostrud sunt quis nisi exercitation cillum elit elit magna sunt. Deserunt deserunt duis et aliquip qui sit elit sunt pariatur aliquip..</h1>
        </div>
    </div>
    </>
  )
}

export default Photos