import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Plane, Award } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">About Royal Air Maroc</h1>
          <p className="text-text-muted max-w-2xl mx-auto top-10">
            Your trusted partner in air travel, connecting people and places since 2024.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://www.challenge.ma/wp-content/uploads/2023/07/image-41.png"
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-text-muted text-justify">
              The Moroccan national airline company, founded on June 29, 1957,
              and a member of the OneWorld alliance.
            </p>
            <p className="text-text-muted text-justify">
              Today, we serve millions of passengers annually, flying to hundreds of
              destinations worldwide. Our commitment to excellence, innovation, and customer
              satisfaction remains at the heart of everything we do.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Safety First', description: 'Your safety is our top priority' },
            { icon: Users, title: 'Customer Focus', description: 'Dedicated to your comfort' },
            { icon: Plane, title: 'Modern Fleet', description: 'Latest aircraft technology' },
            { icon: Award, title: 'Excellence', description: 'Award-winning service' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};