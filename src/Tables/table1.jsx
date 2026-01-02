import React from 'react';

const Table1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
 <div className="text-center mb-1 md:mb-2 py-0.5">
  <h1 className="text-xs md:text-sm font-bold text-black leading-tight">
    Jeddah Airport Profile
  </h1>
</div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="lg:flex-1">
          {/* Top Left Information Block */}
  <div className="bg-white p-2 md:p-3 mb-2 md:mb-3 border border-gray-300 rounded-lg w-full lg:w-auto">
  <div className="mb-1 md:mb-2 text-xs md:text-sm font-semibold text-gray-800 leading-tight">
    Jeddah Airport Car Park Bays <span className="font-normal">12,442</span>
  </div>
  
  <div className="space-y-0.5 md:space-y-1 ml-4 text-[10px] md:text-xs text-gray-700 leading-tight">
    <div className="flex items-start">
      <span className="mr-1 mt-0.5 text-[8px]">•</span>
      <span><strong className="text-gray-800">Contract term</strong> 4 years & 07 months; start date 06/01/2021 to 31/07/2025</span>
    </div>
    
    <div className="flex items-start">
      <span className="mr-1 mt-0.5 text-[8px]">•</span>
      <span><strong className="text-gray-800">Operational Hours</strong> 24 Hours Per day</span>
    </div>
    
    <div className="flex items-start">
      <span className="mr-1 mt-0.5 text-[8px]">•</span>
      <span><strong className="text-gray-800">Parking charges are excluding of VAT 15%</strong></span>
    </div>
    
    <div className="flex items-center">
      <div className="w-1 h-1 bg-red-500 rounded-full mr-1 flex-shrink-0"></div>
      <span><strong className="text-gray-800">Assets Deployed</strong></span>
    </div>
  </div>
</div>

          {/* Top Tables Container */}
         <div className="flex flex-col lg:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
  {/* Main Table - JEDDAH AIRPORT PARKING BAYS */}
 <div className="bg-white border border-gray-300 overflow-hidden lg:flex-1">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[300px] border-collapse text-[8px] md:text-[9px]">
      <tbody>
        <tr className="bg-gray-500 text-white font-bold">
          <td className="p-1 font-black font-bold text-black border border-gray-300">JEDDAH AIRPORT PARKING BAYS</td>
          <td className="p-1 text-right border border-gray-300">12,442</td>
        </tr>
        <tr className="border-t border-gray-400 border-b border-gray-400">
          <td className="p-1 font-black font-bold text-black border border-gray-300">EMPLOYEE CAR PARK</td>
          <td className="p-1 text-right border border-gray-300">1,089</td>
        </tr>
        <tr className="border-t border-gray-400 border-b border-gray-400">
          <td className="p-1 font-black font-bold text-black border border-gray-300">MSCP CAR PARK</td>
          <td className="p-1 text-right border border-gray-300">5,964</td>
        </tr>
        <tr className="border-t border-gray-400 border-b border-gray-400">
          <td className="p-1 font-black font-bold text-black">RENTAL CAR PARK</td>
          <td className="p-1 text-right border border-gray-300">1,091</td>
        </tr>
        <tr className="border-t border-gray-400">
          <td className="p-1 font-black font-bold border border-gray-300">FIRST AND BUSINESS CLASS CAR PARK</td>
          <td className="p-1 text-right border border-gray-300">145</td>
        </tr>
        <tr className="border-t border-gray-400">
          <td className="p-1 font-black font-bold border border-gray-300">M AND N LONG TERM PARK</td>
          <td className="p-1 text-right border border-gray-300">2,192</td>
        </tr>
        <tr className="border-t border-gray-400">
          <td className="p-1 font-black font-bold border border-gray-300">MSCP EMPLOYEE PARK</td>
          <td className="p-1 text-right border border-gray-300">1,263</td>
        </tr>
        <tr className="border-t border-gray-400">
          <td className="p-1 font-black font-bold border border-gray-300">MSCP CAR POUND</td>
          <td className="p-1 text-right border border-gray-300">50</td>
        </tr>
        <tr className="border-t border-gray-400">
          <td className="p-1 font-black font-bold border border-gray-300">JA P - BP</td>
          <td className="p-1 text-right border border-gray-300">48</td>
        </tr>
        <tr>
          <td className="p-1 font-black font-bold border border-gray-300">JA P - RO</td>
          <td className="p-1 text-right border border-gray-300">600</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  {/* Empty space on desktop only */}
  <div className="hidden lg:block lg:flex-1"></div>
