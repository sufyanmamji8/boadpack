import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import JeddahAirportChart from '../Tables/file2';

const KPIChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // Data extracted from the reference image
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct'
    ];

    const years = [
      ...Array(12).fill('2024'),
      ...Array(10).fill('2025')
    ];

    const eoEdosData = [6, 6, 6, 5, 7, 7, 7, 6, 5, 6, 6, 6, 7, 8, 8, 7, 6, 7, 7, 7, 7, 6];
    const campData = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const towData = [6, 6, 6, 6, 7, 7, 7, 6, 5, 6, 5, 6, 7, 8, 8, 7, 6, 7, 7, 7, 7, 6];

    const option = {
      backgroundColor: '#4a4a4a',
      title: {
        text: 'Jeddah Airport Enforcement Average Daily Deployed',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ffffff',
          fontSize: 13,
          fontWeight: 'normal'
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
        data: ['EO/EOD\'S', 'CLAMP', 'TOW'],
        top: 50,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 10
        },
        itemWidth: 20,
        itemHeight: 2,
        itemGap: 15
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '32%',
        top: '18%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLine: {
          lineStyle: { color: '#666' }
        },
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 9,
          interval: 0
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        name: 'Average Daily Deployed',
        nameTextStyle: {
          color: '#fff',
          fontSize: 10
        },
        nameLocation: 'middle',
        nameGap: 40,
        axisLine: {
          lineStyle: { color: '#666' }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 9
        },
        splitLine: {
          lineStyle: {
            color: '#555',
            opacity: 0.5
          }
        },
        min: 0,
        max: 9
      },
      series: [
        {
          name: 'EO/EOD\'S',
          type: 'line',
          data: eoEdosData,
          itemStyle: {
            color: '#00bfff'
          },
          lineStyle: {
            color: '#00bfff',
            width: 2
          },
          symbol: 'circle',
          symbolSize: 6,
          label: {
            show: true,
            position: 'top',
            color: '#00bfff',
            backgroundColor: 'transparent',
            borderColor: '#00bfff',
            borderWidth: 1,
            padding: [1, 3],
            borderRadius: 2,
            fontSize: 9,
            formatter: '{c}'
          }
        },
        {
          name: 'CLAMP',
          type: 'line',
          data: campData,
          itemStyle: {
            color: '#ff8c00'
          },
          lineStyle: {
            color: '#ff8c00',
            width: 2
          },
          symbol: 'circle',
          symbolSize: 6,
          label: {
            show: true,
            position: 'bottom',
            color: '#ff8c00',
            backgroundColor: 'transparent',
            borderColor: '#ff8c00',
            borderWidth: 1,
            padding: [1, 3],
            borderRadius: 2,
            fontSize: 9,
            formatter: '{c}'
          }
        },
        {
          name: 'TOW',
          type: 'line',
          data: towData,
          itemStyle: {
            color: '#9acd32'
          },
          lineStyle: {
            color: '#9acd32',
            width: 2
          },
          symbol: 'circle',
          symbolSize: 6,
          label: {
            show: true,
            position: 'top',
            color: '#9acd32',
            backgroundColor: 'transparent',
            borderColor: '#9acd32',
            borderWidth: 1,
            padding: [1, 3],
            borderRadius: 2,
            fontSize: 9,
            formatter: '{c}'
          }
        }
      ],
      graphic: [
        {
          type: 'group',
          left: '20%',
          top: '22%',
          children: [
            {
              type: 'line',
              shape: {
                x1: 0,
                y1: 0,
                x2: 20,
                y2: -20
              },
              style: {
                stroke: '#00bfff',
                lineWidth: 1.5
              }
            },
            {
              type: 'rect',
              shape: {
                x: 20,
                y: -35,
                width: 100,
                height: 20
              },
              style: {
                fill: '#4a4a4a',
                stroke: '#00bfff',
                lineWidth: 1
              }
            },
            {
              type: 'text',
              left: 25,
              top: -30,
              style: {
                text: 'RAMADHAN 2024 Apr, 6',
                fill: '#fff',
                fontSize: 8
              }
            }
          ]
        },
        {
          type: 'group',
          left: '63%',
          top: '16%',
          children: [
            {
              type: 'line',
              shape: {
                x1: 0,
                y1: 0,
                x2: 20,
                y2: -20
              },
              style: {
                stroke: '#00bfff',
                lineWidth: 1.5
              }
            },
            {
              type: 'rect',
              shape: {
                x: 20,
                y: -35,
                width: 100,
                height: 20
              },
              style: {
                fill: '#4a4a4a',
                stroke: '#00bfff',
                lineWidth: 1
              }
            },
            {
              type: 'text',
              left: 25,
              top: -30,
              style: {
                text: 'RAMADHAN 2025 Mar, 8',
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
      bottom: 20px;
      left: 5%;
      right: 5%;
      background: #3a3a3a;
      border: 1px solid #555;
      border-radius: 0px;
      padding: 0;
      font-family: Arial, sans-serif;
      font-size: 9px;
      color: #fff;
      overflow-x: auto;
    `;

    const tableHTML = `
      <table style="width: 100%; border-collapse: collapse; color: #fff;">
        <thead>
          <tr style="background: #3a3a3a; border-bottom: 1px solid #666;">
            <th style="border-right: 1px solid #666; padding: 4px 6px; text-align: center; font-size: 9px; font-weight: normal;"></th>
            ${months.map((month, idx) => `<th style="border-right: 1px solid #666; padding: 4px 2px; text-align: center; font-size: 9px; font-weight: normal;">${month}</th>`).join('')}
          </tr>
          <tr style="background: #3a3a3a; border-bottom: 1px solid #666;">
            <th style="border-right: 1px solid #666; padding: 2px 6px; text-align: center; font-size: 8px; font-weight: normal;"></th>
            ${years.map((year, idx) => `<th style="border-right: 1px solid #666; padding: 2px 2px; text-align: center; font-size: 8px; font-weight: normal; color: #aaa;">${year}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #666;">
            <td style="border-right: 1px solid #666; padding: 4px 6px; background: #3a3a3a; font-weight: normal; font-size: 9px; text-align: left;">
              <span style="display: inline-block; width: 20px; height: 2px; background-color: #00bfff; margin-right: 5px; vertical-align: middle;"></span>EO/EOD'S
            </td>
            ${eoEdosData.map((val, idx) => `<td style="border-right: 1px solid #666; padding: 4px 2px; text-align: center; font-size: 9px; background: ${idx >= 12 ? '#454545' : '#3a3a3a'};">${val}</td>`).join('')}
          </tr>
          <tr style="border-bottom: 1px solid #666;">
            <td style="border-right: 1px solid #666; padding: 4px 6px; background: #3a3a3a; font-weight: normal; font-size: 9px; text-align: left;">
              <span style="display: inline-block; width: 20px; height: 2px; background-color: #ff8c00; margin-right: 5px; vertical-align: middle;"></span>CLAMP
            </td>
            ${campData.map((val, idx) => `<td style="border-right: 1px solid #666; padding: 4px 2px; text-align: center; font-size: 9px; background: ${idx >= 12 ? '#454545' : '#3a3a3a'};">${val}</td>`).join('')}
          </tr>
          <tr>
            <td style="border-right: 1px solid #666; padding: 4px 6px; background: #3a3a3a; font-weight: normal; font-size: 9px; text-align: left;">
              <span style="display: inline-block; width: 20px; height: 2px; background-color: #9acd32; margin-right: 5px; vertical-align: middle;"></span>TOW
            </td>
            ${towData.map((val, idx) => `<td style="border-right: 1px solid #666; padding: 4px 2px; text-align: center; font-size: 9px; background: ${idx >= 12 ? '#454545' : '#3a3a3a'};">${val}</td>`).join('')}
          </tr>
        </tbody>
      </table>
      <div style="text-align: center; padding: 4px; font-size: 8px; color: #aaa; background: #3a3a3a; border-top: 1px solid #666;">
        Months
      </div>
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
        width: '100%',
        height: '100%',
        backgroundColor: '#4a4a4a',
        position: 'relative',
      }}
    />
  );
};

export default KPIChart;