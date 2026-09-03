import React from 'react';

const COLUMNS = ['Shortlist', 'Interview', 'Offer', 'Placement'];

export default function RecruitmentPipelineBoard({ candidates }) {
  const getColumnStyle = (col) => {
    if (col === 'Placement') return 'bg-green-900/10 border-green-900/30';
    return 'bg-card-dark border-border-dark';
  };

  const getCandidatesByStage = (stage) => (candidates || []).filter(c => c.stage === stage);

  return (
    <div className="flex overflow-x-auto gap-4 pb-4">
      {COLUMNS.map(col => {
        const colCands = getCandidatesByStage(col);
        return (
          <div key={col} className={`min-w-[240px] w-[300px] rounded-xl p-4 border ${getColumnStyle(col)} shrink-0 flex flex-col`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium text-sm font-display">{col}</h3>
              <span className="text-xs bg-border-dark text-gray-400 px-2 py-0.5 rounded-full">
                {colCands.length}
              </span>
            </div>
            
            <div className="flex-1 space-y-3">
              {colCands.map((cand, idx) => (
                <div key={idx} className="bg-navy-deep/50 rounded-lg p-3 border border-border-dark/50 shadow-sm hover:border-gray-600 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-medium text-white text-sm">{cand.name}</div>
                  </div>
                  <div className="text-xs text-primary font-medium mb-2">{cand.role}</div>
                  
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">business</span>
                      <span className="truncate">{cand.targetCompany}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">payments</span>
                      <span>{cand.salary}</span>
                    </div>
                  </div>
                  
                  {cand.notes && (
                    <div className="mt-2 pt-2 border-t border-border-dark/50 text-[11px] text-gray-500 italic line-clamp-2">
                      {cand.notes}
                    </div>
                  )}
                </div>
              ))}
              {colCands.length === 0 && (
                <div className="text-center text-gray-600 text-xs py-4 border border-dashed border-border-dark rounded-lg">
                  No candidates
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
