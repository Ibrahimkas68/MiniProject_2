import React from 'react';
import { motion } from 'framer-motion';
import { Search } from '../shared/Search';
import { AboutPage } from '../../pages/About';
import CustomCards from './CustomCards';
import BookNowButton from '../shared/BookNowButton';
import LatestNews from '../layout/LatestNews';

export const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://laquotidienne.ma/uploads/actualites/61bb70eaf4082_rammaroc.jpeg")',
          }}
        >
          {/* Gradient and 3D Effect */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), 
                           linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)`,
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            }}
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Unique experience with{' '}
              <span className="text-red-500">Royal Air Maroc</span>
            </h1>

            <p className="text-xl text-white max-w-2xl mx-auto">
              Your journey begins here. Find and book the perfect flight to your
              dream destination.
            </p>
          </motion.div>

          {/* Search Form Positioned */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute w-full max-w-4xl left-1/2 transform -translate-x-1/2 top-[85%] z-10"
          >
            <Search />
          </motion.div>
        </div>
      </div>

      <div className="bg-black/70 py-16 px-8 relative">
        {/* Title and Paragraph Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[22%] text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">
            Explore Our Beautiful Destinations
          </h2>
        </div>
        <div className="absolute left-8 top-[60%] transform -translate-y-1/2 text-left text-gray-800">
          <p className="text-lg text-gray-300 max-w-md text-justify">
            Discover enchanting places and unforgettable experiences. Let us take you
            to the most beautiful destinations across the globe, tailored to your
            dream journey.
          </p>
        </div>
        <BookNowButton />
        {/* Custom Cards Section */}
        <div className="relative">
          <CustomCards />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black/70 py-8">
        <AboutPage />
      </div>

      <LatestNews />
    </div>
  );
};
