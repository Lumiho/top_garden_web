import React from 'react';
import exampleImg from '../Media/irrigationImg.png'
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="bg-cover bg-center bg-no-repeat text-[#F4F1DE] h-[70vh] flex flex-col justify-center text-center"
        style={{
          backgroundImage: `url(${exampleImg})`
        }}
      >

        <h1 className="text-7xl md:text-8xl font-bold">Welcome to Top Garden</h1>
        <p className="mt-4 text-xl md:text-2xl">Turning your outdoor spaces into dreamscapes.</p>
      </section>

      <section className="bg-[#F4F1DE] text-center py-10">
        <h2 className="text-2xl font-bold text-[#4A7A63]">About Us</h2>
        <p className="text-lg text-[#4A7A63] mt-4">
          At Top Garden, we specialize in creating stunning outdoor spaces. From landscaping to irrigation, our team brings your vision to life.
        </p>
        <p className='text-lg text-[#4A7A63] mt-4'>Will add a bit more information about the company and a learn more link perhaps.</p>
      </section>

      <section className="bg-[#4A7A63] text-[#F4F1DE] py-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#E07A5F]">Contact Us</h2>
        <p className="text-center mb-8">Let us help you transform your outdoor spaces!</p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-[#F4F1DE] rounded text-[#4A7A63] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-[#F4F1DE] rounded text-[#4A7A63] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-[#F4F1DE] rounded text-[#4A7A63] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-[#E07A5F] text-[#F4F1DE] py-2 rounded hover:bg-[#d46653]"
          >
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}

export default Home;