</div>

          {/* Bottom Tables Container */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
  {/* PARKING RATES */}
  <div className="bg-white border border-gray-300 rounded overflow-hidden lg:w-1/2 h-full flex flex-col">
    <div className="bg-gray-500 text-white px-2 py-1 text-[11px] font-bold">
      PARKING RATES EXCLUDING VAT 15%
    </div>

    <table className="w-full border-collapse text-[11px]">
      <thead>
        <tr className="bg-gray-500 text-white">
          <th className="p-1.5 text-left border border-gray-400">LOCATION</th>
          <th colSpan={2} className="p-1.5 text-center border border-gray-400">RATES</th>
          <th className="p-1.5 text-left border border-gray-400">
            Grace Period after Payment
          </th>
        </tr>
        <tr className="bg-gray-500 text-white">
          <th className="p-1.5 border border-gray-400"></th>
          <th className="p-1.5 text-left border border-gray-400">Pay at Exit</th>
          <th className="p-1.5 text-left border border-gray-400">Pay at APM</th>
          <th className="p-1.5 border border-gray-400"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-1.5 border border-gray-300">Multi Story Car Park</td>
          <td className="p-1.5 border border-gray-300">SAR 10 / hr</td>
          <td className="p-1.5 border border-gray-300">SAR 5 / hr</td>
          <td className="p-1.5 border border-gray-300">15 mins</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-gray-300">1st Class & Business Class</td>
          <td className="p-1.5 border border-gray-300">SAR 30 / hr</td>
          <td className="p-1.5 border border-gray-300">SAR 20 / hr</td>
          <td className="p-1.5 border border-gray-300">15 mins</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-gray-300">Long Term (MAN)</td>
          <td className="p-1.5 border border-gray-300">
            SAR 03/hr (24h), then SAR 02/hr
          </td>
          <td className="p-1.5 border border-gray-300">No APM</td>
          <td className="p-1.5 border border-gray-300">15 mins</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* MEMBERSHIP CHARGES */}
  <div className="bg-white border border-gray-300 rounded overflow-hidden lg:w-1/2 h-full flex flex-col">
    <div className="bg-gray-500 text-white px-2 py-1 text-[11px] font-bold">
      MEMBERSHIP CHARGES EXCLUDING VAT 15%
    </div>

    <table className="w-full border-collapse text-[11px]">
      <thead>
        <tr className="bg-gray-500 text-white">
          <th className="p-1.5 text-left border border-gray-400">LOCATION</th>
          <th className="p-1.5 text-left border border-gray-400">
            GOVERNMENT EMPLOYEE
          </th>
          <th className="p-1.5 text-left border border-gray-400">
            COMMERCIAL EMPLOYEE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-1.5 border border-gray-300">Multi Story Car Park</td>
          <td className="p-1.5 border border-gray-300">SAR 150 / month</td>
          <td className="p-1.5 border border-gray-300">SAR 350 / month</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-gray-300">
            1st Class & Business Class
          </td>
          <td className="p-1.5 border border-gray-300">SAR 350 / month</td>
          <td className="p-1.5 border border-gray-300">SAR 600 / month</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-gray-300">
            Staff Surface Parking Area
          </td>
          <td className="p-1.5 border border-gray-300">Free</td>
          <td className="p-1.5 border border-gray-300">SAR 150 / month</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        </div>

        {/* Right Side Panel - Assets Deployed */}
     <div className="w-full lg:w-[350px] mt-2 lg:mt-0">
  <div className="flex flex-col h-auto lg:h-auto bg-white border border-black">
    {/* Header Section */}
    <div className="bg-[#003d7a] text-white p-1.5 text-[8px] md:text-[9px] font-bold flex items-center gap-1 border-b border-black">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
      Jeddah Airport
    </div>

    {/* Sub-header */}
    <div className="bg-[#ed1a1a] text-white p-1 text-[7px] md:text-[8px] font-bold border-b border-white">
      Assets Deployed
    </div>

    {/* Table Container - Removed fixed height and overflow */}
    <div className="w-full">
      <table className="w-full border-collapse text-[5px] md:text-[6px] leading-tight">
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

export default Table1;