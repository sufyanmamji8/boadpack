import React from 'react';

const Table3 = () => {
  return (
    <div className="min-h-screen bg-white p-2 md:p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="relative bg-white border border-gray-400 mb-4 md:mb-6">
        <div className="absolute top-2 right-4 md:top-3 md:right-20 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-xs font-semibold text-gray-700">Assets Deployed</span>
        </div>
        {/* Top Blue Corner Shape */}
        <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[48px] md:border-l-[64px] border-l-transparent border-t-[48px] md:border-t-[64px] border-t-blue-600"></div>
        </div>
        
        {/* Title */}
        <div className="py-4 md:py-6 text-center">
          <h1 className="text-base md:text-xl font-bold text-gray-800">Jeddah Airport Enforcement Profile</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Left Table - Violations Table & Fees */}
        <div className="lg:flex-1">
          {/* Table Title */}
          <div className="mb-2 md:mb-3 text-center">
            <h2 className="text-sm md:text-base font-bold text-gray-800">Violations Table & Fees</h2>
          </div>

          {/* Main Table */}
          <div className="bg-white border border-gray-400 overflow-x-auto" style={{ maxHeight: '400px', height: '400px', overflowY: 'auto' }}>
            <table className="w-full border-collapse min-w-[600px] md:min-w-[800px]">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-400">
                  <th className="w-8 md:w-10 p-1 md:p-2 text-center text-[10px] md:text-xs font-semibold text-gray-700 border-r border-gray-400">#</th>
                  <th className="p-1 md:p-2 text-left text-[10px] md:text-xs font-semibold text-gray-700 border-r border-gray-400">English</th>
                  <th className="w-12 md:w-16 p-1 md:p-2 text-center text-[10px] md:text-xs font-semibold text-gray-700 border-r border-gray-400">Code</th>
                  <th className="w-20 md:w-24 p-1 md:p-2 text-center text-[10px] md:text-xs font-semibold text-gray-700 border-r border-gray-400">Escalation</th>
                  <th className="w-12 md:w-16 p-1 md:p-2 text-center text-[10px] md:text-xs font-semibold text-gray-700 border-r border-gray-400">Amount</th>
                  <th className="p-1 md:p-2 text-right text-[10px] md:text-xs font-semibold text-gray-700">Arabic</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">1</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Not parked within marking space</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">13</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">غير متوقفة داخل المكان المخصص</td>
                </tr>
                
                {/* Row 2 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">2</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked/overstayed in a loading/unloading space</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">14</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة / تجاوزت المدة المسموحة في مكان تحميل وتنزيل البضائع</td>
                </tr>
                
                {/* Row 3 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">3</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked in a space for Special Needs without a valid permit</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">15</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">500</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة في مكان ذوي الاحتياجات الخاصة بدون تصريح</td>
                </tr>
                
                {/* Row 4 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">4</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked without at least one license plate</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">16</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / Clamp</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">150</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة بدون لوحة أرقام واحدة على الأقل</td>
                </tr>
                
                {/* Row 5 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">5</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked within the road and traffic area</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">800</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة داخل طريق ومنطقة سير المركبات</td>
                </tr>
                
                {/* Row 6 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">6</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked in a non-parking area</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">801</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة في منطقة ليست مخصصة للانتظار</td>
                </tr>
                
                {/* Row 7 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">7</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked on pedestrian or building's entries</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">802</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة على الممرات أو مداخل المباني</td>
                </tr>
                
                {/* Row 8 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">8</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked on the pavement or on a pedestrian area</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">803</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة على الرصيف أو في منطقة المشاة</td>
                </tr>
                
                {/* Row 9 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">9</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked facing the opposite direction of traffic flow</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">804</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة في اتجاه معاكس لاتجاه السير</td>
                </tr>
                
                {/* Row 10 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">10</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked in an officially reserved space</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">805</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة في مكان مخصص رسمياً</td>
                </tr>
                
                {/* Row 11 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">11</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked in a suspended space (temporary out of use)</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">806</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة في مكان معلق مؤقتا من الخدمة</td>
                </tr>
                
                {/* Row 12 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">12</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked outside allowed time</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">809</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة خارج الوقت المسموح</td>
                </tr>
                
                {/* Row 13 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">13</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked in violation of posted signs</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">810</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة بشكل مخالف للعلامات المرورية</td>
                </tr>
                
                {/* Row 14 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">14</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parked on a fire hydrant bay</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">811</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة على فتحة مياه الإطفاء</td>
                </tr>
                
                {/* Row 15 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">15</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Park in Sand Areas</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">21</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">موقوفة في منطقة رملية</td>
                </tr>
                
                {/* Row 16 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">16</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Washing / Cleaning Vehicles inside the Parking area</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400"></td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">100</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">غسيل / تنظيف المركبات داخل مواقف السيارات</td>
                </tr>
                
                {/* Row 17 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">17</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Entering / Exiting the Parking in a wrong way</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400"></td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">1000</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">الدخول / الخروج من المواقف بطريقة خاطئة</td>
                </tr>
                
                {/* Row 18 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">18</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Obstructing traffic flow</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">812</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">عرقلة حركة السير</td>
                </tr>
                
                {/* Row 19 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">19</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parking in emergency lane</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">813</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">500</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">الوقوف في مسار الطوارئ</td>
                </tr>
                
                {/* Row 20 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">20</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Double parking</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">814</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">350</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">وقوف مزدوج</td>
                </tr>
                
                {/* Row 21 */}
                <tr className="border-b border-gray-400">
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">21</td>
                  <td className="p-1 md:p-2 text-[10px] md:text-xs text-gray-800 border-r border-gray-400">Parking in disabled zone without permit</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">815</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">CN / TOW</td>
                  <td className="p-1 md:p-2 text-center text-[10px] md:text-xs text-gray-800 border-r border-gray-400">500</td>
                  <td className="p-1 md:p-2 text-right text-[10px] md:text-xs text-gray-800" dir="rtl">الوقوف في منطقة المعاقين بدون تصريح</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side Panel - Assets Deployed */}
        <div className="w-full lg:w-[350px] mt-4 lg:mt-0">
          <div className="flex flex-col h-[400px] lg:h-[600px] bg-white border border-black">
            {/* Header Section */}
            <div className="bg-[#003d7a] text-white p-2 text-xs font-bold flex items-center gap-2 border-b-2 border-black flex-shrink-0">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Jeddah Airport Enforcements
            </div>
            
            {/* Sub-header */}
            <div className="bg-[#ed1a1a] text-white p-2 text-[10px] md:text-[11px] font-bold border-b border-white flex-shrink-0">
              Assets Deployed
            </div>
            
            {/* Scrollable Table Container */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              <table className="w-full border-collapse text-[6px] md:text-[7px] table-fixed">
                <tbody>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white w-[60%]">Ticket Dispenser</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white w-[20%]"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black w-[20%]">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">DIP G-100</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">G-100 C1 BIT</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">G100 22 Bit</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Ticket Verifier</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">EV DP G100</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white">EV G100 64 BITS</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black">39</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">EV G100 22</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">2.4</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">APMS</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">APM ETS -70</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">APSM ETS - 100</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">PIM PAD</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">IUP 250</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Card Reader</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">IUR 250</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">|| contacties</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">IUC 250</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">RFID reader</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">IP Barrier</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">ANPR CAMERA</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">ARH</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Lumenira</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">5.4</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">sliding gate</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white">right</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white">-</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Left</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">PNDS</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">TPAL BNA LARGE</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">TPAL TX</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">TPAL V2</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 font-bold border-b border-black border-r border-white">Pound Cashier Device</td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center font-bold border-b border-black">7</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">CN50</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Driver Device</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">7</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">CN 51</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">ENF Device</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Dukitel WP 2</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Clamp Device</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Doogee V10</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Validation</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">Lenovo tablet</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Printer</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">7</td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">PR-3</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">7</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">SEEWOO</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-gray-300">BIXOLON</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-gray-300"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">TOW Truck</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white"></td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">7</td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Clamp vehicle</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300"></td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Support Vehicle</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
                  </tr>
                  <tr className="bg-[#003d7a] text-white">
                    <td className="p-1 md:p-1.5 border-b border-gray-300 border-r border-white">Support Vehicle</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300 border-r border-white">-</td>
                    <td className="p-1 md:p-1.5 text-center border-b border-gray-300">-</td>
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