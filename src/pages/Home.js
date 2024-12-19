import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#4A7A63] text-[#F4F1DE] py-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Top Garden</h1>
        <p className="mt-4 text-lg">Turning your outdoor spaces into dreamscapes.</p>
      </section>

      {/* About Section */}
      <section className="bg-[#F4F1DE] text-center py-10">
        <h2 className="text-2xl font-bold text-[#4A7A63]">About Us</h2>
        <p className="text-lg text-[#4A7A63] mt-4">
          At Top Garden, we specialize in creating stunning outdoor spaces. From landscaping to irrigation, our team brings your vision to life.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-[#4A7A63] text-[#F4F1DE] py-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#E07A5F]">Contact Us</h2>
        <p className="text-center mb-8">Let us help you transform your outdoor spaces!</p>
      </section>
    </div>
  );
}

export default Home;

