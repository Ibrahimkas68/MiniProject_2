import React from "react";
import { PlaneTakeoff, PlaneLanding } from "lucide-react";

interface PlaneInfo {
  type: "departure" | "arrival";
  flightNumber: string;
  time: string;
  destination: string;
}

const planeData: PlaneInfo[] = [
  { type: "departure", flightNumber: "RAM2024", time: "10:30 AM", destination: "Paris" },
  { type: "arrival", flightNumber: "RAM1548", time: "11:15 AM", destination: "Casablanca" },
  { type: "departure", flightNumber: "RAM3033", time: "12:00 PM", destination: "New York" },
  { type: "arrival", flightNumber: "RAM4120", time: "1:45 PM", destination: "Madrid" },
  { type: "departure", flightNumber: "RAM2024", time: "10:30 AM", destination: "Paris" },
  { type: "arrival", flightNumber: "RAM1548", time: "11:15 AM", destination: "Casablanca" },
  { type: "departure", flightNumber: "RAM3033", time: "12:00 PM", destination: "New York" },
  { type: "arrival", flightNumber: "RAM4120", time: "1:45 PM", destination: "Madrid" },
];

const PlaneTicker: React.FC = () => {
  return (
    <div className="relative w-full bg-gray-800 text-white h-12 overflow-hidden">
      {/* Scrolling ticker container */}
      <div className="ticker-wrapper flex whitespace-nowrap animate-scroll items-center h-full">
        {planeData.map((plane, index) => (
          <div
            key={index}
            className="flex items-center px-6 border-r border-gray-700 last:border-r-0"
          >
            {/* Icon for Departure or Arrival */}
            {plane.type === "departure" ? (
              <PlaneTakeoff className="text-green-400 mr-2 w-5 h-5" />
            ) : (
              <PlaneLanding className="text-blue-400 mr-2 w-5 h-5" />
            )}
            {/* Plane details */}
            <span className="font-semibold">
              {plane.type === "departure" ? "Departing:" : "Arriving:"}
            </span>
            <span className="ml-2">
              Flight <strong>{plane.flightNumber}</strong> at <strong>{plane.time}</strong> to/from{" "}
              <strong>{plane.destination}</strong>
            </span>
          </div>
        ))}
      </div>

      {/* Tailwind CSS animation styles */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            animation: scroll-left 35s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default PlaneTicker;
