import React, { useEffect, useRef } from "react";
import exampleImg from "../Media/irrigationImg.png";
import slideshow1 from "../Media/slideshow1.jpg";
import slideshow2 from "../Media/slideshow2.jpg";
import slideshow3 from "../Media/slideshow3.jpg";
import slideshow4 from "../Media/slideshow4.jpg";
import slideshow5 from "../Media/slideshow5.jpg";
import { FaLeaf, FaHandsHelping, FaHeartbeat } from "react-icons/fa";

function Home() {
  const images = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5];
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let isScrolling = false;

    const startAutoScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        scrollContainer.scrollLeft += 2;
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
        isScrolling = false;
      }
    };

    const interval = setInterval(startAutoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-body">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${exampleImg})` }}
      >
        <div className="bg-gray-800/70 rounded-xl ml-8 mr-auto mt-40 p-8 text-center max-w-2xl shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Welcome to Top Garden
          </h1>
          <p className="text-l md:text-3xl text-gray-200 font-cursive">
            Turning your outdoor spaces into dreamscapes.
          </p>
          <div className="flex justify-center gap-10 mt-6">
            <button className="bg-[#4A7A63] text-white px-6 py-2 rounded-lg text-lg font-medium transition-transform hover:bg-[#E07A5F] hover:scale-105">
              Explore Plans
            </button>
            <button
              className="bg-[#E07A5F] text-white px-6 py-2 rounded-lg text-lg font-medium transition-transform hover:bg-[#4A7A63] hover:scale-105"
              onClick={() => (window.location.href = "tel:2092639292")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#F4F1DE] py-12 px-8 text-center">
        <h2 className="text-5xl font-bold text-[#4A7A63] font-heading mb-6">
          About Us
        </h2>
        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto leading-relaxed">
          With over a decade of experience in landscape design, construction, and irrigation, we bring passion, creativity, and expertise to every project.
          Whether it's a serene backyard retreat, a vibrant garden oasis, or a functional, eco-friendly landscape, we craft outdoor spaces that inspire, rejuvenate, and connect people with nature.
        </p>

        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto mt-4 leading-relaxed">
          At Top Garden, we believe that landscapes should be more than just beautiful—they should be a harmonious blend of aesthetics, sustainability, and functionality.
        </p>

        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto mt-4 leading-relaxed">
          Our expert team specializes in designing lush gardens, installing efficient irrigation systems, and curating tailored maintenance plans to ensure your outdoor haven thrives through every season.
          We take pride in using sustainable practices that enhance the beauty of your space and contribute to a healthier environment.
        </p>

        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto mt-4 leading-relaxed">
          From the gentle trickle of a perfectly placed water feature to the rich, green embrace of thoughtfully selected plants, every detail is designed with care and intention.
          Let us bring your vision to life.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#E07A5F] py-20 px-8 text-center rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-white font-heading mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <FaLeaf className="text-5xl text-white mb-4" />
            <h3 className="text-xl font-bold text-white">
              Ecological Solutions & Awareness
            </h3>
            <p className="text-white mt-2">
              We strive to design and maintain landscapes that prioritize
              environmental health and sustainability.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-5xl text-white mb-4" />
            <h3 className="text-xl font-bold text-white">Community Engagement</h3>
            <p className="text-white mt-2">
              Connecting people through green spaces and fostering a sense of
              togetherness in the community.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeartbeat className="text-5xl text-white mb-4" />
            <h3 className="text-xl font-bold text-white">
              Dedication to Human Health
            </h3>
            <p className="text-white mt-2">
              Promoting mental and physical well-being through the power of
              greenery and outdoor spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Image Gallery */}
      <section className="bg-[#F4F1DE] py-16 px-8 text-center">
        <h2 className="text-5xl font-bold text-[#4A7A63] font-heading mb-8">
          Past Work
        </h2>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide snap-x snap-mandatory px-4 py-6"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="shrink-0 snap-center transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="h-[400px] w-[300px] object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} export default Home;
