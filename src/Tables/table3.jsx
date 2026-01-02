import React from 'react';

const Table3 = () => {
  return (
    <div className="min-h-screen bg-white p-2 md:p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      
     

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Left Table - Violations Table & Fees */}
        <div className="lg:flex-1">
          <div className="relative bg-white border border-gray-400 mb-4 md:mb-6">
 

 

  {/* Title */}
  <div className="py-6 text-center w-full">
    
    <h1 className="text-lg md:text-xl font-bold text-gray-800">
      Jeddah Airport Enforcement Profile
    </h1>
  </div>
</div>
<div className="bg-white border border-black rounded px-3 py-2 w-fit mb-2">
  <div className="flex items-center text-sm">
    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
    <strong className="font-semibold">Assets deployed</strong>
  </div>
</div>


       <div className="bg-white border border-gray-400">
        
  {/* Heading inside table */}
  <div className="bg-gray-200 border-b border-gray-400">
    <div className="p-1 text-center">
      <h2 className="text-[9px] md:text-[10px] font-bold text-gray-800">Violations Table & Fees</h2>
    </div>
  </div>

  {/* Table with reduced font size and padding */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-[7px] md:text-[8px] leading-tight">
      <thead>
        <tr className="bg-gray-100 border-b border-gray-400">
          <th className="w-6 p-0.5 text-center font-semibold text-gray-700 border-r border-gray-400">#</th>
          <th className="p-0.5 text-left font-semibold text-gray-700 border-r border-gray-400">English</th>
          <th className="w-10 p-0.5 text-center font-semibold text-gray-700 border-r border-gray-400">Code</th>
          <th className="w-16 p-0.5 text-center font-semibold text-gray-700 border-r border-gray-400">Escalation</th>
          <th className="w-10 p-0.5 text-center font-semibold text-gray-700 border-r border-gray-400">Amount</th>
          <th className="p-0.5 text-right font-semibold text-gray-700 border-r border-gray-400">Arabic</th>
          <th className="w-6 p-0.5 text-center font-semibold text-gray-700">#</th>
        </tr>
      </thead>
      <tbody>
        {/* Row 1 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">1</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Not parked within marking space</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">13</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">عدم الأوقوف بشكل صحيح ضمن حيز الأوقوف</td>
          <td className="p-0.5 text-center text-gray-800">1</td>
        </tr>
        
        {/* Row 2 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">2</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked/overstayed in a loading/unloading space</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">14</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف في التزامية لفئة طويلة في حيز التزايل و التحصيل</td>
          <td className="p-0.5 text-center text-gray-800">2</td>
        </tr>
        
        {/* Row 3 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">3</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked in a space for Special Needs without a valid permit</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">15</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">500</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف في مكان مشخصي الذي الإجتماعيات الخاصة بدون تصريح</td>
          <td className="p-0.5 text-center text-gray-800">3</td>
        </tr>
        
        {/* Row 4 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">4</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked without at least one license plate</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">16</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / Clamp</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">150</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف بدون تربية واحدة على الاقل في حيز الأوقوف</td>
          <td className="p-0.5 text-center text-gray-800">4</td>
        </tr>
        
        {/* Row 5 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">5</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked within the road and traffic area</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">800</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف ضمن حرم الطريق و مرور السيارات</td>
          <td className="p-0.5 text-center text-gray-800">5</td>
        </tr>
        
        {/* Row 6 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">6</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked in a non-parking area</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">801</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف ضمن منطقة صنع الأوقوف فيها</td>
          <td className="p-0.5 text-center text-gray-800">6</td>
        </tr>
        
        {/* Row 7 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">7</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked on pedestrian or building's entries</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">802</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف عند مداخل الشكال أو مداخل الممثل</td>
          <td className="p-0.5 text-center text-gray-800">7</td>
        </tr>
        
        {/* Row 8 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">8</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked on the pavement or on a pedestrian area</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">803</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف على التربيت أو في أماكن غير والشكال</td>
          <td className="p-0.5 text-center text-gray-800">8</td>
        </tr>
        
        {/* Row 9 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">9</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked facing the opposite direction of traffic flow</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">804</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف بشكل معاكس للتحديد النشر</td>
          <td className="p-0.5 text-center text-gray-800">9</td>
        </tr>
        
        {/* Row 10 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">10</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked in an officially reserved space</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">805</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف في مكان كل مجموع رسمياً</td>
          <td className="p-0.5 text-center text-gray-800">10</td>
        </tr>
        
        {/* Row 11 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">11</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked in a suspended space (temporary out of use)</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">806</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف في جوز معادل الاستخدام</td>
          <td className="p-0.5 text-center text-gray-800">11</td>
        </tr>
        
        {/* Row 12 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">12</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked outside allowed time</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">809</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">تجاوز العدد الأقصى للمنسوج و الأوقوف</td>
          <td className="p-0.5 text-center text-gray-800">12</td>
        </tr>
        
        {/* Row 13 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">13</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked in violation of posted signs</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">810</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف بشكل معاكس للتوحيات الاجتماعية</td>
          <td className="p-0.5 text-center text-gray-800">13</td>
        </tr>
        
        {/* Row 14 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">14</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Parked on a fire hydrant bay</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">811</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف إلى جانب طفاعات الصرفي بمسافة تدلى عن (8) أمانر</td>
          <td className="p-0.5 text-center text-gray-800">14</td>
        </tr>
        
        {/* Row 15 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">15</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Park in Sand Areas</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">21</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">350</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الأوقوف في منطقة زملية</td>
          <td className="p-0.5 text-center text-gray-800">15</td>
        </tr>
        
        {/* Row 16 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">16</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Washing / Cleaning Vehicles inside the Parking area</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">100</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">غضبان / تحقيق المركبات داخل المواقع</td>
          <td className="p-0.5 text-center text-gray-800">16</td>
        </tr>
        
        {/* Row 17 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">17</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Entering / Exiting the Parking in a wrong way</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">CN / TOW</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">1000</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">الدخول / الخروج من المواقع بطريقة غير مقابلية</td>
          <td className="p-0.5 text-center text-gray-800">17</td>
        </tr>
        
        {/* NOTES Row */}
        <tr className="border-b border-gray-300 bg-gray-50">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 font-semibold text-gray-800 border-r border-gray-300">NOTES:</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 font-semibold text-right text-gray-800 border-r border-gray-300" dir="rtl">ملاحظة:</td>
          <td className="p-0.5 text-center text-gray-800"></td>
        </tr>
        
        {/* Row 18 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">18</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Tow Charge</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">200</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">أجهزة السحب</td>
          <td className="p-0.5 text-center text-gray-800">18</td>
        </tr>
        
        {/* Row 19 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">19</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Clamp Charge</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">200</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">فقر المعطاة</td>
          <td className="p-0.5 text-center text-gray-800">19</td>
        </tr>
        
        {/* Row 20 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">20</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Storage: 120/day (start when the violated vehicle enters the Pound)</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">120</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">/ يوم رقمية عند دخول المركبة المعطاة لمعطاة لزياء المركبات؟</td>
          <td className="p-0.5 text-center text-gray-800">20</td>
        </tr>
        
        {/* Row 21 */}
        <tr className="border-b border-gray-300">
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">21</td>
          <td className="p-0.5 text-gray-800 border-r border-gray-300">Vehicle Touring Service</td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300"></td>
          <td className="p-0.5 text-center text-gray-800 border-r border-gray-300">200</td>
          <td className="p-0.5 text-right text-gray-800 border-r border-gray-300" dir="rtl">خدمة سحب المركبة</td>
          <td className="p-0.5 text-center text-gray-800">21</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        </div>

        {/* Right Side Panel - Assets Deployed */}
     <div className="w-full lg:w-[320px] mt-8 lg:mt-26">
  <div className="flex flex-col bg-white border border-black">
    {/* Header Section */}
    <div className="bg-[#003d7a] text-white p-1 text-[8px] font-bold flex items-center gap-1 border-b border-black">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
      Jeddah Airport Enforcements
    </div>
    
    {/* Sub-header */}
    <div className="bg-[#ed1a1a] text-white p-0.5 text-[6px] font-bold border-b border-white">
      Assets Deployed
    </div>
    
    {/* Table Container */}
    <div className="w-full">
      <table className="w-full border-collapse text-[6px] leading-none">
        <tbody>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b border-r border-white w-[60%]">Ticket Dispenser</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white w-[20%]"></td>
            <td className="p-0.5 text-center font-bold border-b border-white w-[20%]">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">DIP G-100</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">G-100 C1 BIT</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">G100 22 Bit</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Ticket Verifier</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">EV DP G100</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 font-bold border-b border-r border-white">EV G100 64 BITS</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white"></td>
            <td className="p-0.5 text-center font-bold border-b border-gray-200">39</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">EV G100 22</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">2.4</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">APMS</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">APM ETS -70</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">APSM ETS - 100</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">PIM PAD</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">IUP 250</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Card Reader</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">IUR 250</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">|| contacties</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">IUC 250</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">RFID reader</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">IP Barrier</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">ANPR CAMERA</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">ARH</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Lumenira</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">5.4</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">sliding gate</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b border-r border-white">right</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white">-</td>
            <td className="p-0.5 text-center font-bold border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Left</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">PNDS</td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">TPAL BNA LARGE</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">TPAL TX</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">TPAL V2</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 font-bold border-b border-r border-white">Pound Cashier Device</td>
            <td className="p-0.5 text-center font-bold border-b border-r border-white"></td>
            <td className="p-0.5 text-center font-bold border-b border-gray-200">7</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">CN50</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Driver Device</td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
            <td className="p-0.5 text-center border-b border-gray-200">7</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">CN 51</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">7</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">ENF Device</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Dukitel WP 2</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Clamp Device</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">7</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Doogee V10</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Validation</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">Lenovo tablet</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Printer</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">7</td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">PR-3</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">7</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">SEEWOO</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="p-0.5 border-b border-r border-gray-200">BIXOLON</td>
            <td className="p-0.5 text-center border-b border-r border-gray-200"></td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">TOW Truck</td>
            <td className="p-0.5 text-center border-b border-r border-white"></td>
            <td className="p-0.5 text-center border-b border-gray-200">7</td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Clamp vehicle</td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
            <td className="p-0.5 text-center border-b border-gray-200"></td>
          </tr>
          <tr className="bg-[#003d7a] text-white">
            <td className="p-0.5 border-b border-r border-white">Support Vehicle</td>
            <td className="p-0.5 text-center border-b border-r border-white">-</td>
            <td className="p-0.5 text-center border-b border-gray-200">-</td>
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

export default Table3;