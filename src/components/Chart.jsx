import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", Earning: 700},
  { name: "Tue", Earning: 300 },
  { name: "Wed", Earning: 450 },
  { name: "Thu", Earning: 278},
  { name: "Fri", Earning: 589},
  { name: "Sat", Earning: 134},
  { name: "Sun", Earning: 700},

];

const Chart = () => {

  return (
    <div style={{ width: "100%" }}>
   
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={data}>
          <CartesianGrid horizontal={true} vertical={false} strokeWidth={0.3} />
          <XAxis
            dataKey="name"
            tick={{fontSize: 14 }}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={20} tick={{ fontSize: 14 }} />
          <Tooltip />
          <Bar dataKey="Earning" fill="#1877F2" barSize={24} radius={[10, 10, 10, 10]}  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;