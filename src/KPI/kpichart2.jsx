import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const KPIChart2 = () => {
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

    // Clamp Driver Emp (gray bars) – values exactly as shown on bar tops and bottom table
    const employedData = [6, 4, 4, 3, 6, 8, 4, 3, 3, 6, 5, 5, 2, 4, 5, 2, 1, 2, 4, 4, 3, 3];

    // Clamp Driver Dep (orange line) – values exactly as shown on orange labels
    const deployedData = [6, 4, 4, 3, 6, 8, 4, 3, 3, 6, 5, 5, 2, 4, 5, 2, 1, 2, 4, 4, 3, 3];

    // Bottom line (blue) – new line to be added
    const bottomLineData = [5, 3, 3, 2, 5, 7, 3, 2, 2, 5, 4, 4, 1, 3, 4, 1, 0, 1, 3, 3, 2, 2];

    const option = {
      backgroundColor: '#1a1a1a',
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
        data: ['Clamp Driver Emp', 'Clamp Driver Dep'],
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
        bottom: '18%',   // Make space for the data table at the bottom
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
          fontSize: 9,
          interval: 0,
          margin: 12
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
            color: '#333',
            opacity: 0.5
          }
        },
        min: 0,
        max: 10,
        interval: 1
      },
      series: [
        {
          name: 'Clamp Driver Emp',
          type: 'bar',
          data: employedData,
          itemStyle: {
            color: '#808080'  // Gray bars
          },
          barWidth: '35%',
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 9,
            backgroundColor: '#000000',
            borderColor: '#808080',
            borderWidth: 1,
            padding: [3, 6],
            borderRadius: 3,
            formatter: '{c}'
          }
        },
        {
          name: 'Clamp Driver Dep',
          type: 'line',
          data: deployedData,
          itemStyle: {
            color: '#ff8c00',
            shadowBlur: 10,
            shadowColor: '#ff8c00'
          },
          lineStyle: {
            color: '#ff8c00',
            width: 3,
            shadowBlur: 15,
            shadowColor: '#ff8c00'
          },
          symbol: 'circle',
          symbolSize: 8,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 9,
            backgroundColor: '#000000',
            borderColor: '#ff8c00',
            borderWidth: 1,
            padding: [3, 6],
            borderRadius: 3,
            formatter: '{c}'
          }
        },
        {
          name: 'Bottom Line',
          type: 'line',
          data: Array(22).fill(0),
          itemStyle: {
            color: '#ff8c00',
            shadowBlur: 10,
            shadowColor: '#ff8c00'
          },
          lineStyle: {
            color: '#ff8c00',
            width: 2,
            type: 'solid',
            shadowBlur: 15,
            shadowColor: '#ff8c00'
          },
          symbol: 'circle',
          symbolSize: 6,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 9,
            backgroundColor: '#000000',
            borderColor: '#ff8c00',
            borderWidth: 1,
            padding: [3, 6],
            borderRadius: 3,
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
              style: { stroke: '#ff8c00', lineWidth: 2, shadowBlur: 10, shadowColor: '#ff8c00' }
            },
            {
              type: 'rect',
              shape: { x: 35, y: -35, width: 140, height: 28 },
              style: { fill: '#000000', stroke: '#ff8c00', borderWidth: 2, shadowBlur: 10, shadowColor: '#ff8c00' }
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
              style: { stroke: '#ff8c00', lineWidth: 2, shadowBlur: 10, shadowColor: '#ff8c00' }
            },
            {
              type: 'rect',
              shape: { x: 35, y: -35, width: 140, height: 28 },
              style: { fill: '#000000', stroke: '#ff8c00', borderWidth: 2, shadowBlur: 10, shadowColor: '#ff8c00' }
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

    // Bottom data table – exactly matches the reference image
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
      if (chartDom && chartDom.contains(tableContainer)) {
        chartDom.removeChild(tableContainer);
      }
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        height: '100vh',          // Full viewport height for single-page display
        backgroundColor: '#1a1a1a',
        position: 'relative'
      }}
    />
  );
};

export default KPIChart2;