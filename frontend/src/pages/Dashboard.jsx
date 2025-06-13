import React, { useContext } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import ThemeContext from '../context/ThemeContext';

const data = Array.from({ length: 7 }, (_, i) => ({
  day: `Day ${i + 1}`,
  score: Math.floor(Math.random() * 100),
}));

function Dashboard() {
  const { theme } = useContext(ThemeContext);

  const bg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const card = theme === 'dark' ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-800';
  const heading = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const subHeading = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`min-h-screen ${bg} px-6 py-8 pb-20`}>
      <h1 className={`text-2xl font-semibold mb-6 ${heading}`}>Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className={`p-4 rounded-xl shadow text-center ${card}`}>
          <h2 className={`text-sm ${subHeading}`}>Total Interviews</h2>
          <p className="text-2xl font-bold">17</p>
        </div>
        <div className={`p-4 rounded-xl shadow text-center ${card}`}>
          <h2 className={`text-sm ${subHeading}`}>Avg. Score</h2>
          <p className="text-2xl font-bold">74%</p>
        </div>
        <div className={`p-4 rounded-xl shadow text-center ${card}`}>
          <h2 className={`text-sm ${subHeading}`}>This Week</h2>
          <p className="text-2xl font-bold">5 Interviews</p>
        </div>
      </div>

      {/* Chart */}
      <div className={`p-6 rounded-xl shadow ${card}`}>
        <h2 className={`text-lg font-medium mb-4 ${heading}`}>Weekly Score Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#444' : '#ccc'} />
            <XAxis dataKey="day" stroke={theme === 'dark' ? '#fff' : '#000'} />
            <YAxis stroke={theme === 'dark' ? '#fff' : '#000'} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                borderColor: theme === 'dark' ? '#4b5563' : '#e5e7eb',
              }}
              labelStyle={{ color: theme === 'dark' ? '#fff' : '#000' }}
            />
            <Line type="monotone" dataKey="score" stroke="#1d4ed8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
