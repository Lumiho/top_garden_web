import React from 'react';
import exampleImg from '../Media/irrigationImg.png';
import '../Components/Home.css';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-[#F4F1DE] h-[70vh] flex flex-col justify-center text-center"
        style={{
          textShadow: '1px 1px 0px black',
          backgroundImage: `url(${exampleImg})`,
        }}
      >
        <h1 className="text-7xl md:text-8xl font-bold">Welcome to Top Garden</h1>
        <p className="mt-4 text-xl md:text-3xl">
          Turning your outdoor spaces into dreamscapes.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-[#F4F1DE] py-16 px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6 animate-fadeIn" style={{ animationDuration: '1s' }}>
            <h2
              className="text-3xl mx-10 font-bold text-[#4A7A63]"
              style={{ textShadow: '.1px .1px 0px black' }}
            >
              About Us
            </h2>
            <p className="text-lg text-[#4A7A63] mx-10">
              Welcome to Top Garden! We are a team of passionate landscaping and irrigation experts dedicated to
              transforming outdoor spaces into stunning dreamscapes. With over 10 years of experience in the industry,
              we pride ourselves on delivering exceptional designs, efficient irrigation systems, and tailored
              maintenance plans.
            </p>
            <p className="text-lg text-[#4A7A63] mx-10">
              Our mission is to help homeowners and businesses create sustainable, beautiful, and functional outdoor
              spaces that enhance the quality of life and promote environmental stewardship. Whether it's creating a
              serene garden or installing a cutting-edge irrigation system, we ensure that every project is crafted with
              care and attention to detail.
            </p>
            <p className="text-lg text-[#4A7A63] mx-10">
              Let us help you bring your vision to life. Contact us today to get started!
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center" style={{ animation: 'fadeIn 1s ease-in-out' }}>
            <img src={exampleImg} alt="Our Team" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
