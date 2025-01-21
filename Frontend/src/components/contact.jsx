import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message:</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
      </form>
    </div>
  );
}

export default Contact;