import React, { useState, useEffect } from 'react';
import IntelligenceOpportunitiesTable from '../components/IntelligenceOpportunitiesTable';
import * as mockApi from '../lib/mockApi';

export default function IntelligenceDemo() {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [opportunities, setOpportunities] = useState([]);
  const [jobBoardIntel, setJobBoardIntel] = useState([]);
  const [newBusinesses, setNewBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [oppsData, jobsData, businessesData] = await Promise.all([
        mockApi.getOpportunities(),
        mockApi.getJobBoardIntel(),
        mockApi.getNewBusinesses()
      ]);
      setOpportunities(oppsData);
      setJobBoardIntel(jobsData);
      setNewBusinesses(businessesData);
      setLoading(false);
    }
    loadData();
  }, []);

  const tabs = [
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'jobBoard', label: 'Job Board Intelligence' },
    { id: 'newBusinesses', label: 'New Businesses' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-display font-bold text-white mb-2">Market Intelligence & Prospecting</h1>
        <p className="text-gray-400">Discover signals, track movements, and find opportunities before your competitors.</p>
      </header>

      <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              activeTab === tab.id 
                ? 'bg-primary text-black' 
                : 'bg-card-dark text-gray-400 hover:text-white border border-border-dark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">autorenew</span>
        </div>
      ) : (
        <div className="min-h-[500px]">
          {activeTab === 'opportunities' && <IntelligenceOpportunitiesTable opportunities={opportunities} />}

          {activeTab === 'jobBoard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobBoardIntel.map(job => (
                <div key={job.id} className="glass-card p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <span className="bg-navy-deep text-blue-400 text-xs px-2 py-1 rounded border border-blue-900/50">
                      {job.source}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400 flex-grow">
                    <p className="flex items-center"><span className="material-symbols-outlined text-[18px] mr-2">location_on</span>{job.location}</p>
                    <p className="flex items-center"><span className="material-symbols-outlined text-[18px] mr-2">payments</span>{job.salaryRange}</p>
                    <p className="flex items-center"><span className="material-symbols-outlined text-[18px] mr-2">calendar_today</span>{job.posted}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-dark">
                    <div className="flex items-center space-x-2 text-amber-400 text-sm font-medium">
                      <span className="material-symbols-outlined text-[18px]">campaign</span>
                      <span>Signal: {job.signal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'newBusinesses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newBusinesses.map(business => (
                <div key={business.id} className="glass-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{business.name}</h3>
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">New</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Incorporated</span>
                      <span className="text-gray-300">{business.incorporated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sector</span>
                      <span className="text-gray-300">{business.sector}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location</span>
                      <span className="text-gray-300">{business.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">SIC Code</span>
                      <span className="text-gray-300">{business.sicCode}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-dark">
                    <span className="text-xs text-gray-500 block mb-2">Directors</span>
                    <div className="flex flex-wrap gap-2">
                      {business.directors.map((director, i) => (
                        <span key={i} className="bg-card-dark border border-border-dark px-2 py-1 rounded text-xs text-gray-300">
                          {director}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
