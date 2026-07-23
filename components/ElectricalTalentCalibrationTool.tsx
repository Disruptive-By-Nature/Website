import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ElectricalTalentCalibrationTool: React.FC = () => {
  const navigate = useNavigate();
  
  const [roleCategory, setRoleCategory] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [territory, setTerritory] = useState('');

  const calculateResults = () => {
    if (!roleCategory || !businessType || !territory) return null;
    
    let scarcity = 'High';
    let leadTime = '4-6 Weeks';
    
    if (roleCategory.includes('Director') || territory.includes('London')) {
      scarcity = 'Critical';
      leadTime = '8-10 Weeks';
    } else if (roleCategory.includes('Manager') || businessType.includes('Manufacturer')) {
      scarcity = 'Severe';
      leadTime = '6-8 Weeks';
    }

    return { scarcity, leadTime };
  };

  const handleCTA = () => {
    const params = new URLSearchParams({
      role: roleCategory,
      type: businessType,
      territory: territory
    }).toString();
    navigate(`/contact?${params}`);
  };

  const results = calculateResults();

  return (
    <div className="bg-navy-deep p-8 rounded-lg shadow-xl border border-gray-800 text-white max-w-4xl mx-auto my-12 relative overflow-hidden group hover:border-[#FFC107] transition-all duration-300">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-9xl text-[#FFC107]">electric_bolt</span>
      </div>
      
      <h2 className="text-3xl font-display font-bold mb-6 text-glow text-white">
        Electrical Talent Calibration Tool
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl">
        Select your parameters to instantly assess talent scarcity and search timeframes for the UK Electrical sector.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8 relative z-10">
        <div>
          <label className="block text-sm font-semibold text-[#FFC107] mb-2">Role Category</label>
          <select 
            className="w-full bg-background-dark border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
            value={roleCategory}
            onChange={e => setRoleCategory(e.target.value)}
          >
            <option value="">Select Role...</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Area Sales Manager">Area Sales Manager</option>
            <option value="Category Buyer / Procurement">Category Buyer / Procurement</option>
            <option value="Technical Sales Specialist">Technical Sales Specialist</option>
            <option value="Trade Counter Lead">Trade Counter Lead</option>
            <option value="Operations Director">Operations Director</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#FFC107] mb-2">Business Type</label>
          <select 
            className="w-full bg-background-dark border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
            value={businessType}
            onChange={e => setBusinessType(e.target.value)}
          >
            <option value="">Select Type...</option>
            <option value="National Wholesaler">National Wholesaler (Rexel, CEF...)</option>
            <option value="Independent Buying Group">Independent Buying Group</option>
            <option value="Technical Distributor">Technical Distributor</option>
            <option value="Electrical Equipment Manufacturer">Electrical Equipment Manufacturer</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#FFC107] mb-2">Territory</label>
          <select 
            className="w-full bg-background-dark border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
            value={territory}
            onChange={e => setTerritory(e.target.value)}
          >
            <option value="">Select Territory...</option>
            <option value="London & South East">London & South East</option>
            <option value="Midlands">Midlands</option>
            <option value="North West & Yorkshire">North West & Yorkshire</option>
            <option value="South West & Wales">South West & Wales</option>
            <option value="Scotland">Scotland</option>
          </select>
        </div>
      </div>

      {results && (
        <div className="bg-background-dark border border-[#FFC107]/30 rounded-lg p-6 animate-fade-in relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">Talent Scarcity Rating</p>
                <p className={`text-2xl font-bold ${
                  results.scarcity === 'Critical' ? 'text-red-500' : 
                  results.scarcity === 'Severe' ? 'text-orange-500' : 'text-[#FFC107]'
                }`}>{results.scarcity}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">Est. Search Lead Time</p>
                <p className="text-2xl font-bold text-white">{results.leadTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Key Factors</p>
                <p className="text-sm text-gray-300">
                  Competitive packages, counter-offers prevalent, remote flexibility demands.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <button 
                onClick={handleCTA}
                className="bg-[#FFC107] hover:bg-[#FFD84D] text-black font-bold py-4 px-8 rounded inline-flex items-center transition-transform hover:scale-105"
              >
                Brief This Headhunt
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectricalTalentCalibrationTool;
