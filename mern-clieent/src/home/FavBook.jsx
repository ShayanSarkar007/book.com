import React from 'react'
import FavBookImg from "../assets/favbook.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
   <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
    <div className='md:w-1/2'>
        <img src={FavBookImg} alt='' className='rounded md:w-10/12'/>
    </div>
    <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-green-700'>Book Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Books are gateways to knowledge, stories, and imagination, serving countless purposes across history and cultures. They come in many forms, from novels and poetry collections to nonfiction works on science, history, philosophy, and much more. Some books entertain, like fiction novels that transport readers into fantasy worlds or thrillers that keep them on the edge of their seats. Others inform, such as textbooks, self-help books, or biographies, each offering insight or wisdom on various topics.

Books have evolved over time from handwritten manuscripts to printed editions and now digital formats like e-books and audiobooks. </p>
{/*stats*/}
    <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
    <div>
        <h3 className='text-3xl font-bold'>800+</h3>
        <p className='text-base'>Book Listing</p>
    </div>
    <div>
        <h3 className='text-3xl font-bold'>550+</h3>
        <p className='text-base'>Register Users</p>
    </div>
    <div>
        <h3 className='text-3xl font-bold'>1000+</h3>
        <p className='text-base'>PDF Downloads</p>
    </div>
   </div>

   <Link to="/shop" className='mt-8 block'><button className='bg-green-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
   </div>
   </div>
  )
}

export default FavBook