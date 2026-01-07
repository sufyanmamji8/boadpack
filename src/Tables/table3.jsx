import React from 'react';
import airportLogo from '../assets/top.png';
import lshapeImage from '../assets/Lshape.png';
import top2 from '../assets/top2.png';

const Table3 = () => {
  return (
    <div className="min-h-screen bg-white p-2 md:p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="py-6 text-center w-full relative flex items-center justify-center">
        <img src={airportLogo} alt="Jeddah Airport Logo" className="absolute left-0 top-[-10] h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain" />
        <h1 className="text-lg md:text-xl font-bold text-gray-800">
          Jeddah Airport Enforcement Profile
        </h1>
        <img src={lshapeImage} alt="Lshape" className="absolute right-0 top-3 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain" />
      </div>

      {/* Main container with padding */}
      <div className='border p-4 md:p-6 lg:p-8'>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 relative">
          {/* Left Table - Violations Table & Fees */}
          <div className="lg:flex-1">
            <div className="relative bg-white mb-4 md:mb-6">
              {/* Title */}
              <div className=" text-center w-full relative flex items-center justify-center">
                {/* Title content removed as per original */}
              </div>
            </div>
          
            {/* Image and Assets deployed section */}
            <div className="flex items-start bg-white p-2 md:p-3 mb-2 md:mb-3 w-full lg:w-auto">
              {/* Image Container */}
              <div className="hidden md:block flex-shrink-0 mr-0 mt-[-12px] mt-1">
                <img 
                  src={top2}
                  alt="Jeddah Airport Enforcement"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              
              {/* Information Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-4"></div>
                  <span className="text-gray-800 mt-4 font-medium text-sm">Assets deployed</span>
                </div>
              </div>
            </div>

            {/* Violations Table */}
            <div className="bg-white border border-black">
              {/* Heading inside table */}
              <div className="bg-gray-200 border-b border-black">
                <div className="p-1 text-center">
                  <h2 className="text-[9px] md:text-[10px] font-bold text-gray-800">Violations Table & Fees</h2>
                </div>
              </div>

              {/* Table with reduced font size and padding */}
              <div className="overflow-x-auto border border-black">
                <table className="w-full border-collapse text-[7px] md:text-[8px] leading-tight border border-black">
                  <thead>
                    <tr className="bg-gray-100 border-b border-black">
                      <th className="w-6 p-0.5 text-center font-semibold text-gray-700 border border-black">#</th>
                      <th className="p-0.5 text-left font-semibold text-gray-700 border border-black">English</th>
                      <th className="w-10 p-0.5 text-center font-semibold text-gray-700 border border-black">Code</th>
                      <th className="w-16 p-0.5 text-center font-semibold text-gray-700 border border-black">Escalation</th>
                      <th className="w-10 p-0.5 text-center font-semibold text-gray-700 border border-black">Amount</th>
                      <th className="p-0.5 text-right font-semibold text-gray-700 border border-black">Arabic</th>
                      <th className="w-6 p-0.5 text-center font-semibold text-gray-700 border border-black">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table rows remain the same */}
                    {/* Row 1 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">1</td>
                      <td className="p-1.5 text-gray-800 border border-black">Not parked within marking space</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">13</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">عدم الأوقوف بشكل صحيح ضمن حيز الأوقوف</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">1</td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">2</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked/overstayed in a loading/unloading space</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">14</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف في التزامية لفئة طويلة في حيز التزايل و التحصيل</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">2</td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">3</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked in a space for Special Needs without a valid permit</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">15</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">500</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف في مكان مشخصي الذي الإجتماعيات الخاصة بدون تصريح</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">3</td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">4</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked without at least one license plate</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">16</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / Clamp</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">150</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف بدون تربية واحدة على الاقل في حيز الأوقوف</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">4</td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">5</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked within the road and traffic area</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">800</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف ضمن حرم الطريق و مرور السيارات</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">5</td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">6</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked in a non-parking area</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">801</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف ضمن منطقة صنع الأوقوف فيها</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">6</td>
                    </tr>

                    {/* Row 7 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">7</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked on pedestrian or building's entries</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">802</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف عند مداخل الشكال أو مداخل الممثل</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">7</td>
                    </tr>

                    {/* Row 8 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">8</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked on the pavement or on a pedestrian area</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">803</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف على التربيت أو في أماكن غير والشكال</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">8</td>
                    </tr>

                    {/* Row 9 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">9</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked facing opposite direction of traffic flow</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">804</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف بشكل معاكس للتحديد النشر</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">9</td>
                    </tr>

                    {/* Row 10 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">10</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked in an officially reserved space</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">805</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف في مكان كل مجموع رسمياً</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">10</td>
                    </tr>

                    {/* Row 11 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">11</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked in a suspended space (temporary out of use)</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">806</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف في جوز معادل الاستخدام</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">11</td>
                    </tr>

                    {/* Row 12 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">12</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked outside allowed time</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">809</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">تجاوز العدد الأقصى للمنسوج و الأوقوف</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">12</td>
                    </tr>

                    {/* Row 13 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">13</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked in violation of posted signs</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">810</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف بشكل معاكس للتوحيات الاجتماعية</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">13</td>
                    </tr>

                    {/* Row 14 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">14</td>
                      <td className="p-1.5 text-gray-800 border border-black">Parked on a fire hydrant bay</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">811</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف إلى جانب طفاعات الصرفي بمسافة تدلى عن (8) أمانر</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">14</td>
                    </tr>

                    {/* Row 15 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">15</td>
                      <td className="p-1.5 text-gray-800 border border-black">Park in Sand Areas</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">21</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">350</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الأوقوف في منطقة زملية</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">15</td>
                    </tr>

                    {/* Row 16 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">16</td>
                      <td className="p-1.5 text-gray-800 border border-black">Washing / Cleaning Vehicles inside the Parking area</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">100</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">غضبان / تحقيق المركبات داخل المواقع</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">16</td>
                    </tr>

                    {/* Row 17 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">17</td>
                      <td className="p-1.5 text-gray-800 border border-black">Entering / Exiting the Parking in a wrong way</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">CN / TOW</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">1000</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">الدخول / الخروج من المواقع بطريقة غير مقابلية</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">17</td>
                    </tr>

                    {/* NOTES Row */}
                    <tr className="border border-black bg-gray-100">
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 font-bold text-gray-800 border border-black">NOTES:</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 font-bold text-right text-gray-800 border border-black" dir="rtl">ملاحظة:</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                    </tr>

                    {/* Row 18 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">18</td>
                      <td className="p-1.5 text-gray-800 border border-black">Tow Charge</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">200</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">أجهزة السحب</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">18</td>
                    </tr>

                    {/* Row 19 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">19</td>
                      <td className="p-1.5 text-gray-800 border border-black">Clamp Charge</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">200</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">فقر المعطاة</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">19</td>
                    </tr>

                    {/* Row 20 */}
                    <tr className="border-b border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">20</td>
                      <td className="p-1.5 text-gray-800 border border-black">Storage: 120/day (start when the violated vehicle enters the Pound)</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">120</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">/ يوم رقمية عند دخول المركبة المعطاة لمعطاة لزياء المركبات؟</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">20</td>
                    </tr>

                    {/* Row 21 */}
                    <tr className="border border-black">
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">21</td>
                      <td className="p-1.5 text-gray-800 border border-black">Vehicle Touring Service</td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black"></td>
                      <td className="p-1.5 text-center text-gray-800 border border-black">200</td>
                      <td className="p-1.5 text-right text-gray-800 border border-black" dir="rtl">خدمة سحب المركبة</td>
                      <td className="p-1.5 text-center text-gray-800 font-medium border border-black">21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Side Panel - Assets Deployed */}
          <div className="w-full lg:w-[280px] mt-0 lg:mt-32 self-start">
            <div className="flex flex-col bg-white border border-black h-full">
              {/* Header Section */}
              <div className="bg-[#003d7a] text-white p-1 text-[8px] font-bold flex items-center gap-1 border-b border-black">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                Jeddah Airport Enforcements
              </div>

              {/* Sub-header */}
              <div className="bg-[#ed1a1a] text-white p-0.5 text-[6px] font-bold border-b border-black">
                Assets Deployed
              </div>

              {/* Table Container */}
              <div className="w-full flex-grow overflow-hidden">
                <div className="h-full overflow-y-auto">
                  <table className="w-full border-collapse text-[6px] leading-none">
                    <tbody>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 font-bold border-b border-r border-black w-[60%]">Ticket Dispenser</td>
                        <td className="p-0.5 text-center font-bold border-b border-r border-black w-[20%]"></td>
                        <td className="p-0.5 text-center font-bold border-b border-black w-[20%]">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">DIP G-100</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">G-100 C1 BIT</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">G100 22 Bit</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">Ticket Verifier</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">EV DP G100</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 font-bold border-b border-r border-black">EV G100 64 BITS</td>
                        <td className="p-0.5 text-center font-bold border-b border-r border-black"></td>
                        <td className="p-0.5 text-center font-bold border-b border-black">39</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">EV G100 22</td>
                        <td className="p-0.5 text-center border-b border-r border-black">2.4</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">APMS</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">APM ETS -70</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">APSM ETS - 100</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">PIM PAD</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">IUP 250</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">Card Reader</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">IUR 250</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">|| contacties</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">IUC 250</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">RFID reader</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">IP Barrier</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">ANPR CAMERA</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">ARH</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">Lumenira</td>
                        <td className="p-0.5 text-center border-b border-r border-black">5.4</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">sliding gate</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 font-bold border-b border-r border-black">right</td>
                        <td className="p-0.5 text-center font-bold border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center font-bold border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">Left</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">PNDS</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">TPAL BNA LARGE</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">TPAL TX</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">TPAL V2</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 font-bold border-b border-r border-black">Pound Cashier Device</td>
                        <td className="p-0.5 text-center font-bold border-b border-r border-black"></td>
                        <td className="p-0.5 text-center font-bold border-b border-black">7</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">CN50</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">Driver Device</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black">7</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">CN 51</td>
                        <td className="p-0.5 text-center border-b border-r border-black">7</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">ENF Device</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">Dukitel WP 2</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">Clamp Device</td>
                        <td className="p-0.5 text-center border-b border-r border-black">7</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">Doogee V10</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">Validation</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">Lenovo tablet</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">Printer</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">7</td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">PR-3</td>
                        <td className="p-0.5 text-center border-b border-r border-black">7</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">SEEWOO</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-black"></td>
                      </tr>
                      <tr>
                        <td className="p-0.5 border-b border-r border-black">BIXOLON</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">-</td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">TOW Truck</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                        <td className="p-0.5 text-center border-b border-black">7</td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">Clamp vehicle</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-r border-black"></td>
                      </tr>
                      <tr className="bg-[#003d7a] text-white">
                        <td className="p-0.5 border-b border-r border-black">Support Vehicle</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                        <td className="p-0.5 text-center border-b border-r border-black">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table3;