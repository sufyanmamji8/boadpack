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
<div className="bg-white border border-black px-3 py-2 mb-2 w-fit">
  <div className="flex items-center text-sm">
    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
    <strong className="font-semibold">Assets deployed</strong>
  </div>
</div>


          {/* Top Tables Container */}
       <div className="flex flex-col lg:flex-row gap-2 md:gap-3 mb-2 md:mb-3">
  {/* Main Table - JEDDAH AIRPORT PARKING BAYS */}
  <div className="bg-white border border-black overflow-hidden lg:flex-1">
    <div className="bg-gray-500 text-white p-1.5 text-[10px] md:text-[11px] font-bold">
      JEDDAH AIRPORT PARKING BAYS
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[250px] border-collapse text-[8px] md:text-[9px] leading-tight">
        <tbody>
          <tr className="border-b border-black">
            <td className="p-1">EMPLOYEE CAR PARK</td>
            <td className="p-1 text-right font-bold">1,089</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1">MSCP CAR PARK</td>
            <td className="p-1 text-right font-bold">5,964</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1">RENTAL CAR PARK</td>
            <td className="p-1 text-right font-bold">1,091</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1">FIRST AND BUSINESS CLASS CAR PARK</td>
            <td className="p-1 text-right font-bold">145</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1">M AND N LONG TERM PARK</td>
            <td className="p-1 text-right font-bold">2,192</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1">MSCP EMPLOYEE PARK</td>
            <td className="p-1 text-right font-bold">1,263</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1">MSCP CAR POUND</td>
            <td className="p-1 text-right font-bold">50</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1">JA P - BP</td>
            <td className="p-1 text-right font-bold">48</td>
          </tr>
          <tr>
            <td className="p-1">JA P - RO</td>
            <td className="p-1 text-right font-bold">600</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  {/* Empty space on desktop only */}
  <div className="hidden lg:block lg:flex-1"></div>
</div>

          {/* Bottom Tables Container */}
         <div className="flex flex-col lg:flex-row gap-2 md:gap-3 mb-2 md:mb-3">
  {/* PARKING RATES Table */}
  <div className="bg-white border border-black overflow-hidden lg:flex-1">
    <div className="bg-gray-500 text-white p-1.5 text-[10px] md:text-[11px] font-bold">
      PARKING RATES EXCLUDING VAT 15%
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[400px] md:min-w-full border-collapse text-[8px] md:text-[9px] leading-tight">
        <thead>
          <tr className="bg-gray-500 text-white">
            <th className="p-1 text-left border-b border-black border-r border-black">LOCATION</th>
            <th colSpan="2" className="p-1 text-center border-b border-black">RATES</th>
            <th className="p-1 text-left border-b border-black border-l border-black">Grace Period after Payment</th>
          </tr>
          <tr className="bg-gray-500 text-white">
            <th className="p-1 text-left border-b border-black border-r border-black"></th>
            <th className="p-1 text-left border-b border-black border-r border-black">Pay at Exit</th>
            <th className="p-1 text-left border-b border-black">Pay at APM</th>
            <th className="p-1 text-left border-b border-black border-l border-black"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-black">
            <td className="p-1 border-r border-black">Multi Story Car Park</td>
            <td className="p-1 border-r border-black">SAR 10 per hour</td>
            <td className="p-1">SAR 5 per hour</td>
            <td className="p-1 border-l border-black">15 mins</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1 border-r border-black">1st Class & Business Class</td>
            <td className="p-1 border-r border-black">SAR 30 per hour</td>
            <td className="p-1">SAR 20 per hour</td>
            <td className="p-1 border-l border-black">15 mins</td>
          </tr>
          <tr>
            <td className="p-1 border-r border-black">Long Term (MAN)</td>
            <td className="p-1 border-r border-black">SAR 03 per hour upto first 24 hr, after 24 hrs SAR 02 per hour</td>
            <td className="p-1">No APM</td>
            <td className="p-1 border-l border-black">15 mins</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* MEMBERSHIP CHARGES Table */}
  <div className="bg-white border border-black overflow-hidden lg:flex-1">
    <div className="bg-gray-500 text-white p-1.5 text-[10px] md:text-[11px] font-bold">
      MEMBERSHIP CHARGES EXCLUDING VAT 15%
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[300px] md:min-w-full border-collapse text-[8px] md:text-[9px] leading-tight">
        <thead>
          <tr className="bg-gray-500 text-white">
            <th className="p-1 text-left border-b border-black border-r border-black">LOCATION</th>
            <th className="p-1 text-left border-b border-black border-r border-black">GOVERNMENT EMPLOYEE</th>
            <th className="p-1 text-left border-b border-black">COMMERCIAL EMPLOYEE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-black">
            <td className="p-1 border-r border-black">Multi Story Car Park</td>
            <td className="p-1 border-r border-black">SAR 150 per month</td>
            <td className="p-1">SAR 350 per month</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1 border-r border-black">1st Class & Business Class</td>
            <td className="p-1 border-r border-black">SAR 350 per month</td>
            <td className="p-1">SAR 600 per month</td>
          </tr>
          <tr>
            <td className="p-1 border-r border-black">Staff Surface Parking Area</td>
            <td className="p-1 border-r border-black">Free</td>
            <td className="p-1">SAR 150 per month</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        </div>

        {/* Right Side Panel - Assets Deployed */}
<div className="w-full lg:w-[320px] mt-2 lg:mt-0">
  <div className="flex flex-col bg-white border border-black">
    {/* Header Section */}
    <div className="bg-[#003d7a] text-white p-1 text-[8px] md:text-[9px] font-bold flex items-center gap-1 border-b border-black">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
      Jeddah Airport
    </div>
    
    {/* Sub-header */}
    <div className="bg-[#ed1a1a] text-white p-0.5 text-[7px] md:text-[8px] font-bold border-b border-white">
      Assets Deployed
    </div>
    
    {/* Table Container */}
    <div className="w-full">
      <table className="w-full border-collapse text-[6px] md:text-[7px] leading-none">
        <tbody>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b border-r border-white w-[60%]">Ticket Dispenser</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white w-[13%]"></td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white w-[13%]">21</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">DIP G100</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">G</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">G100 64 Bit</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">15</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">G100 32 Bit</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">EV DP G100</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">24</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b border-r border-white">EV G100 64 BIT</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white">9</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">AV GSP (G100)</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">2.4</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">EV G100 64 Bit</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">9</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">EV G100 32 Bit</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">APMS</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">1.3</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">APM ETS-70</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">13</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">APM ETS-100</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">PIN PAD</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">31</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">IUPS250</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">31</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Card Reader</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">1.3</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">IUR 250</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">1.3</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">n-Countainless</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">31</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">IUC 150</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">31</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">RFID Reader</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">51</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">IP Barrier</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">56</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b border-r border-white">ANPR CAMERA</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white"></td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white">54</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">ARH</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">54</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Lumenira</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Sliding Gate</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">RIGHT</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">LEFT</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">PND's</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b border-r border-white">TPAL GNA LARGE</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white"></td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">T-PAL: TX</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">T-PAL V2</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Pound Cashier Device</td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">CN-50</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Driver Device</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">7</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">CN-51</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">7</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">END Device</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">DUKITEL WP 2</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Doogee V10</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Validation</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Lenovo Tablet</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Printer</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">7</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Pr3</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">7</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">SEEWOO</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">BIXOLONL</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Tow Track</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">7</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Clamp Vehicle</td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Support Vehicle</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-r border-white">2</td>
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