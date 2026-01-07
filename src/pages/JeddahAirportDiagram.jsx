import React from "react";

function JeddahAirportDiagram() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">

      <div className="relative flex items-center gap-x-16">
        
        <div className="bg-[#006fc0] text-white rounded-xl px-16 py-6 shadow-lg text-center">
          <h1 className="text-3xl leading-tight">
            Jeddah<br />Airport
          </h1>
        </div>

        <svg
          className="absolute left-[220px] top-1/2 -translate-y-1/2"
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
              <path d="M0 0 L8 4 L0 8 Z" fill="#006fc0" />
            </marker>
          </defs>

          <line
            x1="0"
            y1="180"
            x2="200"
            y2="40"
            stroke="#006fc0"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          <line
            x1="0"
            y1="180"
            x2="200"
            y2="320"
            stroke="#006fc0"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
        </svg>

        <div className="flex flex-col gap-y-32 ml-34">
          <div className="bg-[#006fc0] text-white rounded-xl px-8 py-4 shadow-lg text-center min-w-[500px] max-w-[600px] w-full">
            <h1 className="text-4xl font-normal leading-tight tracking-wider">
              Jeddah Airport<br />Parking
            </h1>
          </div>

          <div className="bg-[#006fc0] text-white rounded-xl px-8 py-4 shadow-lg text-center min-w-[500px] max-w-[600px] w-full">
            <h1 className="text-4xl font-normal leading-tight tracking-wider">
              Jeddah Airport<br />Enforcement
            </h1>
          </div>
        </div>
      </div>

      {/* ===== NOTE (FIXED) ===== */}
      <div className="mt-36 px-4 mr-76  max-w-4xl text-xs md:text-sm text-gray-600 text-left">
        <strong>Note:</strong> Numbers have been rounded up to the nearest value
        and thus there may be rounding errors when comparing the variances.
      </div>

    </div>
  );
}

export default JeddahAirportDiagram;
