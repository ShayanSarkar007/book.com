import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
    {/*left side*/}
    <div className='md:w-1/2 space-y-8 h-full'>
        <h2 className='font-bold  text-5xl leading-snug  text-black'>Buy and Sell Your Books <span className='text-green-500'>for the best prices</span></h2>
        <p className='md:w-4/5 font-bold text-black'>Storylane is the great site for readers and book recommendations. 
        Our mission is to help readers discover books they love and get more out of reading. storylane launched in october 2024.</p>
    </div>
    <div className="flex items-center space-x-2">
    <input
        type="search"
        name="search"
        id="search"
        placeholder="Search a book"
        className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in"
    />
    <button className="bg-green-500 px-3 py-2 text-white font-medium rounded-md hover:bg-black transition-all ease-in duration-200">
        Search
    </button>
</div>


    {/*right side*/}
    <div>
        <BannerCard></BannerCard>
    </div>
</div>
    </div>
  )
}

export default Banner