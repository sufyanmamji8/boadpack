import React from "react";

function JeddahAirportDiagram() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
   <div className="relative flex items-center gap-x-16">
        
        {/* LEFT: Jeddah Airport */}
        <div className="bg-[#006fc0] text-white rounded-xl px-12 py-8 shadow-lg text-center">
          <h1 className="text-3xl leading-tight">
            Jeddah<br />Airport
          </h1>
        </div>

        {/* SVG ARROWS */}
        <svg
          className="absolute left-[200px] top-1/2 -translate-y-1/2"
          width="220"
          height="360"
          viewBox="0 0 220 360"
          fill="none"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0 0 L8 4 L0 8 Z" fill="#7dc4e8" />
            </marker>
          </defs>

          {/* Upper arrow */}
          <line
            x1="0"
            y1="180"
            x2="200"
            y2="40"
            stroke="#7dc4e8"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Lower arrow */}
          <line
            x1="0"
            y1="180"
            x2="200"
            y2="320"
            stroke="#7dc4e8"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
        </svg>

        {/* RIGHT: Parking + Enforcement */}
<div className="flex flex-col gap-y-32 gap-x-32 ml-38">
  <div className="bg-[#006fc0] text-white rounded-xl px-12 py-8 shadow-lg text-center min-w-[500px] max-w-[600px] w-full">
    <h1 className="text-4xl font-normal leading-tight tracking-wider">
      Jeddah Airport<br />Parking
    </h1>
  </div>

  <div className="bg-[#006fc0] text-white rounded-xl px-12 py-8 shadow-lg text-center min-w-[500px] max-w-[600px] w-full">
    <h1 className="text-4xl font-normal leading-tight tracking-wider">
      Jeddah Airport<br />Enforcement
    </h1>
  </div>
</div>

      </div>
    </div>
  );
}

export default JeddahAirportDiagram;
