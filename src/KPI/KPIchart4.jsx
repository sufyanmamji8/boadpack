import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const KPIchart4 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // 22 months: Jan 2024 – Oct 2025
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct'
    ];

    // Clamp Driver Emp (gray bars) – scaled to 200-600 range for tall appearance
    const employedData = [450, 350, 350, 300, 450, 550, 350, 300, 300, 450, 400, 400, 250, 350, 400, 250, 200, 250, 350, 350, 300, 300];

    // Clamp Driver Dep (orange line) – scaled to 200-600 range for trend visualization
    const deployedData = [450, 350, 350, 300, 450, 550, 350, 300, 300, 450, 400, 400, 250, 350, 400, 250, 200, 250, 350, 350, 300, 300];

    const option = {
      backgroundColor: '#2a2a2a',  // Dark charcoal gray background
      title: {
        text: 'Jeddah Airport Enforcement Performance – KPI',
        subtext: 'Average Daily Deployed v Employed – Clamp Drivers',
        left: 'center',
        top: 10,
        textStyle: {
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 'bold'
        },
        subtextStyle: {
          color: '#ffffff',
          fontSize: 12
        }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderColor: '#333',
        textStyle: {
          color: '#fff',
          fontSize: 11
        }
      },
      legend: {
        data: ['Clamp Driver Emp', 'Upper Clamp', 'Lower Clamp'],
        top: 55,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 11
        },
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 20
      },
      grid: {
        left: '5%',
        right: '4%',
        bottom: '45%',   // Even more reduced space from bottom - make chart very small
        top: '22%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLine: {
          lineStyle: { color: '#666' }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 9
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: 'Average Daily Emp / Dep',
        nameLocation: 'middle',
        nameGap: 60,
        nameTextStyle: {
          color: '#fff',
          fontSize: 10
        },
        axisLine: {
          lineStyle: { color: '#666' }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 9
        },
        splitLine: {
          lineStyle: {
            color: '#444',
            opacity: 0.3  // Reduced gridline opacity
          }
        },
        min: 200,
        max: 600,
        interval: 50
      },
      series: [
        {
          name: 'Clamp Driver Emp',
          type: 'bar',
          data: employedData,
          barWidth: '75%',  // Three-quarters of category width
          itemStyle: {
            color: '#999999'  // Neutral medium gray without gradients or glow
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 9,
            backgroundColor: '#000000',
            borderColor: '#999999',
            borderWidth: 1,
            padding: [3, 6],
            borderRadius: 3,
            formatter: '{c}'
          }
        },
        {
          name: 'Upper Clamp',
          type: 'line',
          data: deployedData.map(val => val + 50),  // Yellow line following real data above bars
          smooth: true,  // Smooth curved lines
          itemStyle: {
            color: '#ffff00',
            shadowBlur: 8,  // Reduced glow so bars remain dominant
            shadowColor: '#ffff00'
          },
          lineStyle: {
            color: '#ffff00',
            width: 2,  // Thinner lines so bars dominate
            smooth: true,  // Smooth curved lines
            shadowBlur: 8,  // Reduced glow so bars remain dominant
            shadowColor: '#ffff00'
          },
          symbol: 'circle',
          symbolSize: 10,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 12,  // Increased data label size
            backgroundColor: '#000000',
            borderColor: '#ffff00',
            borderWidth: 2,
            padding: [5, 8],
            borderRadius: 8,  // Dark rounded boxes
            formatter: '{c}'
          }
        },
        {
          name: 'Lower Clamp',
          type: 'line',
          data: deployedData.map(val => val - 50),  // Blue line following real data below bars
          smooth: true,  // Smooth curved lines
          itemStyle: {
            color: '#00bfff',
            shadowBlur: 8,  // Reduced glow so bars remain dominant
            shadowColor: '#00bfff'
          },
          lineStyle: {
            color: '#00bfff',
            width: 2,  // Thinner lines so bars dominate
            smooth: true,  // Smooth curved lines
            shadowBlur: 8,  // Reduced glow so bars remain dominant
            shadowColor: '#00bfff'
          },
          symbol: 'circle',
          symbolSize: 10,
          label: {
            show: true,
            position: 'bottom',
            color: '#fff',
            fontSize: 12,  // Increased data label size
            backgroundColor: '#000000',
            borderColor: '#00bfff',
            borderWidth: 2,
            padding: [5, 8],
            borderRadius: 8,  // Dark rounded boxes
            formatter: '{c}'
          }
        }
      ],
      graphic: [
        // RAMADHAN 2024 callout – pointing to Apr 2024 data point
        {
          type: 'group',
          left: '17%',
          top: '28%',
          children: [
            {
              type: 'line',
              shape: { x1: 0, y1: 15, x2: 35, y2: -20 },
              style: { stroke: '#ffff00', lineWidth: 2, shadowBlur: 10, shadowColor: '#ffff00' }
            },
            {
              type: 'rect',
              shape: { x: 35, y: -35, width: 140, height: 28 },
              style: { fill: '#000000', stroke: '#ffff00', borderWidth: 2, shadowBlur: 10, shadowColor: '#ffff00' }
            },
            {
              type: 'text',
              left: 42,
              top: -30,
              style: {
                text: 'RAMADAN 2024 Apr, 8',
                fill: '#fff',
                fontSize: 10,
                fontWeight: 'bold'
              }
            }
          ]
        },
        // RAMADHAN 2025 callout – pointing to Mar 2025 data point
        {
          type: 'group',
          left: '58%',
          top: '38%',
          children: [
            {
              type: 'line',
              shape: { x1: 0, y1: 15, x2: 35, y2: -20 },
              style: { stroke: '#ffff00', lineWidth: 2, shadowBlur: 10, shadowColor: '#ffff00' }
            },
            {
              type: 'rect',
              shape: { x: 35, y: -35, width: 140, height: 28 },
              style: { fill: '#000000', stroke: '#ffff00', borderWidth: 2, shadowBlur: 10, shadowColor: '#ffff00' }
            },
            {
              type: 'text',
              left: 42,
              top: -30,
              style: {
                text: 'RAMADAN 2025 Mar, 10',
                fill: '#fff',
                fontSize: 10,
                fontWeight: 'bold'
              }
            }
          ]
        }
      ]
    };

    myChart.setOption(option);

    // Bottom data table – exactly matches reference image
    const tableContainer = document.createElement('div');
    tableContainer.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 5%;
      right: 4%;
      background: #1a1a1a;
      padding: 8px 12px;
      color: #fff;
      font-size: 9px;
      overflow-x: auto;
      max-height: 120px;
    `;

    const tableHTML = `
      <table style="width: 100%; border-collapse: collapse; min-width: 1100px; color: #fff; font-size: 9px;">
        <thead>
          <tr style="background: #2a2a2a;">
            <th style="border: 1px solid #444; padding: 5px; text-align: left; width: 140px;">
              <span style="display: inline-block; width: 20px; height: 3px; background: #ff8c00; box-shadow: 0 0 8px #ff8c00; margin-right: 8px; vertical-align: middle;"></span>
              Clamp Driver Emp
            </th>
            ${employedData.map(val => `<th style="border: 1px solid #444; padding: 5px; text-align: center;">${val}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #444; padding: 5px; background: #2a2a2a; font-weight: bold;">
              <span style="display: inline-block; width: 20px; height: 3px; background: #ff8c00; box-shadow: 0 0 8px #ff8c00; margin-right: 8px; vertical-align: middle;"></span>
              Clamp Driver Dep
            </td>
            ${deployedData.map(val => `<td style="border: 1px solid #444; padding: 5px; text-align: center;">${val}</td>`).join('')}
          </tr>
        </tbody>
      </table>
      <div style="text-align: center; margin-top: 10px; font-size: 9px; color: #aaa;"></div>
    `;

    tableContainer.innerHTML = tableHTML;
    chartDom.appendChild(tableContainer);

    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
      myChart.dispose();
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#2a2a2a', padding: '20px' }}>
      <div
        ref={chartRef}
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative'
        }}
      />
    </div>
  );
};

export default KPIchart4;