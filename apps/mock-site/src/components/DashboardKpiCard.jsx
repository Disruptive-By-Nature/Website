import React from 'react';

export default function DashboardKpiCard({ kpi }) {
  const isPositive = kpi.change?.startsWith('+');
  const isNegative = kpi.change?.startsWith('-');
  
  return (
    <div className="glass-card bg-card-dark rounded-xl p-5 border border-border-dark flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
          <span className="material-symbols-outlined text-primary">{kpi.icon}</span>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-1">{kpi.label}</p>
          <p className="text-2xl font-bold text-white font-display">{kpi.value}</p>
        </div>
      </div>
      
      {kpi.change && (
        <div className="text-right">
          <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-gray-400'}`}>
            {isPositive && <span className="material-symbols-outlined text-[16px]">arrow_upward</span>}
            {isNegative && <span className="material-symbols-outlined text-[16px]">arrow_downward</span>}
            <span>{kpi.change}</span>
          </div>
        </div>
      )}
    </div>
  );
}
