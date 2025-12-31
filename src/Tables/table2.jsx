import React from 'react';

const Table2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="text-center mb-6 md:mb-8 lg:mb-10 pt-4 md:pt-6">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-black">
          Jeddah Airport Parking Profile
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="lg:flex-1">
          {/* Top Left Information Block */}
          <div className="bg-white p-4 md:p-5 mb-4 md:mb-6 border border-gray-300 rounded-lg w-full lg:w-auto">
            <div className="text-xs md:text-sm flex items-center">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mr-2"></span>
              <strong>Assets deployed</strong>
            </div>
          </div>

          {/* Top Tables Container */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Main Table - JEDDAH AIRPORT PARKING BAYS */}
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden lg:flex-1">
              <div className="bg-gray-500 text-white p-3 md:p-4 text-sm md:text-base font-bold">
                JEDDAH AIRPORT PARKING BAYS
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[300px] border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">EMPLOYEE CAR PARK</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">1,089</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">MSCP CAR PARK</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">5,964</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">RENTAL CAR PARK</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">1,091</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">FIRST AND BUSINESS CLASS CAR PARK</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">145</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">M AND N LONG TERM PARK</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">2,192</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">MSCP EMPLOYEE PARK</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">1,263</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">MSCP CAR POUND</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">50</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 md:p-4 text-xs md:text-sm">JA P - BP</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">48</td>
                    </tr>
                    <tr>
                      <td className="p-3 md:p-4 text-xs md:text-sm">JA P - RO</td>
                      <td className="p-3 md:p-4 text-xs md:text-sm text-right font-bold">600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Empty space on desktop only */}
            <div className="hidden lg:block lg:flex-1"></div>
          </div>

          {/* Bottom Tables Container */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Bottom Left Table - PARKING RATES */}
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden lg:flex-1">
              <div className="bg-gray-500 text-white p-3 md:p-4 text-sm md:text-base font-bold">
                PARKING RATES EXCLUDING VAT 15%
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] md:min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400 border-r border-gray-400">LOCATION</th>
                      <th colSpan="2" className="p-2 md:p-3 text-xs md:text-sm text-center border-b border-gray-400">RATES</th>
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400 border-l border-gray-400">Grace Period after Payment</th>
                    </tr>
                    <tr className="bg-gray-500 text-white">
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400 border-r border-gray-400"></th>
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400 border-r border-gray-400">Pay at Exit</th>
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400">Pay at APM</th>
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400 border-l border-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">Multi Story Car Park</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">SAR 10 per hour</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm">SAR 5 per hour</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-l border-gray-300">15 mins</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">1st Class & Business Class</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">SAR 30 per hour</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm">SAR 20 per hour</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-l border-gray-300">15 mins</td>
                    </tr>
                    <tr>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">Long Term (MAN)</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">SAR 03 per hour upto first 24 hr, after 24 hrs SAR 02 per hour</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm">No APM</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-l border-gray-300">15 mins</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Right Table - MEMBERSHIP CHARGES */}
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden lg:flex-1">
              <div className="bg-gray-500 text-white p-3 md:p-4 text-sm md:text-base font-bold">
                MEMBERSHIP CHARGES EXCLUDING VAT 15%
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px] md:min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400 border-r border-gray-400">LOCATION</th>
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400 border-r border-gray-400">GOVERNMENT EMPLOYEE</th>
                      <th className="p-2 md:p-3 text-xs md:text-sm text-left border-b border-gray-400">COMMERCIAL EMPLOYEE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">Multi Story Car Park</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">SAR 150 per month</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm">SAR 350 per month</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">1st Class & Business Class Staff Surface Parking Area</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">SAR 350 per month</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm">SAR 600 per month</td>
                    </tr>
                    <tr>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300"></td>
                      <td className="p-2 md:p-3 text-xs md:text-sm border-r border-gray-300">Free</td>
                      <td className="p-2 md:p-3 text-xs md:text-sm">SAR 150 per month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Panel - Assets Deployed */}
        <div className="w-full lg:w-[350px] mt-4 lg:mt-0">
          <div className="flex flex-col h-[400px] lg:h-[600px] bg-white border border-black">
            {/* Header Section */}
            <div className="bg-[#003d7a] text-white p-3 text-xs md:text-sm font-bold flex items-center gap-2 border-b-2 border-black flex-shrink-0">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Jeddah Airport
            </div>
            
            {/* Sub-header */}
            <div className="bg-[#ed1a1a] text-white p-3 text-[10px] md:text-[11px] font-bold border-b border-white flex-shrink-0">
              Assets Deployed
            </div>
            
            {/* Scrollable Table Container */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              <table className="w-full border-collapse text-[6px] md:text-[7px] table-fixed">
                <tbody>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white w-[60%]">Ticket Dispenser</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white w-[13%]"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white w-[13%]">21</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black w-[14%]"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">FCCRT Dispenser</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">2.1</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">DIP (L100)</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">6</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">G100 64 Bit</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">15</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">G100 32 Bit</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Ticket Verifier</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">3.3</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white">CCTV VIEWER</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white">39</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">AV GSP (G100)</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">2.4</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">EV G100 64 Bit</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">9</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">EV G100 32 Bit</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">APSA</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">3.3</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">APSA CTE-70</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">13</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">APSA CTE-100</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">RIN [Fss]</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">3.1</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">HUPS20</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">3.1</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Catch Builder</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">3.3</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">HUB320</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">1.3</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">n-Countainless</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">3.1</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">HK$120</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">3.1</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">N110 Builder</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">5.4</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">IP Barrett</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">5.4</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">APSP CAALISA</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">5.4</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">APSI</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">5.4</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white">LPR CAMERA</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white">56</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Luminers</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">MINT GOLD</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">MGHT</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">LEFT</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">WHO's</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white">PARK SPAL LARGE</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black">7</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">I PAA: RNA Large</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">T-PAA: TX</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">T-PAA V2</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Design Caliber Device</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">CX-50</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Clamp Device</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">CX-51</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">CX-52</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Output VF22</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Quopex V10</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Validation</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Lenovo Tablet</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Waste</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">PBA</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">EEWOO</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">BIWOLOIL</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr style={{ backgroundColor: '#003d7a', color: 'white' }}>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">The Track</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr style={{ backgroundColor: '#003d7a', color: 'white' }}>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Clamp Vehicle</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr style={{ backgroundColor: '#003d7a', color: 'white' }}>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Support Vehicle</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">2</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table2;