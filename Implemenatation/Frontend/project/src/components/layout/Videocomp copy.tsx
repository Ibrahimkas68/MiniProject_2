import React, { useState, useRef } from 'react';
import { Plane, Ticket, Calendar, ThumbsUp, Users, Play, Pause } from 'lucide-react';
import videoFile from '../../assets/Ramvid.mp4'; // Adjust the path as needed

const NewsCard: React.FC = () => {
  const title = 'Your Destination Awaits, Book Now';
  const description =
    'Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu. In tellus interdum vel ac massa interdum viverra elementum auctor.';
  const date = 'Dec 10, 2024';
  const url = '/news/project-update';

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse bg-gray-800 shadow-lg rounded-xl overflow-hidden w-full h-[450px] relative transition-transform duration-300">
          {/* Video on the right */}
          <div className="relative w-full md:w-3/4 h-full">
            <video
              ref={videoRef}
              src={videoFile}
              className="w-full h-full object-cover rounded-xl shadow-xl"
              muted
            />
            <button
              onClick={togglePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Content on the left */}
          <div className="flex flex-col justify-between p-6 space-y-6 md:space-y-0 flex-grow relative">
            {/* Date */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '16px',
                fontSize: '14px',
                color: '#A0AEC0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Calendar style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              <span>{date}</span>
            </div>

            {/* Title */}
            <a
              href={url}
              style={{
                position: 'absolute',
                top: '25%',
                left: '16px',
                fontSize: '24px',
                fontWeight: '600',
                color: '#4299E1',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2B6CB0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4299E1')}
            >
              {title}
            </a>

            {/* Description */}
            <p style={{ marginTop: '150px', fontSize: '14px', color: '#718096' }}>{description}</p>

            {/* Additional Info */}
            <div className="flex justify-between mt-4">
              <div className="flex space-x-4">
                {/* 100% Satisfaction Button */}
                <div
                  className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg"
                  style={{ width: '230px', height: '80px' }} // Modify dimensions as needed
                >
                  <ThumbsUp className="w-6 h-6 mr-2" />
                  <span className="text-xl">100%</span>
                  <span>Satisfaction</span>
                </div>

                {/* 1M Passengers Served Button */}
                <div
                  className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-700 rounded-lg"
                  style={{ width: '230px', height: '80px' }} // Modify dimensions as needed
                >
                  <Users className="w-6 h-6 mr-2" />
                  <span className="text-xl font-bold">1M</span>
                  <span className="text-sm">Passengers Served</span>
                </div>
              </div>
            </div>

            {/* Phrase before Book Now Button */}
            <div className="mt-4 text-gray-700 text-lg font-semibold">
              Ready for your adventure? Let’s get started!
            </div>

            {/* Book Now Button */}
            <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
              <a
                href={url}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 48px', // Adjusted padding for a larger button
                  fontSize: '16px', // Increased font size for better readability
                  fontWeight: '600', // Slightly bold for emphasis
                  color: '#FFFFFF',
                  backgroundColor: '#E53E3E', // Red background
                  borderRadius: '12px', // More rounded corners
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                  transition: 'all 0.3s ease', // Smooth transition for hover effect
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2B6CB0'; // Hover background change
                  e.currentTarget.style.transform = 'scale(1.05)'; // Scale effect on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E53E3E'; // Revert to original background
                  e.currentTarget.style.transform = 'scale(1)'; // Reset scale effect
                }}
              >
                <Ticket style={{ width: '18px', height: '18px', marginRight: '12px' }} />
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
