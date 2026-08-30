// "use client"
// import React, { useState, useEffect } from 'react';
// import { 
//   TrendingUp, Target, PiggyBank, IndianRupee, 
//   ArrowUpRight, Home, RefreshCw, ChevronRight 
// } from 'lucide-react';

// const Calculators = () => {
//   const [activeTab, setActiveTab] = useState('lumpsum-sip');
//   const [swpMode, setSwpMode] = useState('balance'); 
//   const [goalMode, setGoalMode] = useState('lumpsum'); 
  
//   const [inputs, setInputs] = useState({
//     lumpsum: 1600000,
//     sip: 40000,
//     tenure: 5,
//     rate: 12, 
//     target: 10000000,
//     stepUp: 0,
//     swpAmount: 20000,
//     swpTargetBalance: 0,
//     loanAmount: 5000000,
//     loanRate: 8.5,
//     loanTenure: 20,
//     rateSip: 12,
//     rateLumpsum: 12
//   });

//   const [result, setResult] = useState({ 
//     fv: 0, invested: 0, emi: 0, totalPayable: 0, sipRequired: 0, lumpsumRequired: 0, swpRequired: 0 
//   });

//   const calculateFinancials = () => {
//     const annualRate = (inputs.rate || 0) / 100;
//     const years = (inputs.tenure || 0);
//     const months = years * 12;
//     const annualStepUp = (inputs.stepUp || 0) / 100;
//     const swpMonthlyRate = ((inputs.rate || 0) / 100) / 12;

//     switch (activeTab) {
//       case 'lumpsum-sip':
//         const simpleMonthlyRate = annualRate / 12;
//         const lumpsumFV = (inputs.lumpsum || 0) * Math.pow(1 + annualRate, years);
//         let sipFV = 0;
//         let totalSIPInvested = 0;
//         let currentSIPValue = (inputs.sip || 0);
//         for (let y = 1; y <= years; y++) {
//           for (let m = 1; m <= 12; m++) {
//             totalSIPInvested += currentSIPValue;
//             sipFV = (sipFV + currentSIPValue) * (1 + simpleMonthlyRate);
//           }
//           currentSIPValue *= (1 + annualStepUp);
//         }
//         setResult(prev => ({ ...prev, fv: Math.round(lumpsumFV + sipFV), invested: Math.round((inputs.lumpsum || 0) + totalSIPInvested) }));
//         break;

//       case 'home-loan':
//         const loanR = (inputs.loanRate || 0) / 100 / 12;
//         const loanN = (inputs.loanTenure || 0) * 12;
//         const emiValue = (inputs.loanAmount * loanR * Math.pow(1 + loanR, loanN)) / (Math.pow(1 + loanR, loanN) - 1);
//         setResult(prev => ({ ...prev, emi: Math.round(emiValue), totalPayable: Math.round(emiValue * loanN) }));
//         break;

//       case 'swp':
//         if (swpMode === 'balance') {
//           let swpBalanceValue = (inputs.lumpsum || 0);
//           for (let i = 0; i < months; i++) {
//             swpBalanceValue = (swpBalanceValue - (inputs.swpAmount || 0)) * (1 + swpMonthlyRate);
//             if (swpBalanceValue < 0) { swpBalanceValue = 0; break; }
//           }
//           setResult(prev => ({ ...prev, fv: Math.round(swpBalanceValue), invested: (inputs.lumpsum || 0) }));
//         } else {
//           // MATH SURGICALLY REPLACED: Solves for Initial Lumpsum Required based on the spreadsheet
//           const rSwp = swpMonthlyRate;
//           const nSwp = months;
//           const pvSwp = (inputs.swpAmount || 0) * ((1 - Math.pow(1 + rSwp, -nSwp)) / rSwp) * (1 + rSwp);
//           const pvBalance = (inputs.swpTargetBalance || 0) / Math.pow(1 + rSwp, nSwp);
//           const lumpsumReq = pvSwp + pvBalance;
          
//           setResult(prev => ({ 
//             ...prev, 
//             swpRequired: Math.round(Math.max(0, lumpsumReq)), 
//             fv: inputs.swpTargetBalance, 
//             invested: Math.round(Math.max(0, lumpsumReq)) 
//           }));
//         }
//         break;

