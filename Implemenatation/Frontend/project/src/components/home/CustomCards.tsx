import React from "react";
import img1 from "../../Assets/ny.jpg";
import img2 from "../../Assets/rb.jpg";
import cnx from "../../Assets/kech.jpg";
import pool from "../../Assets/paris.jpg";
import path from "../../Assets/path2.png";


// Reusable component for a single custom card
const CustomCard = ({ iconSrc, className }: { iconSrc: string; className: string }) => (
  <div className={`absolute overflow-hidden rounded-[45px] border-4 border-white shadow-lg ${className}`}>
    <img src={iconSrc} className="w-full h-full object-cover rounded-[21px]" alt="Custom Card" />
  </div>
);

// Main CustomCards component
const CustomCards = () => {
  const cardsData = [img1, img2, cnx, pool];

  const cardClasses = [
    "w-[250px] h-[410px] top-[155px] left-[900px] z-10",
    "w-[200px] h-[300px] top-[220px] left-[1210px] z-10",
    "w-[200px] h-[300px] top-[220px] left-[640px] z-10",
    "w-[600px] h-[350px] top-[195px] left-[760px] z-0",
  ];

  return (
    <div className="relative h-[500px] mx-auto">
      {/* Background image with opacity and z-index */}
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <img
          src={path}
          className="w-full h-full object-cover opacity-10" // Change opacity here (0 to 1)
          alt="Background Image"
          style={{ zIndex: 0 }}  // Alternatively, you can directly set z-index here.
        />
      </div>

      {/* Cards */}
      {cardsData.map((iconSrc, index) => (
        <CustomCard key={index} iconSrc={iconSrc} className={cardClasses[index]} />
      ))}
    </div>
  );
};

export default CustomCards;
