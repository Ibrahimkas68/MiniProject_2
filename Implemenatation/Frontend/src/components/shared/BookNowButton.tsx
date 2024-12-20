import React from 'react';
import { Plane } from 'lucide-react'; // Import the airplane icon

interface BookNowButtonProps {
  className?: string;
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ className }) => {
  return (
    <div
      className={`absolute right-[87%] top-[80%] flex items-center justify-center bg-[#19232d] border-2 border-[#dcbb87] px-7 py-2 rounded-[22px] text-white text-[16px] transition-transform duration-300 hover:bg-[#dcbb87] z-50 ${className}`}
    >
      <a
        href="#book"
        className="flex items-center no-underline text-white"
      >
        {/* Ensure hover applies to the Plane icon */}
        <Plane
          className="mr-2 transition-transform duration-300 group-hover:rotate-[75deg]"
        />
        Book Now
      </a>
    </div>
  );
};

export default BookNowButton;
