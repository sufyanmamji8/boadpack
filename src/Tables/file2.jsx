import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { CHART_COLORS } from '../constants';

/* ================= DATA - IMAGE KE EXACT MATCH ================= */
const rawData = [
  { month: "Jan", Emp: 7, Dep: 1 },
  { month: "Feb", Emp: 9, Dep: 1 },
  { month: "Mar", Emp: 8, Dep: 1 },
  { month: "Apr", Emp: 8, Dep: 1 }, // Ramadan 2024
  { month: "May", Emp: 9, Dep: 1 },
  { month: "Jun", Emp: 11, Dep:2},
  { month: "Jul", Emp: 9, Dep: 1 },
  { month: "Aug", Emp: 7, Dep: 1 },
  { month: "Sep", Emp: 6, Dep: 1 },
  { month: "Oct", Emp: 8, Dep: 1 },
  { month: "Nov", Emp: 7, Dep: 1 },
  { month: "Dec", Emp: 9, Dep: 1 },
  { month: "Jan", Emp: 8, Dep: 1 },
  { month: "Feb", Emp: 9, Dep: 1 },
  { month: "Mar", Emp: 8, Dep: 0 }, // Ramadan 2025
  { month: "Apr", Emp: 11, Dep: 1 },
  { month: "May", Emp: 9, Dep: 1 },
  { month: "Jun", Emp: 9, Dep: 1 },
  { month: "Jul", Emp: 8, Dep: 1 },
  { month: "Aug", Emp: 9, Dep: 1 },
  { month: "Sep", Emp: 9, Dep: 1 },
  { month: "Oct", Emp: 10, Dep: 1 },
];