//       case 'sip-target':
//         const rateLumpsumDecimal = (inputs.rateLumpsum || 0) / 100;
//         const rateSipMonthlyDecimal = ((inputs.rateSip || 0) / 100) / 12;
//         const TargetFV = inputs.target || 0;

//         if (goalMode === 'lumpsum') {
//           // MATH SURGICALLY REPLACED: Matches spreadsheet logic (Subtracting SIP FV from Target FV)
//           const fvSip = (inputs.sip || 0) * ((Math.pow(1 + rateSipMonthlyDecimal, months) - 1) / rateSipMonthlyDecimal) * (1 + rateSipMonthlyDecimal);
//           const requiredLumpsumToday = TargetFV - fvSip;

//           setResult(prev => ({ 
//             ...prev, 
//             lumpsumRequired: Math.round(Math.max(0, requiredLumpsumToday)), 
//             fv: TargetFV, 
//             invested: Math.round(Math.max(0, requiredLumpsumToday) + ((inputs.sip || 0) * months)) 
//           }));
//         } else {
//           const fixedLumpsumFV = (inputs.lumpsum || 0) * Math.pow(1 + rateLumpsumDecimal, years);
//           const remainingGap = Math.max(0, TargetFV - fixedLumpsumFV);
//           let sipGrowthFactor = 0;
//           let unitSIPValue = 1;
//           let totalSipInvestedMultiplier = 0;
//           for (let y = 1; y <= years; y++) {
//             for (let m = 1; m <= 12; m++) {
//               sipGrowthFactor = (sipGrowthFactor + unitSIPValue) * (1 + rateSipMonthlyDecimal);
//               totalSipInvestedMultiplier += unitSIPValue;
//             }
//             unitSIPValue *= (1 + annualStepUp);
//           }
//           const requiredStartingSIP = remainingGap > 0 ? remainingGap / sipGrowthFactor : 0;

//           setResult(prev => ({ 
//             ...prev, 
//             sipRequired: Math.round(requiredStartingSIP), 
//             fv: TargetFV, 
//             invested: Math.round((inputs.lumpsum || 0) + (requiredStartingSIP * totalSipInvestedMultiplier)) 
//           }));
//         }
//         break;
//       default: break;
//     }
//   };

//   useEffect(() => { calculateFinancials(); }, [inputs, activeTab, swpMode, goalMode]);

//   const investedValueDisplay = activeTab === 'home-loan' ? inputs.loanAmount : result.invested;
//   const totalValueDisplay = activeTab === 'home-loan' ? result.totalPayable : result.fv;
//   const gainsValueDisplay = Math.max(0, totalValueDisplay - investedValueDisplay);
//   const percentageDisplay = totalValueDisplay > 0 ? (gainsValueDisplay / totalValueDisplay) * 100 : 0;
//   const strokeDasharrayVal = `${percentageDisplay} ${100 - percentageDisplay}`;

//   return (
//     <div className="pt-24 pb-20 min-h-screen bg-slate-50">
//       <div className="max-w-[1600px] mx-auto px-4">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight special">Wealth Calculators</h1>
//         </div>

//         <div className="flex flex-wrap justify-center gap-2 mb-10">
//           {[
//             { id: 'lumpsum-sip', label: 'SIP + Lumpsum', icon: <TrendingUp className="w-4 h-4" /> },
//             { id: 'sip-target', label: 'Goal Planner', icon: <Target className="w-4 h-4" /> },
//             { id: 'swp', label: 'Monthly SWP', icon: <RefreshCw className="w-4 h-4" /> },
//             { id: 'home-loan', label: 'Home Loan', icon: <Home className="w-4 h-4" /> },
//           ].map((tab) => (
//             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//               className={`flex border border-black items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id ? 'bg-[#fa9632] text-black shadow-lg scale-105' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
//               {tab.icon} {tab.label}
//             </button>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 items-start">
//           <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-8">
            
//             {activeTab === 'swp' && (
//               <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
//                 <button onClick={() => setSwpMode('balance')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${swpMode === 'balance' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate Balance</button>
//                 <button onClick={() => setSwpMode('withdrawal')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${swpMode === 'withdrawal' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate Withdrawal</button>
//               </div>
//             )}
            
//             {activeTab === 'sip-target' && (
//               <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
//                 <button 
//                   onClick={() => setGoalMode('lumpsum')} 
//                   className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${goalMode === 'lumpsum' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}
//                 >
//                   Lumpsum Investment Required
//                 </button>
//                 <button 
//                   onClick={() => setGoalMode('sip')} 
//                   className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${goalMode === 'sip' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}
//                 >
//                   Monthly SIP Required
//                 </button>
//               </div>
//             )}

