import React, { useEffect, useRef } from "react";
import exampleImg from "../Media/irrigationImg.png";
import slideshow1 from "../Media/slideshow1.jpg";
import slideshow2 from "../Media/slideshow2.jpg";
import slideshow3 from "../Media/slideshow3.jpg";
import slideshow4 from "../Media/slideshow4.jpg";
import slideshow5 from "../Media/slideshow5.JPG";
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
              className="bg-[#4A7A63] text-white px-6 py-2 rounded-lg text-lg font-medium transition-transform hover:bg-[#E07A5F] hover:scale-105"
              onClick={() => (window.location.href = "tel:2092639292")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#F4F1DE] py-20 px-8 text-center">
        <h2 className="text-5xl font-bold text-[#4A7A63] font-heading mb-8">
          About Us
        </h2>
        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto">
          Welcome to Top Garden! We are a team of passionate landscaping and
          irrigation experts dedicated to transforming outdoor spaces into
          stunning dreamscapes. With over 10 years of experience in the
          industry, we pride ourselves on delivering exceptional designs,
          efficient irrigation systems, and tailored maintenance plans.
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
          Our Work
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
}

export default Home;
