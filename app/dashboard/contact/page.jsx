"use client";
import React from 'react';

function ContactForm() {
  return (
    <div className="min-h-full mt-5 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold  mb-6">Contact Us</h1>

      {/* Form */}
      <form
        action="https://formspree.io/f/mpwzzbbb"
        method="POST"
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        {/* Email Field */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Your email:
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-lg"
          />
        </label>

        {/* Message Field */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Your message:
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-lg"
          ></textarea>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 cursor-pointer"
        >
          Send
        </button>
      </form>

      <style jsx>{`
        form {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        button {
          background-color: #6b46c1;
          padding: 10px;
          color: white;
          cursor: pointer;
          border-radius: 4px;
        }

        button:hover {
          background-color: #553c9a;
        }
      `}</style>
    </div>
  );
}

export default ContactForm;
