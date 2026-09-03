import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardKpiCard from '../components/DashboardKpiCard';
import * as mockApi from '../lib/mockApi';

export default function FullDemo() {
  const [kpis, setKpis] = useState([]);
  const [activity, setActivity] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [kpiData, activityData, oppsData, tasksData, candidatesData] = await Promise.all([
        mockApi.getKpis(),
        mockApi.getActivityData(),
        mockApi.getOpportunities(),
        mockApi.getTasks(),
        mockApi.getCandidates()
      ]);
      setKpis(kpiData);
      setActivity(activityData);
      setOpportunities(oppsData.slice(0, 4));
      setTasks(tasksData.slice(0, 5));
      setCandidates(candidatesData);
      setLoading(false);
    }
    loadData();
  }, []);

  // Compute pipeline summary for recruitment
  const pipelineSummary = candidates.reduce((acc, c) => {
    acc[c.stage] = (acc[c.stage] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8 space-y-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Platform Dashboard</h1>
          <p className="text-gray-400 text-sm">Welcome back, here is your daily overview.</p>
        </div>
        <div className="text-sm text-gray-500 font-medium">
          Last updated: Today at 09:00 AM
        </div>
      </header>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">autorenew</span>
        </div>
      ) : (
        <>
          {/* Top KPIs Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {kpis.map(kpi => (
              <DashboardKpiCard key={kpi.id} kpi={kpi} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Column - Chart & Opportunities */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Activity Chart Section */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-white mb-6">Monthly Activity</h3>
                <div className="h-64 flex items-end space-x-2 border-b border-border-dark pb-2 relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="border-t border-border-dark/50 w-full"></div>
                    <div className="border-t border-border-dark/50 w-full"></div>
                    <div className="border-t border-border-dark/50 w-full"></div>
                    <div className="border-t border-border-dark/50 w-full"></div>
                  </div>
                  
                  {activity.map(month => (
                    <div key={month.month} className="flex-1 flex flex-col items-center group relative z-10">
                      <div className="w-full flex justify-center items-end space-x-1 h-full">
                        <div className="w-1/3 bg-blue-500/80 rounded-t-sm hover:bg-blue-400 transition" style={{ height: `${month.calls}%` }} title={`Calls: ${month.calls}`}></div>
                        <div className="w-1/3 bg-amber-500/80 rounded-t-sm hover:bg-amber-400 transition" style={{ height: `${month.emails}%` }} title={`Emails: ${month.emails}`}></div>
                        <div className="w-1/3 bg-green-500/80 rounded-t-sm hover:bg-green-400 transition" style={{ height: `${month.placements}%` }} title={`Placements: ${month.placements}`}></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-2 block w-full text-center">{month.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center text-xs text-gray-400"><div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>Calls</div>
                  <div className="flex items-center text-xs text-gray-400"><div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>Emails</div>
                  <div className="flex items-center text-xs text-gray-400"><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>Placements</div>
                </div>
              </div>

              {/* Recent Opportunities */}
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white">Recent Opportunities</h3>
                  <Link to="/intelligence" className="text-primary hover:text-primary-dark text-sm font-medium transition">
                    View all &rarr;
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-border-dark/50 text-gray-400">
                      <tr>
                        <th className="p-3 font-medium">Company</th>
                        <th className="p-3 font-medium">Signal</th>
                        <th className="p-3 font-medium">Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-dark">
                      {opportunities.map(opp => (
                        <tr key={opp.id}>
                          <td className="p-3 text-white font-medium">{opp.company}</td>
                          <td className="p-3 text-gray-400">{opp.signals?.join(', ')}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              opp.aiScore >= 90 ? 'bg-green-500/20 text-green-400' :
                              opp.aiScore >= 75 ? 'bg-amber-500/20 text-amber-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {opp.aiScore}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Side Column - Tasks & Recruitment */}
            <div className="space-y-6">
              
              {/* Recent Tasks */}
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white">Recent Tasks</h3>
                  <Link to="/crm" className="text-primary hover:text-primary-dark text-sm font-medium transition">
                    View CRM &rarr;
                  </Link>
                </div>
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div key={task.id} className="flex justify-between items-start pb-3 border-b border-border-dark last:border-0 last:pb-0">
                      <div>
                        <p className={`text-sm font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-white'}`}>
                          {task.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{task.dueDate}</p>
                      </div>
                      <span className={`w-2 h-2 rounded-full mt-1.5 ${
                        task.priority === 'High' ? 'bg-red-500' :
                        task.priority === 'Medium' ? 'bg-amber-500' : 'bg-gray-500'
                      }`}></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruitment Activity */}
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white">Recruitment Pipeline</h3>
                  <Link to="/recruitment" className="text-primary hover:text-primary-dark text-sm font-medium transition">
                    View Board &rarr;
                  </Link>
                </div>
                <div className="space-y-4">
                  {Object.entries(pipelineSummary).map(([stage, count]) => (
                    <div key={stage} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 capitalize">{stage.replace('_', ' ')}</span>
                      <span className="bg-navy-deep text-primary font-bold px-3 py-1 rounded-full text-sm border border-primary/20">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </div>
  );
}
