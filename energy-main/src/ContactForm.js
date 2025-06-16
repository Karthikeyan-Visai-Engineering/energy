import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",  // Fix: Use "email" to match FastAPI model
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/contact/", formData);  // Fix: Correct API endpoint
      setResponseMessage(res.data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setResponseMessage("Error submitting the form.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-center text-blue-900">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>

        <form className="space-y-6 mt-3" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full p-3 border rounded-lg" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full p-3 border rounded-lg" required />
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter the subject" className="w-full p-3 border rounded-lg" required />
          <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." className="w-full p-3 border rounded-lg" required></textarea>
          <button type="submit" className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Send Message
          </button>
        </form>

        {responseMessage && <p className="text-white text-center mt-4">{responseMessage}</p>}
      </div>
    </div>
  );
}

export default ContactForm;
