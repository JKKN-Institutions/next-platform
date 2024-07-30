'use client';

import React, { useState } from 'react';

const taxSlabs = [
  { range: '0 - 2,50,000', rate: '0%' },
  { range: '2,50,001 - 5,00,000', rate: '5%' },
  { range: '5,00,001 - 7,50,000', rate: '10%' },
  { range: '7,50,001 - 10,00,000', rate: '15%' },
  { range: '10,00,001 - 12,50,000', rate: '20%' },
  { range: '12,50,001 - 15,00,000', rate: '25%' },
  { range: 'Above 15,00,000', rate: '30%' }
];

const deductions = [
  { section: '80C', description: 'Investments in PPF, ELSS, etc.', limit: '1,50,000' },
  { section: '80D', description: 'Health Insurance Premium', limit: 'Varies' },
  { section: '80E', description: 'Interest on Education Loan', limit: 'No limit' },
  { section: '80G', description: 'Donations to Charitable Institutions', limit: 'Varies' }
];

const IndiaTaxLawsContent = () => {
  const [activeTab, setActiveTab] = useState('taxSlabs');

  return (
    <div className="p-4">
      <div className="mb-4">
        <button 
          onClick={() => setActiveTab('taxSlabs')} 
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'taxSlabs' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Tax Slabs
        </button>
        <button 
          onClick={() => setActiveTab('deductions')} 
          className={`px-4 py-2 rounded ${activeTab === 'deductions' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Deductions
        </button>
      </div>

      {activeTab === 'taxSlabs' && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4">Income Tax Slabs for FY 2023-24 (AY 2024-25)</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Income Range (₹)</th>
                <th className="text-left py-2">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              {taxSlabs.map((slab, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-2">{slab.range}</td>
                  <td className="py-2">{slab.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'deductions' && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4">Common Tax Deductions</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Section</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Limit (₹)</th>
              </tr>
            </thead>
            <tbody>
              {deductions.map((deduction, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-2">{deduction.section}</td>
                  <td className="py-2">{deduction.description}</td>
                  <td className="py-2">{deduction.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4" role="alert">
        <p className="font-bold">Disclaimer</p>
        <p>This information is for educational purposes only. Tax laws may change. Consult a tax professional for personalized advice.</p>
      </div>
    </div>
  );
};

const IndiaTaxLaws = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Learn Indian Income Tax Laws</h1>
      <IndiaTaxLawsContent />
    </div>
  );
};

export default IndiaTaxLaws;