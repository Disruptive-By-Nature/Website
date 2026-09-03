import React from 'react';

const COLUMNS = ['Discovery', 'Proposal', 'Negotiation', 'Won', 'Lost'];

export default function CrmDealsBoard({ deals }) {
  const getColumnStyle = (col) => {
    if (col === 'Won') return 'bg-green-900/10 border-green-900/30';
    if (col === 'Lost') return 'bg-red-900/10 border-red-900/30';
    return 'bg-card-dark border-border-dark';
  };

  const getDealsByStage = (stage) => (deals || []).filter(d => d.stage === stage);

  const formatValue = (val) => {
    if (!val) return '£0k';
    return `£${(val / 1000).toLocaleString()}k`;
  };

  return (
    <div className="flex overflow-x-auto gap-4 pb-4">
      {COLUMNS.map(col => {
        const colDeals = getDealsByStage(col);
        return (
          <div key={col} className={`min-w-[220px] w-[280px] rounded-xl p-4 border ${getColumnStyle(col)} shrink-0 flex flex-col`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium text-sm font-display">{col}</h3>
              <span className="text-xs bg-border-dark text-gray-400 px-2 py-0.5 rounded-full">
                {colDeals.length}
              </span>
            </div>
            
            <div className="flex-1 space-y-3">
              {colDeals.map((deal, idx) => (
                <div key={idx} className="bg-navy-deep/50 rounded-lg p-3 border border-border-dark/50 shadow-sm hover:border-gray-600 transition-colors cursor-pointer">
                  <div className="font-medium text-white text-sm truncate mb-1">{deal.title}</div>
                  <div className="text-xs text-gray-400 mb-2 truncate">{deal.company}</div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-semibold text-sm">{formatValue(deal.value)}</span>
                    <span className="text-xs text-gray-500">{deal.probability}%</span>
                  </div>
                  
                  <div className="mt-3 pt-2 border-t border-border-dark/50 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">person</span> {deal.owner}</span>
                  </div>
                </div>
              ))}
              {colDeals.length === 0 && (
                <div className="text-center text-gray-600 text-xs py-4 border border-dashed border-border-dark rounded-lg">
                  No deals
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
