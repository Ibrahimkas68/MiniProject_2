import React, { useEffect, useRef } from 'react';

const logos = [
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=160350&t=1713342728796', alt: 'Logo 1' },
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=2073135&t=1718976876641', alt: 'Logo 2' },
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=170116&t=1713436066824', alt: 'Logo 4' },
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=160399&t=1713342822570', alt: 'Logo 5' },
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=160302&t=1713342677085', alt: 'Logo 6' },
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=170304&t=1713436119215', alt: 'Logo 7' },
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=160473&t=1713342914444', alt: 'Logo 8' },
  { src: 'https://www.royalairmaroc.com/image/journal/article?img_id=160622&t=1713343079724', alt: 'Logo 9' },
  { src: 'https://www.quarkevents.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FV.45d18ab1.png&w=640&q=75', alt: 'Logo 10' },
];

const PartnerLogos: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let animationFrame: number;
      let scrollPosition = 0;

      const step = () => {
        scrollPosition += 0.7;
        if (scrollPosition >= marquee.scrollWidth / 2) {
          scrollPosition = 0;
        }
        marquee.style.transform = `translateX(-${scrollPosition}px)`;
        animationFrame = requestAnimationFrame(step);
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  return (
    <div className="bg-slate-950 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Partners
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap"
            style={{ willChange: 'transform' }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 mx-6">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
