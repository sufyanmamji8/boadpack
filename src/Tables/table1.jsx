import React from 'react';

const Table1 = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
 <div className="text-center mb-1 md:mb-2 py-0.5">
  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-black leading-tight">
    Jeddah Airport Profile
  </h1>
</div>
<div className='border-2 p-4'>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="lg:flex-1">
          {/* Top Left Information Block */}
  <div className="bg-white p-2 md:p-3 mb-2 md:mb-3 w-full lg:w-auto">
<div className="mb-1 md:mb-2 text-xs md:text-sm text-gray-800 leading-tight">
  Jeddah Airport Car Park Bays{" "}
  <span className="font-semibold">12,449</span>
</div>

  
  <div className="space-y-0.5 md:space-y-1 ml-4 text-[10px] md:text-xs text-gray-700 leading-tight">
    <div className="flex items-start">
      <span className="mr-1 mt-0.5 text-[8px]">•</span>
<span>
  Contract term{" "}
  <strong className="text-gray-800">
    4 years &amp; 07 months; start date 06/01/2021 to 31/07/2025
  </strong>
</span>
    </div>
    
    <div className="flex items-start">
      <span className="mr-1 mt-0.5 text-[8px]">•</span>
      <span>Operational Hours<strong className="text-gray-800"> 24 Hours Per day </strong></span>
    </div>
    
    <div className="flex items-start">
      <span className="mr-1 mt-0.5 text-[8px]">•</span>
      <span>Parking charges are excluding of VAT 15%</span>
    </div>
    
    <div className="flex items-center">
      <div className="w-3 h-3 bg-red-500 rounded-full mr-1 flex-shrink-0"></div>
      <span>Assets Deployed</span>
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
        <tr className="bg-gray-300 text-white font-bold">
          <td className="p-1 font-black font-bold text-black border-2 border-black">JEDDAH AIRPORT PARKING BAYS</td>
          <td className="p-1 text-black text-right border-2 border-black">12,442</td>
        </tr>
        <tr className="border-t-2 border-b-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">EMPLOYEE CAR PARK</td>
          <td className="p-1 text-right border-2 border-black">1,089</td>
        </tr>
        <tr className="border-t-2 border-b-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">MSCP CAR PARK</td>
          <td className="p-1 text-right border-2 border-black">5,964</td>
        </tr>
        <tr className="border-t-2 border-b-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">RENTAL CAR PARK</td>
          <td className="p-1 text-right border-2 border-black">1,091</td>
        </tr>
        <tr className="border-t-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">FIRST AND BUSINESS CLASS CAR PARK</td>
          <td className="p-1 text-right border-2 border-black">145</td>
        </tr>
        <tr className="border-t-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">M AND N LONG TERM PARK</td>
          <td className="p-1 text-right border-2 border-black">2,192</td>
        </tr>
        <tr className="border-t-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">MSCP EMPLOYEE PARK</td>
          <td className="p-1 text-right border-2 border-black">1,263</td>
        </tr>
        <tr className="border-t-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">MSCP CAR POUND</td>
          <td className="p-1 text-right border-2 border-black">50</td>
        </tr>
        <tr className="border-t-2 border-black">
          <td className="p-1 font-black font-bold text-black border-2 border-black">JA P - BP</td>
          <td className="p-1 text-right border-2 border-black">48</td>
        </tr>
        <tr>
          <td className="p-1 font-black font-bold text-black border-2 border-black">JA P - RO</td>
          <td className="p-1 text-right border-2 border-black">600</td>
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
  <div className="bg-white border border-black rounded overflow-hidden lg:w-1/2 h-full flex flex-col">
    <div className="bg-gray-300 text-black px-2 py-1 text-[11px] font-bold">
      PARKING RATES EXCLUDING VAT 15%
    </div>

    <table className="w-full border-collapse text-[11px]">
      <thead>
        <tr className="bg-white text-black">
          <th className="p-1.5 text-left border border-black">LOCATION</th>
          <th colSpan={2} className="p-1.5 text-center border border-black">RATES</th>
          <th className="p-1.5 text-left border border-black">
            Grace Period after Payment
          </th>
        </tr>
        <tr className="bg-white text-black">
          <th className="p-1.5 border border-black"></th>
          <th className="p-1.5  text-left border border-black">Pay at Exit</th>
          <th className="p-1.5 text-left border border-black">Pay at APM</th>
          <th className="p-1.5 border border-black"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-1.5 border border-black">Multi Story Car Park</td>
          <td className="p-1.5 border border-black">SAR 10 / hr</td>
          <td className="p-1.5 border border-black">SAR 5 / hr</td>
          <td className="p-1.5 border border-black">15 mins</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-black">1st Class & Business Class</td>
          <td className="p-1.5 border border-black">SAR 30 / hr</td>
          <td className="p-1.5 border border-black">SAR 20 / hr</td>
          <td className="p-1.5 border border-black">15 mins</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-black">Long Term (MAN)</td>
          <td className="p-1.5 border border-black">
            SAR 03/hr (24h) until first 24hr, sfter 24hr SAR (22 per hour)
          </td>
          <td className="p-1.5 border border-black">No APM</td>
          <td className="p-1.5 border border-black">15 mins</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* MEMBERSHIP CHARGES */}
  <div className="bg-white border border-black rounded overflow-hidden lg:w-1/2 h-full flex flex-col">
    <div className="bg-gray-300 text-black px-2 py-1.5 text-[11px] font-bold">
      MEMBERSHIP CHARGES EXCLUDING VAT 15%
    </div>

    <table className="w-full border-collapse text-[11px]">
      <thead>
        <tr className="bg-white text-black py-6">
          <th className="p-1.5 text-left border border-black py-9">LOCATION</th>
          <th className="p-1.5 text-left border border-black py-9">
            GOVERNMENT EMPLOYEE
          </th>
          <th className="p-1.5 text-left border border-black py-4">
            COMMERCIAL EMPLOYEE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-1.5 border border-black py-3">Multi Story Car Park</td>
          <td className="p-1.5 border border-black ">SAR 150 / month</td>
          <td className="p-1.5 border border-black">SAR 350 / month</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-black">
            1st Class & Business Class
          </td>
          <td className="p-1.5 border border-black py-3">SAR 350 / month</td>
          <td className="p-1.5 border border-black">SAR 600 / month</td>
        </tr>
        <tr>
          <td className="p-1.5 border border-black">
            Staff Surface Parking Area
          </td>
          <td className="p-1.5 border border-black py-4">Free</td>
          <td className="p-1.5 border border-black">SAR 150 / month</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        </div>

        {/* Right Side Panel - Assets Deployed */}
    <div className="w-full lg:w-[280px] mt-2 lg:mt-0">
  <div className="flex flex-col h-auto lg:h-auto bg-white border-2 border-black">
    {/* Header Section */}
    <div className="bg-[#003d7a] text-white p-1.5 text-[8px] md:text-[9px] font-bold flex items-center gap-1 border-b-2 border-black">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
      Jeddah Airport
    </div>

    {/* Sub-header */}
    <div className="bg-[#ed1a1a] text-white p-1 text-[7px] md:text-[8px] font-bold border-b-2 border-black">
      Assets Deployed
    </div>

    {/* Table Container - Removed fixed height and overflow */}
    <div className="w-full">
      <table className="w-full border-collapse text-[5px] md:text-[6px] leading-tight">
        <tbody>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b-2 border-r-2 border-black w-[60%]">Ticket Dispenser</td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black w-[13%]"></td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black w-[13%]">21</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">DIP G100</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">G</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">G100 64 Bit</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">15</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">G100 32 Bit</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">EV DP G100</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">24</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b-2 border-r-2 border-black">EV G100 64 BIT</td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black">9</td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">AV GSP (G100)</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">2.4</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">EV G100 64 Bit</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">9</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">EV G100 32 Bit</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">APMS</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">1.3</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">APM ETS-70</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">13</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">APM ETS-100</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">PIN PAD</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">31</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">IUPS250</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">31</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Card Reader</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">1.3</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">IUR 250</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">1.3</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">n-Countainless</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">31</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">IUC 150</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">31</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">RFID Reader</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">51</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">IP Barrier</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">56</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b-2 border-r-2 border-black">ANPR CAMERA</td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black">54</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">ARH</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">54</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">Lumenira</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Sliding Gate</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">RIGHT</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">LEFT</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">PND's</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b-2 border-r-2 border-black">TPAL GNA LARGE</td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center font-bold border-b-2 border-r-2 border-black">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">T-PAL: TX</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">T-PAL V2</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Pound Cashier Device</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">CN-50</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Driver Device</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">7</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">CN-51</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">7</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
         
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">END Device</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">DUKITEL WP 2</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">Doogee V10</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Validation</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">Lenovo Tablet</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Printer</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">7</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">Pr3</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">7</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">SEEWOO</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b-2 border-r-2 border-black">BIXOLONL</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Tow Track</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">7</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Clamp Vehicle</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b-2 border-r-2 border-black">Support Vehicle</td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black"></td>
            <td className="p-0.5 text-center border-b-2 border-r-2 border-black">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
      </div>
      </div>
    </div>
  );
};

export default Table1;