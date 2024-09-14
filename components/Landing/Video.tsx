import React from 'react'
import Card from './VideoCards/Card'

const Video = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center p-5">
            <h1 className="text-white text-6xl mb-5">Our Generative AI Works</h1>
            <div className="flex justify-between items-center w-full">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </>
  )
}

export default Video