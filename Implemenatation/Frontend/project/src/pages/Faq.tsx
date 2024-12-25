import React, { useState } from 'react'; // Make sure useState is imported
import { Link } from 'react-router-dom'; // For navigation
import { Users, Plane, Globe, Airplay, Globe2, Headphones, Building } from 'lucide-react'; // Icons for the sections

const FaqPage = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null); // Use useState

  interface FAQ {
    question: string;
    answer: string;
  }

  const toggleQuestion = (index: number): void => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Royal Air Maroc's baggage policy?",
      answer: "Passengers are allowed one carry-on bag and one personal item, with specific weight and size restrictions. For checked baggage, limits depend on the travel class.",
    },
    {
      question: "How can I book a flight?",
      answer: "You can book a flight online via our website, mobile app, or by visiting our offices or authorized agents.",
    },
    {
      question: "What destinations do you cover?",
      answer: "Royal Air Maroc flies to over 100 destinations worldwide, including Africa, Europe, Asia, and America.",
    },
    {
      question: "What are your customer support hours?",
      answer: "Our customer support is available 24/7 to assist you with all your travel needs.",
    },
  ];

  return (
    <div className="faq-page bg-slate-900 text-text py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* FAQ Section */}
        <h1 className="text-3xl text-primary font-bold mb-12 text-center">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-6 cursor-pointer hover:bg-slate-800 transition-colors"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <button className="text-primary text-lg">{activeQuestion === index ? "-" : "+"}</button>
              </div>
              {activeQuestion === index && (
                <p className="mt-2 text-text-muted">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Slides Section */}
        <div className="mt-16 space-y-12">
          {/* Slide 1: About Our Company */}
          <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all">
            <Building className="h-12 w-12 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-4">About Our Company</h2>
              <p className="text-text-muted">Royal Air Maroc is committed to providing exceptional air travel experiences worldwide.</p>
            </div>
          </div>

          {/* Slide 2: Our Fleet */}
          <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all">
            <Airplay className="h-12 w-12 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Our Fleet</h2>
              <p className="text-text-muted">We operate a modern fleet designed for comfort and safety.</p>
            </div>
          </div>

          {/* Slide 3: Destinations */}
          <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all">
            <Globe2 className="h-12 w-12 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Destinations</h2>
              <p className="text-text-muted">Discover over 100 destinations across the globe with Royal Air Maroc.</p>
            </div>
          </div>

          {/* Slide 4: Customer Support */}
          <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all">
            <Headphones className="h-12 w-12 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
              <p className="text-text-muted">Our dedicated team is here to assist you 24/7 with all your travel needs.</p>
            </div>
          </div>
        </div>

        {/* Numbers Section */}
        <h2 className="text-xl font-semibold mb-6 text-center mt-20">Our Numbers</h2>
        <div className="mt-16 space-y-6 text-center bg-gray-800 p-8 rounded-2xl">
          
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <Users className="h-10 w-10 text-primary mb-2" />
              <p className="text-lg font-semibold">+ 10M</p>
              <p className="text-text-muted">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <Plane className="h-10 w-10 text-primary mb-2" />
              <p className="text-lg font-semibold">+ 100</p>
              <p className="text-text-muted">Destinations</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-10 w-10 text-primary mb-2" />
              <p className="text-lg font-semibold">+ 50</p>
              <p className="text-text-muted">Years of Service</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">

<div className="mt-16">
  <h2 className="text-xl font-semibold mb-4 text-center">Our Locations</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127716.98673801885!2d-7.618206!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb6ec63d1a87%3A0x4683c9e9e4d2f71a!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1698303291211!5m2!1sen!2s"
    width="100%"
    height="300"
    allowFullScreen
    loading="lazy"
    className="border rounded-lg"
  ></iframe>
</div>

        </div>

        {/* Contact Link */}
        <div className="text-center mt-12">
          <Link to="/contact" className="text-primary text-lg font-semibold hover:text-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;