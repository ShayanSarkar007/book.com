import React, { useState, useEffect } from 'react'


const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
      
    
  },[])
 
      
return (
  <div className='mt-28 px-2 lg:px-24 bg-black'>
      <h2 className='text-5xl text-white font-bold text-center mb-12'><span className='text-green-500'>All Books</span> are here</h2>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col md:flex-row md:items-center bg-base-100 shadow-xl rounded-xl overflow-hidden">
              <figure className="md:w-1/2 h-[300px] md:h-[400px]">
                <img
                  src={book.imageURL} // Use the image URL from your book data
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body md:w-1/2 p-6 md:p-8">
                <h2 className="card-title text-2xl md:text-3xl mb-4">{book.title}</h2>
                <p className="text-base md:text-lg mb-6">{book.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Author:</span>
                    <span>{book.authorName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Price:</span>
                    <span>20${book.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Category:</span>
                    <span>{book.category}</span>
                  </div>
                </div>

                <div className="card-actions flex justify-end items-center gap-4">
                  <button className="btn btn-outline">Add to Cart</button>
                  <button className="btn btn-primary bg-green-500 text-black">Buy Now</button>
                </div>

                
              
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
)
}
  
export default Shop