import React from 'react';

function GetQuote() {
  return (
    <div className="bg-[#F4F1DE] text-center py-10">
      <h2 className="text-2xl font-bold text-[#4A7A63]">Get a Quote</h2>
      <p className="text-lg text-[#4A7A63] mt-4">
        Fill out the form below, and we’ll provide an estimate for your project.
      </p>
      <form className="mt-6 space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-[#4A7A63] rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-[#4A7A63] rounded"
        />
        <textarea
          placeholder="Describe your project"
          className="w-full px-4 py-2 border border-[#4A7A63] rounded"
          rows="4"
        />
        <button
          type="submit"
          className="bg-[#E07A5F] text-[#F4F1DE] px-6 py-2 rounded hover:bg-[#d46653]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetQuote;
