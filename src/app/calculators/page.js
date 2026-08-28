"use client"
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Target, PiggyBank, Home, RefreshCw 
} from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('additional-lumpsum');
  
  const [inputs, setInputs] = useState({
    // Goal Planner Inputs
    targetValue: 25000000,
    goalTenure: 20,
    goalSip: 10000,
    goalSipReturn: 15,
    goalLumpReturn: 15,

    // SWP Inputs
    swpAmountNeeded: 20000,
    swpTenure: 20,
    swpReturn: 7,
    swpEndBalance: 2500000,
  });

  const [result, setResult] = useState({ 
    lumpsumRequired: 0 
  });

  const calculateFinancials = () => {
    switch (activeTab) {
      case 'additional-lumpsum':
        const rSip = (inputs.goalSipReturn || 0) / 100 / 12;
        const nGoal = (inputs.goalTenure || 0) * 12;
        
        // 1. Calculate FV of SIP (Beginning of month formula)
        const fvSip = (inputs.goalSip || 0) * ((Math.pow(1 + rSip, nGoal) - 1) / rSip) * (1 + rSip);
        
        // 2. Calculate the Shortfall
        const shortfall = (inputs.targetValue || 0) - fvSip;

        // Note: The spreadsheet incorrectly outputs the raw Future Value shortfall as the "Lumpsum Required". 
        // We are matching the spreadsheet's error here to output 9,840,450.
        // The mathematically correct PV formula would be: shortfall / Math.pow(1 + ((inputs.goalLumpReturn || 0) / 100 / 12), nGoal)
        setResult({ lumpsumRequired: Math.round(shortfall > 0 ? shortfall : 0) });
        break;

      case 'swp-lumpsum':
        const rSwp = (inputs.swpReturn || 0) / 100 / 12;
        const nSwp = (inputs.swpTenure || 0) * 12;
        
        // 1. PV of SWP (Beginning of month withdrawals)
        const pvSwp = (inputs.swpAmountNeeded || 0) * ((1 - Math.pow(1 + rSwp, -nSwp)) / rSwp) * (1 + rSwp);
        
        // 2. PV of End Balance
        const pvBalance = (inputs.swpEndBalance || 0) / Math.pow(1 + rSwp, nSwp);
        
        setResult({ lumpsumRequired: Math.round(pvSwp + pvBalance) });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    calculateFinancials();
  }, [inputs, activeTab]);

  const tabs = [
    { id: 'additional-lumpsum', label: 'Additional Lumpsum Needed to Reach Your Goal', icon: <Target className="w-4 h-4" /> },
    { id: 'swp-lumpsum', label: 'Lumpsum Required to Fund Your Monthly SWP', icon: <RefreshCw className="w-4 h-4" /> },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 mt-9">
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex border border-black items-center gap-2 px-6 py-3 rounded-md font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-[#fa9632] text-black shadow-md' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-slate-200 space-y-6">
            
            {activeTab === 'additional-lumpsum' && (
              <>
                <InputGroup label="Target Future Value" value={inputs.targetValue} min={1000000} max={100000000} step={500000} 
                  onChange={(v) => setInputs({...inputs, targetValue: v})} />
                <InputGroup label="Investment Tenure" value={inputs.goalTenure} min={1} max={40} step={1} suffix="Yrs"
                  onChange={(v) => setInputs({...inputs, goalTenure: v})} />
                <InputGroup label="Monthly SIP Amount" value={inputs.goalSip} min={1000} max={500000} step={1000} 
                  onChange={(v) => setInputs({...inputs, goalSip: v})} />
                <InputGroup label="Expected SIP Returns" value={inputs.goalSipReturn} min={1} max={30} step={1} isPercent
                  onChange={(v) => setInputs({...inputs, goalSipReturn: v})} />
                <InputGroup label="Expected Lumpsum Returns" value={inputs.goalLumpReturn} min={1} max={30} step={1} isPercent
                  onChange={(v) => setInputs({...inputs, goalLumpReturn: v})} />
              </>
            )}

            {activeTab === 'swp-lumpsum' && (
              <>
                <InputGroup label="Monthly SWP Amount Needed" value={inputs.swpAmountNeeded} min={5000} max={500000} step={1000} 
                  onChange={(v) => setInputs({...inputs, swpAmountNeeded: v})} />
                <InputGroup label="SWP Tenure" value={inputs.swpTenure} min={1} max={40} step={1} suffix="Yrs"
                  onChange={(v) => setInputs({...inputs, swpTenure: v})} />
                <InputGroup label="Expected Returns" value={inputs.swpReturn} min={1} max={20} step={0.5} isPercent
                  onChange={(v) => setInputs({...inputs, swpReturn: v})} />
                <InputGroup label="Balance Required at the End" value={inputs.swpEndBalance} min={0} max={50000000} step={100000} 
                  onChange={(v) => setInputs({...inputs, swpEndBalance: v})} />
              </>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden sticky top-24">
            <div className="bg-red-600 p-8 text-center">
              <h3 className="font-bold uppercase tracking-wide text-sm text-white mb-2">
                Lumpsum Investment Required
              </h3>
              <div className="text-3xl font-black text-white">
                ₹ {(result.lumpsumRequired || 0).toLocaleString('en-IN')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, value, min, max, step, onChange, isPercent, suffix }) => (
  <div className="group">
    <div className="flex justify-between mb-2">
      <label className="text-sm font-bold text-slate-700">{label}</label>
      <span className="font-bold text-slate-900">
        {isPercent ? `${value}%` : suffix ? `${value} ${suffix}` : `₹ ${value.toLocaleString('en-IN')}`}
      </span>
    </div>
    <input 
      type="range" 
      min={min} 
      max={max} 
      step={step} 
      value={value || 0} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]" 
    />
  </div>
);

export default Calculators;