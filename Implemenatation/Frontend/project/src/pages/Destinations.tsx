import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: "1",
    name: "Marrakech",
    country: "Morocco",
    image: "https://www.naturallymorocco.co.uk/cms/destinations/23_6399d46fb9383s_0.jpg?v=1685633524?20230601163204",
    description: "Experience the romance and charm of the City of Light."
  },
  {
    id: "2",
    name: "Paris",
    country: "France",
    image: "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/fsximmk7rpffmg1ew5jw.webp",
    description: "Discover the perfect blend of tradition and innovation."
  },
  {
    id: "3",
    name: "New York",
    country: "United States",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The city that never sleeps awaits your arrival."
  },
  {
    id: "4",
    name: "Tokyo",
    country: "Japan",
    image: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience the perfect blend of tradition and modernity."
  },
  {
    id: "5",
    name: "Barcelona",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1507619579562-f2e10da1ec86?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Marvel at the architectural wonders of Gaudí."
  },
  {
    id: "6",
    name: "Istanbul",
    country: "Turkey",
    image: "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A city where East meets West in breathtaking fashion."
  },
  {
    id: "7",
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1606307850490-0f67239decc9?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore mountains and pristine beaches in one place."
  },
  {
    id: "8",
    name: "Rio de Janeiro",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dance to the rhythm of the Carnival spirit."
  },
  {
    id: "9",
    name: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Luxury and adventure meet in this desert oasis."
  },
  {
    id: "10",
    name: "Venice",
    country: "Italy",
    image: "https://plus.unsplash.com/premium_photo-1661953180092-94e620a0d1ba?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Drift through romantic canals and historic sites."
  },
  {
    id: "11",
    name: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "See the Opera House and bask on golden beaches."
  },
  {
    id: "12",
    name: "Bangkok",
    country: "Thailand",
    image: "https://plus.unsplash.com/premium_photo-1693149386423-2e4e264712e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dive into a world of temples and street food."
  },
  {
    id: "13",
    name: "San Francisco",
    country: "United States",
    image: "https://images.unsplash.com/photo-1529370084509-373fc237f79d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cross the iconic Golden Gate Bridge."
  },
  {
    id: "14",
    name: "Cairo",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Step back in time with the Pyramids and the Nile."
  },
  {
    id: "15",
    name: "Berlin",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1546726747-421c6d69c929?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore rich history and vibrant modern culture."
  },
  {
    id: "16",
    name: "Moscow",
    country: "Russia",
    image: "https://plus.unsplash.com/premium_photo-1697729939290-40a6275148cd?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Admire the stunning architecture of Red Square."
  },
  {
    id: "17",
    name: "Amsterdam",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cruise through charming canals and vibrant streets."
  },
  {
    id: "18",
    name: "Lisbon",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Savor pastel de nata and colorful tiles."
  },
  {
    id: "19",
    name: "Seoul",
    country: "South Korea",
    image: "https://plus.unsplash.com/premium_photo-1661963468634-71b9482a3efe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A city where tradition meets high-tech marvels."
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