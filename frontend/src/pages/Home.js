import React from "react";
import exampleImg from "../Media/irrigationImg.png";

function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[85vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${exampleImg})`,
        }}
      >
        {/* Overlay Box */}
        <div className="bg-gray-800/70 rounded-xl ml-8 mr-auto mt-12 p-8 text-center max-w-2xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Welcome to Top Garden
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 font-cursive">
            Turning your outdoor spaces into dreamscapes.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#4A7A63] text-white px-6 py-2 rounded-lg text-lg font-medium transition-transform hover:bg-[#E07A5F] hover:scale-105">
              Explore Plans
            </button>
            <button className="bg-[#4A7A63] text-white px-6 py-2 rounded-lg text-lg font-medium transition-transform hover:bg-[#E07A5F] hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="bg-[#F4F1DE] py-16 px-8">
        <div className="flex flex-col gap-12">
          <div
            className="w-full space-y-6 animate-fadeIn text-center"
            style={{ animationDuration: "1s" }}
          >
            <h2
              className="text-3xl font-bold text-[#4A7A63] font-heading"
              style={{ textShadow: ".1px .1px 0px black" }}
            >
              About Us
            </h2>
            <p className="text-lg text-[#4A7A63]">
              Welcome to Top Garden! We are a team of passionate landscaping and
              irrigation experts dedicated to transforming outdoor spaces into
              stunning dreamscapes. With over 10 years of experience in the
              industry, we pride ourselves on delivering exceptional designs,
              efficient irrigation systems, and tailored maintenance plans.
            </p>
            <p className="text-lg text-[#4A7A63]">
              Our mission is to help homeowners and businesses create
              sustainable, beautiful, and functional outdoor spaces that enhance
              the quality of life and promote environmental stewardship. Whether
              it's creating a serene garden or installing a cutting-edge
              irrigation system, we ensure that every project is crafted with
              care and attention to detail.
            </p>
            <p className="text-lg text-[#4A7A63]">
              Let us help you bring your vision to life. Contact us today to get
              started!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;