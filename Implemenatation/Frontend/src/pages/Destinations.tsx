import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    id: '1',
    name: 'Marrakech',
    country: 'Maroc',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTw7SYjmk-wCFYeBR2Qv-97Zf28B8Km0azhAFfRkYOcIfllrsuoGtFTj2NK8la4NcCGUXbR51yYx1R5TVXu89Z9Vh8XTMQ_HQbLIsPff0Y',
    description: 'Experience the romance and charm of the City of Light.'
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTw7SYjmk-wCFYeBR2Qv-97Zf28B8Km0azhAFfRkYOcIfllrsuoGtFTj2NK8la4NcCGUXbR51yYx1R5TVXu89Z9Vh8XTMQ_HQbLIsPff0Y',
    description: 'Discover the perfect blend of tradition and innovation.'
  },
  {
    id: '3',
    name: 'New York',
    country: 'United States',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTw7SYjmk-wCFYeBR2Qv-97Zf28B8Km0azhAFfRkYOcIfllrsuoGtFTj2NK8la4NcCGUXbR51yYx1R5TVXu89Z9Vh8XTMQ_HQbLIsPff0Y',
    description: 'The city that never sleeps awaits your arrival.'
  },
  {
    id: '4',
    name: 'New York',
    country: 'United States',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTw7SYjmk-wCFYeBR2Qv-97Zf28B8Km0azhAFfRkYOcIfllrsuoGtFTj2NK8la4NcCGUXbR51yYx1R5TVXu89Z9Vh8XTMQ_HQbLIsPff0Y',
    description: 'The city that never sleeps awaits your arrival.'
  },
  {
    id: '3',
    name: 'New York',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80',
    description: 'The city that never sleeps awaits your arrival.'
  },
  {
    id: '3',
    name: 'New York',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80',
    description: 'The city that never sleeps awaits your arrival.'
  },
  {
    id: '3',
    name: 'New York',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80',
    description: 'The city that never sleeps awaits your arrival.'
  },
];

export const DestinationsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Popular Destinations</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Explore our most popular destinations and start planning your next adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm text-text-muted">{destination.country}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-text-muted">{destination.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};