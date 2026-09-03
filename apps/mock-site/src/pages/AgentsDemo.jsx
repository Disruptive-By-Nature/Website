import React, { useState, useEffect } from 'react';
import AiAgentCard from '../components/AiAgentCard';
import * as mockApi from '../lib/mockApi';

export default function AgentsDemo() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await mockApi.getAgents();
      setAgents(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-display font-bold text-white mb-2 flex justify-center items-center">
          <span className="material-symbols-outlined text-primary mr-3 text-4xl">smart_toy</span>
          AI Agents
        </h1>
        <p className="text-gray-400">Your autonomous AI workforce, ready to execute complex tasks.</p>
      </header>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">autorenew</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {agents.map(agent => (
            <AiAgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      )}

      <section className="glass-card p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-border-dark -z-10"></div>

          <div className="flex flex-col items-center mb-8 md:mb-0 bg-background-dark md:px-4 z-10">
            <div className="w-16 h-16 rounded-full bg-navy-deep border-2 border-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">smart_toy</span>
            </div>
            <div className="text-primary font-bold mb-1">Step 1</div>
            <h3 className="text-white font-medium">Choose your agent</h3>
          </div>

          <div className="flex flex-col items-center mb-8 md:mb-0 bg-background-dark md:px-4 z-10">
            <div className="w-16 h-16 rounded-full bg-navy-deep border-2 border-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">edit_note</span>
            </div>
            <div className="text-primary font-bold mb-1">Step 2</div>
            <h3 className="text-white font-medium">Describe your task</h3>
          </div>

          <div className="flex flex-col items-center bg-background-dark md:px-4 z-10">
            <div className="w-16 h-16 rounded-full bg-navy-deep border-2 border-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
            </div>
            <div className="text-primary font-bold mb-1">Step 3</div>
            <h3 className="text-white font-medium">Review & Deploy</h3>
          </div>

        </div>
      </section>
    </div>
  );
}
