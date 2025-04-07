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
  const captions = ["Maintenance", "Irrigation", "Maintenance", "Landscaping", "Design"];
  const doubledImages = [...images, ...images];
  const scrollRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen font-body">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[75vh] sm:h-[85vh] md:h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${exampleImg})` }}
      >
        <div className="bg-gray-800/70 rounded-xl mx-4 md:ml-8 mr-auto mt-20 md:mt-40 p-6 md:p-8 text-center max-w-2xl shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Welcome to Top Garden
          </h1>
          <p className="text-l md:text-3xl text-gray-200 font-cursive">
            Turning your outdoor spaces into dreamscapes.
          </p>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <button
              onClick={handleExploreClick}
              className="bg-[#4A7A63] text-white px-6 py-2 rounded-lg text-lg font-medium transition-transform hover:bg-[#E07A5F] hover:scale-105"
            >
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

      {/* About Us Section (Restored) */}
      <section className="bg-[#F4F1DE] py-12 px-6 md:px-8 text-center">
        <h2 className="text-5xl font-bold text-[#4A7A63] font-heading mb-6">
          About Us
        </h2>
        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto leading-relaxed">
          With over a decade of experience in landscape design, construction, and irrigation, we bring passion, creativity, and expertise to every project.
        </p>
        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto mt-4 leading-relaxed">
          At Top Garden, we believe that landscapes should be more than just beautiful—they should be a harmonious blend of aesthetics, sustainability, and functionality.
        </p>
        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto mt-4 leading-relaxed">
          Our expert team specializes in designing lush gardens, installing efficient irrigation systems, and curating tailored maintenance plans to ensure your outdoor haven thrives through every season.
        </p>
        <p className="text-lg text-[#4A7A63] max-w-4xl mx-auto mt-4 leading-relaxed">
          From the gentle trickle of a perfectly placed water feature to the rich, green embrace of thoughtfully selected plants, every detail is designed with care and intention. Let us bring your vision to life.
        </p>
      </section>

      {/* Core Values Section (Restored) */}
      <section className="bg-[#E07A5F] py-20 px-6 md:px-8 text-center rounded-lg shadow-lg">
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
              We strive to design and maintain landscapes that prioritize environmental health and sustainability.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-5xl text-white mb-4" />
            <h3 className="text-xl font-bold text-white">Community Engagement</h3>
            <p className="text-white mt-2">
              Connecting people through green spaces and fostering a sense of togetherness in the community.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeartbeat className="text-5xl text-white mb-4" />
            <h3 className="text-xl font-bold text-white">
              Dedication to Human Health
            </h3>
            <p className="text-white mt-2">
              Promoting mental and physical well-being through the power of greenery and outdoor spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        className="bg-[#F4F1DE] py-16 px-6 md:px-8 text-center"
      >
        <h2 className="text-5xl font-bold text-[#4A7A63] font-heading mb-8">
          Past Work
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden space-x-6 scrollbar-hide px-4 py-6"
          >
            {doubledImages.map((image, index) => (
              <div key={index} className="shrink-0 text-center">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="h-[300px] sm:h-[400px] w-[250px] sm:w-[300px] object-cover rounded-xl shadow-lg"
                />
                <p className="mt-2 text-[#4A7A63] font-semibold">
                  {captions[index % captions.length]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