//             {activeTab === 'home-loan' ? (
//               <>
//                 <InputGroup label="Loan Amount" value={inputs.loanAmount} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, loanAmount: v})} />
//                 <InputGroup label="Interest Rate" value={inputs.loanRate} min={5} max={15} step={0.1} onChange={(v) => setInputs({...inputs, loanRate: v})} isPercent />
//                 <InputGroup label="Tenure" value={inputs.loanTenure} min={1} max={30} step={1} onChange={(v) => setInputs({...inputs, loanTenure: v})} suffix="Yrs" />
//               </>
//             ) : (
//               <>
//                 {activeTab === 'sip-target' && <InputGroup label="Target Future Value" value={inputs.target} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, target: v})} />}
//                 <InputGroup label="Investment Tenure" value={inputs.tenure} min={1} max={40} step={1} onChange={(v) => setInputs({...inputs, tenure: v})} suffix="Yrs" />
                
//                 {activeTab === 'lumpsum-sip' && (
//                   <>
//                     <InputGroup label="Lumpsum Investment" value={inputs.lumpsum} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />
//                     <InputGroup label="Monthly SIP" value={inputs.sip} min={0} max={500000} step={500} onChange={(v) => setInputs({...inputs, sip: v})} />
//                     <InputGroup label="Expected Returns" value={inputs.rate} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rate: v})} isPercent />
//                   </>
//                 )}

//                 {/* SWP INPUTS SURGICALLY UPDATED: Monthly Withdrawal input is now always visible since both modes need it */}
//                 {activeTab === 'swp' && (
//                   <>
//                     {swpMode === 'balance' && <InputGroup label="Lumpsum Investment" value={inputs.lumpsum} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />}
//                     <InputGroup label="Monthly Withdrawal" value={inputs.swpAmount} min={500} max={500000} step={500} onChange={(v) => setInputs({...inputs, swpAmount: v})} />
//                     {swpMode === 'withdrawal' && <InputGroup label="Desired Balance at End" value={inputs.swpTargetBalance} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, swpTargetBalance: v})} />}
//                     <InputGroup label="Expected Returns" value={inputs.rate} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rate: v})} isPercent />
//                   </>
//                 )}

//                 {activeTab === 'sip-target' && goalMode === 'lumpsum' && (
//                   <>
//                     <InputGroup label="Monthly SIP Amount (Fixed)" value={inputs.sip} min={500} max={500000} step={500} onChange={(v) => setInputs({...inputs, sip: v})} />
//                     <InputGroup label="Expected SIP Returns" value={inputs.rateSip} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateSip: v})} isPercent />
//                     <InputGroup label="Expected Lumpsum Returns" value={inputs.rateLumpsum} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateLumpsum: v})} isPercent />
//                   </>
//                 )}
//                 {activeTab === 'sip-target' && goalMode === 'sip' && (
//                   <>
//                     <InputGroup label="Lumpsum Investment (Fixed)" value={inputs.lumpsum} min={10000} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />
//                     <InputGroup label="Expected Lumpsum Returns" value={inputs.rateLumpsum} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateLumpsum: v})} isPercent />
//                     <InputGroup label="Expected SIP Returns" value={inputs.rateSip} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateSip: v})} isPercent />
//                   </>
//                 )}

//                 {activeTab === 'lumpsum-sip' && (
//                   <InputGroup label="Annual Step-up" value={inputs.stepUp} min={0} max={50} step={1} onChange={(v) => setInputs({...inputs, stepUp: v})} isPercent isStepUp />
//                 )}
//               </>
//             )}
//           </div>

