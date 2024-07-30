import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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

const IndiaTaxLaws = () => {
  const [activeTab, setActiveTab] = useState('taxSlabs');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Learn Indian Income Tax Laws</h1>
      
      <div className="mb-4">
        <Button 
          onClick={() => setActiveTab('taxSlabs')} 
          className={`mr-2 ${activeTab === 'taxSlabs' ? 'bg-blue-500' : 'bg-gray-300'}`}
        >
          Tax Slabs
        </Button>
        <Button 
          onClick={() => setActiveTab('deductions')} 
          className={activeTab === 'deductions' ? 'bg-blue-500' : 'bg-gray-300'}
        >
          Deductions
        </Button>
      </div>

      {activeTab === 'taxSlabs' && (
        <Card>
          <CardHeader>Income Tax Slabs for FY 2023-24 (AY 2024-25)</CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Income Range (₹)</th>
                  <th className="text-left">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                {taxSlabs.map((slab, index) => (
                  <tr key={index}>
                    <td>{slab.range}</td>
                    <td>{slab.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {activeTab === 'deductions' && (
        <Card>
          <CardHeader>Common Tax Deductions</CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Section</th>
                  <th className="text-left">Description</th>
                  <th className="text-left">Limit (₹)</th>
                </tr>
              </thead>
              <tbody>
                {deductions.map((deduction, index) => (
                  <tr key={index}>
                    <td>{deduction.section}</td>
                    <td>{deduction.description}</td>
                    <td>{deduction.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      <Alert className="mt-4">
        <AlertTitle>Disclaimer</AlertTitle>
        <AlertDescription>
          This information is for educational purposes only. Tax laws may change. Consult a tax professional for personalized advice.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default IndiaTaxLaws;