import React, { useContext } from 'react';
import { CalendarDays, Eye, PlusCircle } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';

const mockInterviews = [
  { id: '1', title: 'Frontend Mock', topic: 'React.js', date: '2025-06-10', score: 82 },
  { id: '2', title: 'Backend Round', topic: 'Django', date: '2025-06-08', score: 76 },
  { id: '3', title: 'System Design', topic: 'Architecture', date: '2025-06-05', score: 65 },
];

function InterviewPage() {
  const { theme } = useContext(ThemeContext);

  const bg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const card = theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-100 text-gray-800';
  const subText = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const iconText = theme === 'dark' ? 'text-gray-400' : 'text-gray-400';
  const viewText = theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
  const title = theme === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <div className={`min-h-screen ${bg} px-6 py-8 mb-20`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-semibold ${title} `}>Interviews</h1>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900">
          <PlusCircle size={18} />
          New Interview
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockInterviews.map((interview) => (
          <div
            key={interview.id}
            className={`p-5 rounded-xl shadow-sm border ${card}`}
          >
            <h2 className="text-lg font-semibold mb-1">{interview.title}</h2>
            <p className={`text-sm mb-2 ${subText}`}>Topic: {interview.topic}</p>
            <div className={`flex items-center text-sm mb-2 ${iconText}`}>
              <CalendarDays size={14} className="mr-1" />
              {interview.date}
            </div>
            <p className="text-sm">
              Score: <span className="font-semibold">{interview.score}%</span>
            </p>
            <button className={`mt-3 inline-flex items-center text-sm ${viewText} hover:underline`}>
              <Eye size={14} className="mr-1" />
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewPage;
