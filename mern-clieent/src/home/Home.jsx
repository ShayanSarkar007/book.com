import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'



const Home = () => {
  return (

    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      
    </div>
    /*<div className=''>
    <div className='h-screen'>Home</div>

    <div className='h-screen bg-red-500'></div>
    

    </div>*/
  )
}

export default Home