//           <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden sticky top-24">
//             <div className="bg-slate-900 p-8 text-center text-white">
//               {/* LABELS SURGICALLY UPDATED */}
//               <h3 className="font-bold uppercase tracking-widest text-[10px] text-slate-400 mb-2">
//                 {activeTab === 'home-loan' ? 'Monthly EMI' : 
//                  (activeTab === 'sip-target' && goalMode === 'lumpsum') ? 'Lumpsum Investment Required' :
//                  (activeTab === 'sip-target' && goalMode === 'sip') ? 'Starting Monthly SIP Required' : 
//                  (activeTab === 'swp' && swpMode === 'withdrawal') ? 'Lumpsum Investment Required' : 'Maturity Value'}
//               </h3>
//               <div className="text-3xl font-black text-[#fa9632] special">
//                 ₹ {activeTab === 'home-loan' ? (result.emi || 0).toLocaleString('en-IN') : 
//                    (activeTab === 'sip-target' && goalMode === 'lumpsum') ? (result.lumpsumRequired || 0).toLocaleString('en-IN') :
//                    (activeTab === 'sip-target' && goalMode === 'sip') ? (result.sipRequired || 0).toLocaleString('en-IN') : 
//                    (activeTab === 'swp' && swpMode === 'withdrawal') ? (result.swpRequired || 0).toLocaleString('en-IN') :
//                    (result.fv || 0).toLocaleString('en-IN')}
//               </div>
//             </div>
            
//             <div className="p-8">
//               <div className="flex justify-center mb-8 relative">
//                 <svg width="180" height="180" viewBox="0 0 42 42" className="transform -rotate-90">
//                   <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="4"></circle>
//                   <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#fa9632" strokeWidth="4" 
//                     strokeDasharray={strokeDasharrayVal} strokeDashoffset="0"></circle>
//                 </svg>
//                 <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
//                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
//                     {activeTab === 'sip-target' || (activeTab === 'swp' && swpMode === 'withdrawal') ? 'Left' : 'Gains Ratio'}
//                    </span>
//                    <span className="text-lg font-black text-slate-900">{Math.round(percentageDisplay)}%</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <LegendRow label={activeTab === 'home-loan' ? "Principal" : "Invested"} value={investedValueDisplay} color="bg-slate-200" />
//                 <LegendRow label={activeTab === 'home-loan' ? "Interest" : "Wealth Gained"} value={gainsValueDisplay} color="bg-[#fa9632]" />
                
//                 <div className="pt-4 border-t border-slate-100">
//                    <p className="text-[10px] text-slate-400 italic text-center mb-4">
//                      "Earn with ethics. Grow with discipline. Build with purpose."
//                    </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const InputGroup = ({ label, value, min, max, step, onChange, isPercent, isStepUp, suffix }) => (
//   <div>
//     <div className="flex justify-between mb-4 items-center">
//       <label className="text-sm font-bold text-slate-700 uppercase flex items-center gap-2 sans">
//         {label} {isStepUp && <ArrowUpRight className="w-4 h-4 text-[#fa9632]" />}
//       </label>
//       <div className="text-m flex bg-slate-100 px-3 py-2 rounded-lg text-black items-center border border-slate-200 focus-within:border-[#fa9632] transition-colors sans">
//         {!isPercent && !suffix && <span className="mr-1 text-slate-400 sans">₹</span>}
//         <input 
//           type="number"
//           value={value === 0 ? "" : value} 
//           onChange={(e) => {
//             const valInput = e.target.value;
//             onChange(valInput === "" ? 0 : Number(valInput));
//           }}
//           placeholder="0"
//           className="bg-transparent w-24 text-right outline-none special_ special sans [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//         />
//         {isPercent && <span className="ml-1 text-slate-400 sans">%</span>}
//         {suffix && <span className="ml-1 text-slate-400 sans">{suffix}</span>}
//       </div>
//     </div>
//     <input type="range" min={min} max={max} step={step} value={value || 0} onChange={(e) => onChange(Number(e.target.value))}
//       className="special w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]" />
//   </div>
// );

// const LegendRow = ({ label, value, color }) => (
//   <div className="flex justify-between items-center sans">
//     <div className="flex items-center gap-2 sans">
//       <div className={`w-3 h-3 rounded-full ${color} sans`}></div>
//       <span className="text-sm font-medium text-slate-600 special_ sans">{label}</span>
//     </div>
//     <span className="text-sm font-bold text-slate-900 special_ sans">₹ {(value || 0).toLocaleString('en-IN')}</span>
//   </div>
// );

// export default Calculators;