/* ================= VALUE BOX COMPONENT (UNCHANGED) ================= */
const LineValueBox = ({ cx, cy, value, stroke, position = "top" }) => {
  if (!value) return null;

  const offset = position === "bottom" ? 10 : -26;
  const boxWidth = 25;
  const boxHeight = 18;

  return (
    <g>
      <rect
        x={cx - boxWidth / 2}
        y={cy + offset}
        width={boxWidth}
        height={boxHeight}
      
        fill="transparent"
        stroke={stroke}
        strokeWidth={1}
      />
      <text
        x={cx}
        y={cy + offset + boxHeight / 2}
        fill={CHART_COLORS.text}
        fontSize={11}
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

export default function JeddahAirportChart() {
  const data = rawData.map((item) => ({
    ...item,
    bottomPart: Math.min(item.Emp, item.Dep),
    topPart: Math.max(item.Emp, item.Dep) - Math.min(item.Emp, item.Dep),
  }));

  return (
    <div style={{ width: "100%", backgroundColor: CHART_COLORS.background, padding: "15px 30px" }}>
      <h2 style={{ textAlign: "center", color: CHART_COLORS.text, marginBottom: 8, fontSize: "16px" }}>
        Jeddah Airport Enforcement Average Daily EO / EOD's Deployed V Employed
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 30, right: 20, left: 40, bottom: 40 }}>
          <defs>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />

          <XAxis
            dataKey="month"
            tick={false}
            axisLine={false}
            tickLine={false}
          />
<YAxis
  stroke={CHART_COLORS.axis}
  label={{
    value: "Average Daily Dep V Emp",
    angle: -90,           // Rotation angle (-90 = vertical)
    position: "insideLeft", // Position relative to axis
    offset: 40,           // Distance from top/bottom (increase to move down)
    dx: -50,             // Horizontal offset (negative = left, positive = right)
    dy: 60,               // Vertical offset (positive = down, negative = up)
    style: {
      fill: CHART_COLORS.axis,
      fontSize: 12,
    },
  }}
  tick={{ fill: CHART_COLORS.axis, fontSize: 10 }}
  domain={[0, 12]}
/>

          <Tooltip
            contentStyle={{ backgroundColor: CHART_COLORS.background, border: "none" }}
            labelStyle={{ color: CHART_COLORS.text }}
          />

          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ top: 8, color: CHART_COLORS.legend, fontSize: 12 }}
          />

          {/* Invisible base for stacking */}
          <Bar dataKey="bottomPart" stackId="stack" fill="transparent" barSize={18} />

          {/* Employed Bar (Gray) */}
          <Bar
            dataKey="topPart"
            stackId="stack"
            barSize={28}
            fill={CHART_COLORS.primary}
            stroke={CHART_COLORS.primary}
            strokeWidth={2}
            name="Clamp Driver Emp"
          />

          {/* Deployed Line (Cyan - Solid) */}
          <Line
            type="none"
            dataKey="Dep"
            stroke={CHART_COLORS.primary}
            
            strokeWidth={2}
            dot={<LineValueBox stroke={CHART_COLORS.table.rowHeader} position="bottom" />}
            activeDot={false}
            filter="url(#neonGlow)"
            name="Clamp Driver Dep"
          />

          {/* Employed Line (Gray - Dashed) */}
          <Line
            type="none"
            dataKey="Emp"
            stroke={CHART_COLORS.primary}
            strokeWidth={2}
            strokeDasharray="2 2"
            dot={<LineValueBox stroke={CHART_COLORS.table.rowHeader} position="top" />}
            activeDot={false}
            filter="url(#neonGlow)"
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* =============== BOTTOM TABLE - IMAGE KE EXACT VALUES =============== */}
      <div style={{ marginTop: "20px", color: CHART_COLORS.text }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ backgroundColor: CHART_COLORS.table.header }}>
              <th style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}></th>
              {rawData.map((d, i) => (
                <th key={i} style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}`, textAlign: "center" }}>
                  {d.month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Employed Row */}
            <tr>
              <td style={{ padding: "8px", backgroundColor: CHART_COLORS.table.rowHeader, color: CHART_COLORS.text, fontWeight: "bold", border: `1px solid ${CHART_COLORS.table.border}` }}>
                Clamp Driver Emp
              </td>
              {rawData.map((d, i) => (
                <td key={i} style={{ padding: "8px", textAlign: "center", backgroundColor: CHART_COLORS.table.cell, border: `1px solid ${CHART_COLORS.table.border}` }}>
                  {d.Emp}
                </td>
              ))}
            </tr>

            {/* Deployed Row */}
            <tr>
              <td style={{ padding: "8px", backgroundColor: CHART_COLORS.table.rowHeader, color: CHART_COLORS.text, fontWeight: "bold", border: `1px solid ${CHART_COLORS.table.border}` }}>
               Clamp Driver Dep
              </td>
              {rawData.map((d, i) => (
                <td key={i} style={{ padding: "8px", textAlign: "center", backgroundColor: CHART_COLORS.table.cell, border: `1px solid ${CHART_COLORS.table.border}` }}>
                  {d.Dep}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: "center", color: CHART_COLORS.axis, marginTop: "8px", fontSize: "12px" }}>
        Months
      </div>

      {/* Percentage Table Below */}
      <div style={{ marginTop: "30px", color: CHART_COLORS.text }}>
        <table style={{ margin: "0 auto",width:'100%', borderCollapse: "collapse", fontSize: "13px" ,textAlign: "center"}}>
        <thead>
  <tr>
    <th
      style={{
        padding: "8px",
        backgroundColor: CHART_COLORS.primary,
        color: CHART_COLORS.table.headerText, // assumes a readable text color variable
      }}
    >
      Deployed to Employed - Clamp Drivers
    </th>

    {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(
      (month) => (
        <th
          key={month}
          style={{
            padding: "8px",
            backgroundColor: CHART_COLORS.primary,
            border: `1px solid ${CHART_COLORS.primary}`,
            color: CHART_COLORS.table.headerText,
          }}
        >
          {month}
        </th>
      )
    )}
  </tr>
</thead>

          <tbody>
            <tr >
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}`,backgroundColor: CHART_COLORS.primary , }}>2024</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>91%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>70%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>77%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>69%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>82%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>64%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>78%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>89%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>90%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>73%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>89%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>72%</td>
            </tr>
            <tr>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}`, background: CHART_COLORS.primary}}>2025</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>83%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>81%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>77%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>61%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>65%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>73%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>81%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>76%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>73%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>64%</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>-</td>
              <td style={{ padding: "8px", border: `1px solid ${CHART_COLORS.table.border}` }}>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
