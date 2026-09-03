import React from 'react';

export default function IntelligenceOpportunitiesTable({ opportunities }) {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-amber-500';
    return 'text-gray-400';
  };

  const getPriorityBadge = (priority) => {
    const p = priority?.toLowerCase();
    if (p === 'hot') return 'bg-red-500/10 text-red-500 border-red-500/20';
    if (p === 'warm') return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  };

  return (
    <div className="overflow-x-auto w-full glass-card rounded-xl border border-border-dark p-1">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">AI Score</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Company</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Sector</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Location</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Priority</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Signals</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Updated</th>
          </tr>
        </thead>
        <tbody>
          {opportunities?.map((opp, idx) => (
            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
              <td className="py-3 px-4 border-b border-border-dark/50">
                <div className={`font-bold text-lg ${getScoreColor(opp.aiScore)}`}>{opp.aiScore}</div>
              </td>
              <td className="py-3 px-4 text-sm font-medium text-white border-b border-border-dark/50">{opp.company}</td>
              <td className="py-3 px-4 text-sm text-gray-400 border-b border-border-dark/50">{opp.sector}</td>
              <td className="py-3 px-4 text-sm text-gray-400 border-b border-border-dark/50">{opp.location}</td>
              <td className="py-3 px-4 border-b border-border-dark/50">
                <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityBadge(opp.priorityBand)}`}>
                  {opp.priorityBand}
                </span>
              </td>
              <td className="py-3 px-4 border-b border-border-dark/50 max-w-[200px]">
                <div className="flex flex-wrap gap-1">
                  {opp.signals?.map((sig, sIdx) => (
                    <span key={sIdx} className="text-[10px] bg-navy-deep text-gray-300 px-1.5 py-0.5 rounded border border-border-dark">
                      {sig}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-500 border-b border-border-dark/50">{opp.lastUpdated}</td>
            </tr>
          ))}
          {(!opportunities || opportunities.length === 0) && (
            <tr>
              <td colSpan="7" className="py-8 text-center text-gray-500 text-sm">No opportunities found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
