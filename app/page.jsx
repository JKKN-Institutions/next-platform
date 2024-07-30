import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const IndiaTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [taxAmount, setTaxAmount] = useState(0);
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0);

  const calculateTax = () => {
    const incomeValue = parseFloat(income);
    let tax = 0;

    if (incomeValue <= 250000) {
      tax = 0;
    } else if (incomeValue <= 500000) {
      tax = (incomeValue - 250000) * 0.05;
    } else if (incomeValue <= 750000) {
      tax = 12500 + (incomeValue - 500000) * 0.10;
    } else if (incomeValue <= 1000000) {
      tax = 37500 + (incomeValue - 750000) * 0.15;
    } else if (incomeValue <= 1250000) {
      tax = 75000 + (incomeValue - 1000000) * 0.20;
    } else if (incomeValue <= 1500000) {
      tax = 125000 + (incomeValue - 1250000) * 0.25;
    } else {
      tax = 187500 + (incomeValue - 1500000) * 0.30;
    }

    setTaxAmount(tax);
    setEffectiveTaxRate((tax / incomeValue) * 100);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>India Income Tax Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="income">Annual Income (INR)</Label>
            <Input
              id="income"
              placeholder="Enter your annual income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <Button onClick={calculateTax}>Calculate Tax</Button>
          {taxAmount > 0 && (
            <div className="flex flex-col space-y-1.5">
              <p>Tax Amount: ₹{taxAmount.toFixed(2)}</p>
              <p>Effective Tax Rate: {effectiveTaxRate.toFixed(2)}%</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default IndiaTaxCalculator;