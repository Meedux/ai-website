import React from 'react'
import NewsCard from './Cards/NewsCard'

const News = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center p-[3rem] bg-white">
            <div className="divider-neutral divider mb-[2rem]"></div>
            <h1 className="text-black text-6xl mb-5">Recent News</h1>
            <div className="flex justify-between items-center w-full flex-wrap">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </>
  )
}

export default News