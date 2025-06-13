import React, { useState, useContext } from 'react';
import { UploadCloud, FileText } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';

function CVBuilderPage() {
  const { theme } = useContext(ThemeContext); // access current theme
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => setPdfFile(e.target.files[0]);
  const handleGenerate = () => alert('CV generation started!');

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} min-h-screen px-6 py-8 pb-20`}>
      <h1 className="text-2xl font-semibold mb-6">CV Builder</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border'} p-6 rounded-xl shadow-sm`}>
          <h2 className="text-lg font-medium mb-4">Build Your ATS Friendly CV</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Professional Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleGenerate}
              className="w-full bg-black text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900"
            >
              <FileText size={18} />
              Generate CV
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border'} p-6 rounded-xl shadow-sm`}>
          <h2 className="text-lg font-medium mb-4">Parse Existing CV</h2>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-md">
            <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
            <p className="text-sm mb-4">Upload your PDF resume</p>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {pdfFile && <p className="mt-2 text-xs">{pdfFile.name}</p>}
            <button
              onClick={() => alert('Parsing CV...')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
            >
              Parse CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVBuilderPage;
