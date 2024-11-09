import React from 'react';

// Sample blog post data for a bookstore
const blogPosts = [
  {
    id: 1,
    title: "Top 5 Must-Read Books for Fall 2024",
    author: "Jane Doe",
    date: "October 1, 2024",
    description: "Fall is the perfect time to curl up with a good book. Check out our list of the top 5 must-read books for the season.",
    link: "https://www.townandcountrymag.com/leisure/arts-and-culture/g61837742/best-books-fall-2024/",
  },
  {
    id: 2,
    title: "The Future of E-Books: Trends to Watch",
    author: "Mark Smith",
    date: "September 18, 2024",
    description: "With technology advancing rapidly, e-books are becoming more interactive. Discover the future of digital reading.",
    link: "https://www.thelostbookproject.com/blogs/news/the-future-of-e-books-predictions-and-trends-for-2023-and-beyond",
  },
  {
    id: 3,
    title: "The Art of Book Collecting: Tips for Beginners",
    author: "Emily White",
    date: "August 30, 2024",
    description: "Interested in starting your own book collection? Here's a beginner's guide to collecting rare and valuable books.",
    link: "https://pioneerpublishinggroup.com/a-novices-guide-to-starting-a-book-collection/",
  },
  {
    id: 4,
    title: "10 Classic Novels Everyone Should Read",
    author: "David Brown",
    date: "August 15, 2024",
    description: "From timeless literature to historical masterpieces, here are 10 classic novels that should be on your reading list.",
    link: "https://www.loc.gov/",
  },
  {
    id: 4,
    title: "10 romantic Novels Everyone Should Read",
    author: "David Brown",
    date: "August 15, 2024",
    description: "From timeless literature to historical masterpieces, here are 10 classic novels that should be on your reading list.",
    link: "https://www.google.co.in/books/edition/Nine_Rules_to_Break_When_Romancing_a_Rak/o9n6vwhyL18C?hl=en&gbpv=0",
  },
  {
    id: 4,
    title: "10 fictional Novels Everyone Should Read",
    author: "David Brown",
    date: "August 15, 2024",
    description: "From timeless literature to historical masterpieces, here are 10 classic novels that should be on your reading list.",
    link: "https://en.wikipedia.org/wiki/Fictional_book",
  },
];

const BookstoreBlog = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-green-500 mb-8">StoryLane Blog</h1>
        <p className="text-lg text-white text-bold mb-12">
          Welcome to our StoryLane blog! Here, we share book reviews, reading recommendations, author interviews, and much more. Dive into the world of books with us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">By {post.author} | {post.date}</p>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <a href={post.link} className="text-green-600 hover:text-green-800 font-semibold">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookstoreBlog;
