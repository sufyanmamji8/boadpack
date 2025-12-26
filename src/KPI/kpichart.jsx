import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const KPIChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // Data extracted from the image
    const months = [
      'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024',
      'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024',
      'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025',
      'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'
    ];

    const eoEdosData = [7, 9, 8, 8, 9, 11, 9, 7, 6, 8, 7, 9, 9, 10, 10, 11, 9, 9, 8, 9, 9, 10];
    const campData = [6, 4, 4, 3, 6, 8, 4, 3, 3, 6, 5, 5, 2, 4, 5, 2, 1, 2, 4, 4, 3, 3];
    const towData = [7, 9, 8, 8, 9, 11, 9, 7, 6, 8, 7, 9, 9, 10, 10, 11, 9, 9, 8, 9, 9, 10];

    const option = {
      backgroundColor: '#1a1a1a',
      title: {
        text: 'Jeddah Airport Enforcement Performance – KPI',
        subtext: 'Average Daily Employed',
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
        data: ['EO/EODs', 'CAMP', 'TOW'],
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
        left: '3%',
        right: '3%',
        bottom: '25%',
        top: '22%'
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLine: {
          lineStyle: { color: '#666' }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: 'Average Daily Employment',
        nameTextStyle: {
          color: '#fff',
          fontSize: 10,
          padding: [0, 0, 0, 20]
        },
        nameLocation: 'center',
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
        }
      },
      series: [
        {
          name: 'EO/EODs',
          type: 'line',
          data: eoEdosData,
          itemStyle: {
            color: '#00bfff',
            shadowBlur: 10,
            shadowColor: '#00bfff'
          },
          lineStyle: {
            color: '#00bfff',
            width: 2,
            shadowBlur: 15,
            shadowColor: '#00bfff'
          },
          symbol: 'circle',
          symbolSize: 4,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            backgroundColor: '#1a1a1a',
            borderColor: '#00bfff',
            borderWidth: 1,
            padding: [2, 3],
            borderRadius: 2,
            fontSize: 8,
            formatter: '{c}'
          }
        },
        {
          name: 'CAMP',
          type: 'line',
          data: campData,
          itemStyle: {
            color: '#ff8c00',
            shadowBlur: 10,
            shadowColor: '#ff8c00'
          },
          lineStyle: {
            color: '#ff8c00',
            width: 2,
            shadowBlur: 15,
            shadowColor: '#ff8c00'
          },
          symbol: 'circle',
          symbolSize: 4,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            backgroundColor: '#1a1a1a',
            borderColor: '#ff8c00',
            borderWidth: 1,
            padding: [2, 3],
            borderRadius: 2,
            fontSize: 8,
            formatter: '{c}'
          }
        },
        {
          name: 'TOW',
          type: 'line',
          data: towData,
          itemStyle: {
            color: '#9acd32',
            shadowBlur: 10,
            shadowColor: '#9acd32'
          },
          lineStyle: {
            color: '#9acd32',
            width: 2,
            shadowBlur: 15,
            shadowColor: '#9acd32'
          },
          symbol: 'circle',
          symbolSize: 4,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            backgroundColor: '#1a1a1a',
            borderColor: '#00bfff',
            borderWidth: 1,
            padding: [2, 3],
            borderRadius: 2,
            fontSize: 8,
            formatter: '{c}'
          }
        }
      ],
      graphic: [
        {
          type: 'group',
          left: '18%',
          top: '25%',
          children: [
            {
              type: 'line',
              shape: {
                x1: 0,
                y1: 0,
                x2: 35,
                y2: -25
              },
              style: {
                stroke: '#00bfff',
                lineWidth: 1.5
              }
            },
            {
              type: 'rect',
              shape: {
                x: 35,
                y: -35,
                width: 85,
                height: 25
              },
              style: {
                fill: '#1a1a1a',
                stroke: '#00bfff'
              }
            },
            {
              type: 'text',
              left: 40,
              top: -31,
              style: {
                text: 'RAMADHAN 2024',
                fill: '#fff',
                fontSize: 9,
                fontWeight: 'bold'
              }
            },
            {
              type: 'text',
              left: 40,
              top: -19,
              style: {
                text: 'Apr, 8',
                fill: '#fff',
                fontSize: 8
              }
            }
          ]
        },
        {
          type: 'group',
          left: '48%',
          top: '25%',
          children: [
            {
              type: 'line',
              shape: {
                x1: 0,
                y1: 0,
                x2: 35,
                y2: -25
              },
              style: {
                stroke: '#00bfff',
                lineWidth: 1.5
              }
            },
            {
              type: 'rect',
              shape: {
                x: 35,
                y: -35,
                width: 85,
                height: 25
              },
              style: {
                fill: '#1a1a1a',
                stroke: '#00bfff'
              }
            },
            {
              type: 'text',
              left: 40,
              top: -31,
              style: {
                text: 'RAMADHAN 2025',
                fill: '#fff',
                fontSize: 9,
                fontWeight: 'bold'
              }
            },
            {
              type: 'text',
              left: 40,
              top: -19,
              style: {
                text: 'Mar, 10',
                fill: '#fff',
                fontSize: 8
              }
            }
          ]
        }
      ]
    };

    myChart.setOption(option);

    // Add data table at the bottom
    const tableContainer = document.createElement('div');
    tableContainer.style.cssText = `
      position: absolute;
      bottom: 50px;
      left: 3%;
      right: 3%;
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 4px;
      padding: 5px;
      font-family: monospace;
      font-size: 8px;
      color: #fff;
      overflow-x: auto;
      max-height: 100px;
    `;

    const tableHTML = `
      <table style="width: 100%; border-collapse: collapse; color: #fff; min-width: 800px;">
        <thead>
          <tr style="background: #2a2a2a;">
            <th style="border: 1px solid #444; padding: 3px; text-align: left; font-size: 8px; width: 80px;">Metric</th>
            ${months.map(month => `<th style="border: 1px solid #444; padding: 3px; font-size: 7px; min-width: 35px;">${month}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #444; padding: 3px; background: #2a2a2a; font-weight: bold; font-size: 8px;"><span style="display: inline-block; width: 12px; height: 2px; background-color: #00bfff; margin-right: 5px;"></span>EO/EOD's</td>
            ${eoEdosData.map(val => `<td style="border: 1px solid #444; padding: 3px; text-align: center; font-size: 8px;">${val}</td>`).join('')}
          </tr>
          <tr>
            <td style="border: 1px solid #444; padding: 3px; background: #2a2a2a; font-weight: bold; font-size: 8px;"><span style="display: inline-block; width: 12px; height: 2px; background-color: #ff8c00; margin-right: 5px;"></span>CAMP</td>
            ${campData.map(val => `<td style="border: 1px solid #444; padding: 3px; text-align: center; font-size: 8px;">${val}</td>`).join('')}
          </tr>
          <tr>
            <td style="border: 1px solid #444; padding: 3px; background: #2a2a2a; font-weight: bold; font-size: 8px;"><span style="display: inline-block; width: 12px; height: 2px; background-color: #9acd32; margin-right: 5px;"></span>TOW</td>
            ${towData.map(val => `<td style="border: 1px solid #444; padding: 3px; text-align: center; font-size: 8px;">${val}</td>`).join('')}
          </tr>
        </tbody>
      </table>
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
  <div
    ref={chartRef}
    style={{
      width: '100%',     // Change from 100vw
      height: '100%',    // Change from 100vh
      backgroundColor: '#cc3838',  // Match the page background (red)
      position: 'relative',
    }}
  />
);
};

export default KPIChart;