"use client"
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Target, PiggyBank, IndianRupee, 
  ArrowUpRight, Home, RefreshCw, ChevronRight 
} from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('lumpsum-sip');
  const [swpMode, setSwpMode] = useState('balance'); 
  const [goalMode, setGoalMode] = useState('lumpsum'); 
  
  const [inputs, setInputs] = useState({
    lumpsum: 1600000,
    sip: 40000,
    tenure: 5,
    rate: 12, 
    target: 10000000,
    stepUp: 0,
    swpAmount: 20000,
    swpTargetBalance: 0,
    loanAmount: 5000000,
    loanRate: 8.5,
    loanTenure: 20,
    rateSip: 12,
    rateLumpsum: 12
  });

  const [result, setResult] = useState({ 
    fv: 0, invested: 0, emi: 0, totalPayable: 0, sipRequired: 0, lumpsumRequired: 0, swpRequired: 0 
  });

  const calculateFinancials = () => {
    const annualRate = (inputs.rate || 0) / 100;
    const years = (inputs.tenure || 0);
    const months = years * 12;
    const annualStepUp = (inputs.stepUp || 0) / 100;
    const swpMonthlyRate = ((inputs.rate || 0) / 100) / 12;

    switch (activeTab) {
      case 'lumpsum-sip':
        const simpleMonthlyRate = annualRate / 12;
        const lumpsumFV = (inputs.lumpsum || 0) * Math.pow(1 + annualRate, years);
        let sipFV = 0;
        let totalSIPInvested = 0;
        let currentSIPValue = (inputs.sip || 0);
        for (let y = 1; y <= years; y++) {
          for (let m = 1; m <= 12; m++) {
            totalSIPInvested += currentSIPValue;
            sipFV = (sipFV + currentSIPValue) * (1 + simpleMonthlyRate);
          }
          currentSIPValue *= (1 + annualStepUp);
        }
        setResult(prev => ({ ...prev, fv: Math.round(lumpsumFV + sipFV), invested: Math.round((inputs.lumpsum || 0) + totalSIPInvested) }));
        break;

      case 'home-loan':
        const loanR = (inputs.loanRate || 0) / 100 / 12;
        const loanN = (inputs.loanTenure || 0) * 12;
        const emiValue = (inputs.loanAmount * loanR * Math.pow(1 + loanR, loanN)) / (Math.pow(1 + loanR, loanN) - 1);
        setResult(prev => ({ ...prev, emi: Math.round(emiValue), totalPayable: Math.round(emiValue * loanN) }));
        break;

      case 'swp':
        if (swpMode === 'balance') {
          let swpBalanceValue = (inputs.lumpsum || 0);
          for (let i = 0; i < months; i++) {
            swpBalanceValue = (swpBalanceValue - (inputs.swpAmount || 0)) * (1 + swpMonthlyRate);
            if (swpBalanceValue < 0) { swpBalanceValue = 0; break; }
          }
          setResult(prev => ({ ...prev, fv: Math.round(swpBalanceValue), invested: (inputs.lumpsum || 0) }));
        } else {
          const rSwp = swpMonthlyRate;
          const nSwp = months;
          const pvSwp = (inputs.swpAmount || 0) * ((1 - Math.pow(1 + rSwp, -nSwp)) / rSwp) * (1 + rSwp);
          const pvBalance = (inputs.swpTargetBalance || 0) / Math.pow(1 + rSwp, nSwp);
          const lumpsumReq = pvSwp + pvBalance;
          
          setResult(prev => ({ 
            ...prev, 
            swpRequired: Math.round(Math.max(0, lumpsumReq)), 
            fv: inputs.swpTargetBalance, 
            invested: Math.round(Math.max(0, lumpsumReq)) 
          }));
        }
        break;

      case 'sip-target':
        const rateLumpsumDecimal = (inputs.rateLumpsum || 0) / 100;
        const rateSipMonthlyDecimal = ((inputs.rateSip || 0) / 100) / 12;
        const TargetFV = inputs.target || 0;

        if (goalMode === 'lumpsum') {
          const fvSip = (inputs.sip || 0) * ((Math.pow(1 + rateSipMonthlyDecimal, months) - 1) / rateSipMonthlyDecimal) * (1 + rateSipMonthlyDecimal);
          const requiredLumpsumToday = TargetFV - fvSip;

          setResult(prev => ({ 
            ...prev, 
            lumpsumRequired: Math.round(Math.max(0, requiredLumpsumToday)), 
            fv: TargetFV, 
            invested: Math.round(Math.max(0, requiredLumpsumToday) + ((inputs.sip || 0) * months)) 
          }));
        } else {
          const fixedLumpsumFV = (inputs.lumpsum || 0) * Math.pow(1 + rateLumpsumDecimal, years);
          const remainingGap = Math.max(0, TargetFV - fixedLumpsumFV);
          let sipGrowthFactor = 0;
          let unitSIPValue = 1;
          let totalSipInvestedMultiplier = 0;
          for (let y = 1; y <= years; y++) {
            for (let m = 1; m <= 12; m++) {
              sipGrowthFactor = (sipGrowthFactor + unitSIPValue) * (1 + rateSipMonthlyDecimal);
              totalSipInvestedMultiplier += unitSIPValue;
            }
            unitSIPValue *= (1 + annualStepUp);
          }
          const requiredStartingSIP = remainingGap > 0 ? remainingGap / sipGrowthFactor : 0;

          setResult(prev => ({ 
            ...prev, 
            sipRequired: Math.round(requiredStartingSIP), 
            fv: TargetFV, 
            invested: Math.round((inputs.lumpsum || 0) + (requiredStartingSIP * totalSipInvestedMultiplier)) 
          }));
        }
        break;
      default: break;
    }
  };

  useEffect(() => { calculateFinancials(); }, [inputs, activeTab, swpMode, goalMode]);

  const investedValueDisplay = activeTab === 'home-loan' ? inputs.loanAmount : result.invested;
  const totalValueDisplay = activeTab === 'home-loan' ? result.totalPayable : result.fv;
  const gainsValueDisplay = Math.max(0, totalValueDisplay - investedValueDisplay);
  const percentageDisplay = totalValueDisplay > 0 ? (gainsValueDisplay / totalValueDisplay) * 100 : 0;
  const strokeDasharrayVal = `${percentageDisplay} ${100 - percentageDisplay}`;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight special">Wealth Calculators</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'lumpsum-sip', label: 'SIP + Lumpsum', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'sip-target', label: 'Goal Planner', icon: <Target className="w-4 h-4" /> },
            { id: 'swp', label: 'Monthly SWP', icon: <RefreshCw className="w-4 h-4" /> },
            { id: 'home-loan', label: 'Home Loan', icon: <Home className="w-4 h-4" /> },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex border border-black items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id ? 'bg-[#fa9632] text-black shadow-lg scale-105' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-8">
            
            {activeTab === 'sip-target' && (
              <div className="mb-2">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">What Are You Planning For?</h2>
                <p className="text-sm text-slate-500">Set your goal details and see how much you need to invest to achieve it.</p>
              </div>
            )}

            {activeTab === 'swp' && (
              <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                <button onClick={() => setSwpMode('balance')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${swpMode === 'balance' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate Balance</button>
                <button onClick={() => setSwpMode('withdrawal')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${swpMode === 'withdrawal' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate Withdrawal</button>
              </div>
            )}

            {activeTab === 'home-loan' ? (
              <>
                <InputGroup label="Loan Amount" value={inputs.loanAmount} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, loanAmount: v})} />
                <InputGroup label="Interest Rate" value={inputs.loanRate} min={5} max={15} step={0.1} onChange={(v) => setInputs({...inputs, loanRate: v})} isPercent />
                <InputGroup label="Tenure" value={inputs.loanTenure} min={1} max={30} step={1} onChange={(v) => setInputs({...inputs, loanTenure: v})} suffix="Yrs" />
              </>
            ) : (
              <>
                {activeTab === 'sip-target' && <InputGroup label="Goal Amount" value={inputs.target} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, target: v})} />}
                <InputGroup label={activeTab === 'sip-target' ? "Time Horizon" : "Investment Tenure"} value={inputs.tenure} min={1} max={40} step={1} onChange={(v) => setInputs({...inputs, tenure: v})} suffix="Yrs" />
                
                {activeTab === 'lumpsum-sip' && (
                  <>
                    <InputGroup label="Lumpsum Investment" value={inputs.lumpsum} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />
                    <InputGroup label="Monthly SIP" value={inputs.sip} min={0} max={500000} step={500} onChange={(v) => setInputs({...inputs, sip: v})} />
                    <InputGroup label="Expected Returns" value={inputs.rate} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rate: v})} isPercent />
                  </>
                )}

                {activeTab === 'swp' && (
                  <>
                    {swpMode === 'balance' && <InputGroup label="Lumpsum Investment" value={inputs.lumpsum} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />}
                    <InputGroup label="Monthly Withdrawal" value={inputs.swpAmount} min={500} max={500000} step={500} onChange={(v) => setInputs({...inputs, swpAmount: v})} />
                    {swpMode === 'withdrawal' && <InputGroup label="Desired Balance at End" value={inputs.swpTargetBalance} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, swpTargetBalance: v})} />}
                    <InputGroup label="Expected Returns" value={inputs.rate} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rate: v})} isPercent />
                  </>
                )}

                {activeTab === 'sip-target' && goalMode === 'lumpsum' && (
                  <>
                    <InputGroup label="Monthly SIP Amount (Fixed)" value={inputs.sip} min={500} max={500000} step={500} onChange={(v) => setInputs({...inputs, sip: v})} />
                    <InputGroup label="Expected SIP Returns (Per Annum)" value={inputs.rateSip} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateSip: v})} isPercent />
                    <InputGroup label="Expected Lumpsum Returns (Per Annum)" value={inputs.rateLumpsum} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateLumpsum: v})} isPercent />
                  </>
                )}
                {activeTab === 'sip-target' && goalMode === 'sip' && (
                  <>
                    <InputGroup label="Lumpsum Investment (Fixed)" value={inputs.lumpsum} min={10000} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />
                    <InputGroup label="Expected Lumpsum Returns (Per Annum)" value={inputs.rateLumpsum} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateLumpsum: v})} isPercent />
                    <InputGroup label="Expected SIP Returns (Per Annum)" value={inputs.rateSip} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rateSip: v})} isPercent />
                  </>
                )}

                {activeTab === 'lumpsum-sip' && (
                  <InputGroup label="Annual Step-up" value={inputs.stepUp} min={0} max={50} step={1} onChange={(v) => setInputs({...inputs, stepUp: v})} isPercent isStepUp />
                )}

                {/* NEW GOAL PLANNER BOTTOM TOGGLES */}
                {activeTab === 'sip-target' && (
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <label className="text-sm font-bold text-slate-700">How Would You Like To Invest?</label>
                      <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] text-slate-400 font-bold">i</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setGoalMode('sip')} 
                        className={`flex flex-col items-start justify-center p-4 rounded-xl border transition-all relative overflow-hidden ${goalMode === 'sip' ? 'border-[#fa9632] bg-[#fa9632] text-white shadow-md' : 'border-slate-200 bg-white text-slate-700 hover:border-[#fa9632]'}`}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <PiggyBank className={`w-5 h-5 ${goalMode === 'sip' ? 'text-white' : 'text-slate-400'}`} />
                          <span className="font-bold text-md">Monthly SIP</span>
                        </div>
                        <span className={`text-[11px] ml-8 ${goalMode === 'sip' ? 'text-white/90' : 'text-slate-500'}`}>Invest regularly over time</span>
                      </button>
                      
                      <button 
                        onClick={() => setGoalMode('lumpsum')} 
                        className={`flex flex-col items-start justify-center p-4 rounded-xl border transition-all relative overflow-hidden ${goalMode === 'lumpsum' ? 'border-[#fa9632] bg-[#fa9632] text-white shadow-md' : 'border-slate-200 bg-white text-slate-700 hover:border-[#fa9632]'}`}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <IndianRupee className={`w-5 h-5 ${goalMode === 'lumpsum' ? 'text-white' : 'text-slate-400'}`} />
                          <span className="font-bold text-md">Lumpsum</span>
                        </div>
                        <span className={`text-[11px] ml-8 ${goalMode === 'lumpsum' ? 'text-white/90' : 'text-slate-500'}`}>Invest a one-time amount</span>
                      </button>
                    </div>
                    <div className="mt-6 bg-[#fff8f0] border border-[#ffedd5] text-[#d97706] text-xs p-3 rounded-lg flex items-center gap-2">
                      <span className="font-bold">✓</span> All calculations are estimates and for illustration purposes only.
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden sticky top-24">
            <div className="bg-slate-900 p-8 text-center text-white">
              
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-slate-400 mb-2">
                {activeTab === 'home-loan' ? 'Monthly EMI' : 
                 (activeTab === 'sip-target' && goalMode === 'lumpsum') ? 'YOUR REQUIRED LUMPSUM' :
                 (activeTab === 'sip-target' && goalMode === 'sip') ? 'YOUR REQUIRED MONTHLY SIP' : 
                 (activeTab === 'swp' && swpMode === 'withdrawal') ? 'Monthly Withdrawal Possible' : 'Maturity Value'}
              </h3>
              
              <div className="text-4xl font-black text-[#fa9632] special">
                ₹ {activeTab === 'home-loan' ? (result.emi || 0).toLocaleString('en-IN') : 
                   (activeTab === 'sip-target' && goalMode === 'lumpsum') ? (result.lumpsumRequired || 0).toLocaleString('en-IN') :
                   (activeTab === 'sip-target' && goalMode === 'sip') ? (result.sipRequired || 0).toLocaleString('en-IN') : 
                   (activeTab === 'swp' && swpMode === 'withdrawal') ? (result.swpRequired || 0).toLocaleString('en-IN') :
                   (result.fv || 0).toLocaleString('en-IN')}
              </div>

              {/* NEW DYNAMIC SUBTITLES */}
              {activeTab === 'sip-target' && (
                <p className="text-sm text-white opacity-90 font-medium mt-2">
                  to reach your ₹ {(inputs.target || 0).toLocaleString('en-IN')} goal
                </p>
              )}
              {activeTab === 'swp' && (
                <p className="text-sm text-white opacity-90 font-medium mt-2">
                  for {inputs.tenure || 0} year{inputs.tenure !== 1 ? 's' : ''}
                </p>
              )}
            </div>
            
            <div className="p-8">
              <div className="flex justify-center mb-8 relative">
                <svg width="180" height="180" viewBox="0 0 42 42" className="transform -rotate-90">
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="4"></circle>
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#fa9632" strokeWidth="4" 
                    strokeDasharray={strokeDasharrayVal} strokeDashoffset="0"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {activeTab === 'sip-target' || (activeTab === 'swp' && swpMode === 'withdrawal') ? 'Left' : 'Gains Ratio'}
                   </span>
                   <span className="text-lg font-black text-slate-900">{Math.round(percentageDisplay)}%</span>
                </div>
              </div>

              <div className="space-y-4">
                <LegendRow label={activeTab === 'home-loan' ? "Principal" : "Invested"} value={investedValueDisplay} color="bg-slate-200" />
                <LegendRow label={activeTab === 'home-loan' ? "Interest" : "Wealth Gained"} value={gainsValueDisplay} color="bg-[#fa9632]" />
                
                <div className="pt-4 border-t border-slate-100">
                   <p className="text-[10px] text-slate-400 italic text-center mb-4">
                     "Earn with ethics. Grow with discipline. Build with purpose."
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, value, min, max, step, onChange, isPercent, isStepUp, suffix }) => (
  <div>
    <div className="flex justify-between mb-4 items-center">
      <label className="text-sm font-bold text-slate-700 flex items-center gap-2 sans">
        {label} 
        <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] text-slate-400 font-bold">i</div>
        {isStepUp && <ArrowUpRight className="w-4 h-4 text-[#fa9632]" />}
      </label>
      <div className="text-m flex bg-slate-100 px-3 py-2 rounded-lg text-black items-center border border-slate-200 focus-within:border-[#fa9632] transition-colors sans">
        {!isPercent && !suffix && <span className="mr-1 text-slate-400 sans">₹</span>}
        <input 
          type="number"
          value={value === 0 ? "" : value} 
          onChange={(e) => {
            const valInput = e.target.value;
            onChange(valInput === "" ? 0 : Number(valInput));
          }}
          placeholder="0"
          className="bg-transparent w-24 text-right outline-none special_ special sans [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {isPercent && <span className="ml-1 text-slate-400 sans">%</span>}
        {suffix && <span className="ml-1 text-slate-400 sans">{suffix}</span>}
      </div>
    </div>
    <input type="range" min={min} max={max} step={step} value={value || 0} onChange={(e) => onChange(Number(e.target.value))}
      className="special w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]" />
  </div>
);

const LegendRow = ({ label, value, color }) => (
  <div className="flex justify-between items-center sans">
    <div className="flex items-center gap-2 sans">
      <div className={`w-3 h-3 rounded-full ${color} sans`}></div>
      <span className="text-sm font-medium text-slate-600 special_ sans">{label}</span>
    </div>
    <span className="text-sm font-bold text-slate-900 special_ sans">₹ {(value || 0).toLocaleString('en-IN')}</span>
  </div>
);

export default Calculators;