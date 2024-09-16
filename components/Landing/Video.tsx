import React from 'react'
import VideoCard from './Cards/VideoCard'

const Video = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center p-[3rem] bg-black">
            <h1 className="text-white text-6xl mb-5">Our Generative AI Projects</h1>
            <div className="flex justify-between items-center w-full flex-wrap">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    </>
  )
}

export default Video