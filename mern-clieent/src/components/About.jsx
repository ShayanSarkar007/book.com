import React from 'react';
import "../components/styles/About.css";  // Ensure this path is correct

const About = () => {
  return (
    <div className="about-page bg-black">
      <header className="about-header">
        <h1><span className='text-green-500 text-bold'>About</span><span className='text-white'> Us </span></h1>
       
        <h4 className='text-bold text-green-700'>Welcome to StoryLane – <span className='text-white'>Your Portal to the Best Books! </span></h4>
        
      </header>

      <section className="about-section">
        <h2 className='text-green-500'>Who We Are</h2>
        <p>
          StoryLane is a passionate community of book lovers, curating the best
          reads from around the world. Whether you're a casual reader, an avid book
          collector, or a literary enthusiast, we provide a wide selection of books
          to inspire and engage your mind.
        </p>
      </section>

      <section className="mission-section">
        <h2 className='text-green-500'>Our Mission</h2>
        <p>
          Our mission is to connect readers with the stories that will spark their
          imaginations and broaden their perspectives. We strive to offer a diverse
          range of books that cater to different tastes, from timeless classics to
          modern bestsellers. Through our curated collections and reviews, we aim to
          foster a deeper appreciation for the art of storytelling.
        </p>
        
      </section>
      

      <section className="team-section">
        <h2 className='text-green-500'>Meet the Team</h2>
        <p>
          Our team is composed of passionate readers, writers, editors, and designers
          who believe in the power of books. We're here to guide you on your reading
          journey and provide recommendations that are tailored to your preferences.
        </p>
      </section>

      <section className="contact-section bg-gray-50 py-12">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-green-500 mb-4">Contact Us</h2>
    <p className="text-lg text-gray-700 mb-8">
      We'd love to hear from you! Whether you have a book suggestion, a question,
      or just want to share your thoughts with us, feel free to reach out. You can contact us through the team below:
    </p>
    
    <div className="flex justify-center gap-12">
      <div className="contact-card text-center">
        <img
          src="../src/assets/ppp10.jpg" // Add the correct image path
          alt="John Doe"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-medium text-gray-900">Shayan Sarkar</h3>
        <p className="text-gray-600">Technical Support</p>
        <a href="sayansarkar55@gmail.com" className="text-green-500 hover:underline mt-2 block">
          sayansarkar55@gmail.com
        </a>
      </div>

      <div className="contact-card text-center">
        <img
          src="../src/assets/ppp11.jpg" // Add the correct image path
          alt="Sourav Pal"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-medium text-gray-900">Sourav Pal</h3>
        <p className="text-gray-600">General Inquiries</p>
        <a href="www.souravpal2003@gmail.com" className="text-green-500 hover:underline mt-2 block">
        www.souravpal2003@gmail.com
        </a>
      </div>

      <div className="contact-card text-center">
        <img
          src="../src/assets/ppp12.jpg" // Add the correct image path
          alt="Mark Johnson"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-medium text-gray-900">Mohak Chatterjee</h3>
        <p className="text-gray-600">customer support</p>
        <a href="mohakchatterjee777@gmail.com" className="text-green-500 hover:underline mt-2 block">
        mohakchatterjee777@gmail.com
        </a>
      </div>

      <div className="contact-card text-center">
        <img
          src="../src/assets/ppp13.jpg" // Add the correct image path
          alt="Mark Johnson"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-medium text-gray-900">Trishagni Mondal</h3>
        <p className="text-gray-600">customer support</p>
        <a href="mondaltrishagni@gmail.com" className="text-green-500 hover:underline mt-2 block">
        mondaltrishagni@gmail.com
        </a>
      </div>
      <div className="contact-card text-center">
        <img
          src="../src/assets/ppp14.jpg" // Add the correct image path
          alt="Mark Johnson"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-medium text-gray-900">Devraj Sarkar</h3>
        <p className="text-gray-600">customer support</p>
        <a href="Rup.20025122@gmail.com" className="text-green-500 hover:underline mt-2 block">
        Rup.20025122@gmail.com
        </a>
      </div>
    </div>

    <div className="mt-12">
      <p className="text-lg text-gray-600">
        Alternatively, you can fill out the form below, and we'll get back to you as soon as possible.
      </p>
      {/* Add a contact form here if you want */}
    </div>
  </div>
</section>
</div>


  );
};

export default About;

