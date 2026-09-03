import React from 'react';

export default function AiAgentCard({ agent }) {
  return (
    <div className="glass-card bg-card-dark rounded-xl p-6 border border-border-dark flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
          <span className="material-symbols-outlined text-primary text-[24px]">{agent.icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white font-display">{agent.name}</h3>
          <p className="text-xs text-gray-400">{agent.description}</p>
        </div>
      </div>
      
      <div className="mt-auto space-y-3 pt-4 border-t border-border-dark/50">
        <h4 className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Example Interaction</h4>
        
        {/* Prompt */}
        <div className="bg-background-dark/80 rounded-lg p-3 border border-border-dark/50 flex gap-2">
          <span className="text-primary font-bold text-sm shrink-0">&gt;</span>
          <p className="text-sm text-primary/90">{agent.examplePrompt}</p>
        </div>
        
        {/* Response */}
        <div className="bg-navy-deep/60 rounded-lg p-3 border border-border-dark/50 relative">
          <span className="absolute -top-2 -right-2 bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
            AI
          </span>
          <p className="text-sm text-gray-300 italic">
            "{agent.exampleResponse}"
          </p>
        </div>
      </div>
    </div>
  );
}
