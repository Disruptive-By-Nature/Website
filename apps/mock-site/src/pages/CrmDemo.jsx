import React, { useState, useEffect } from 'react';
import CrmAccountsTable from '../components/CrmAccountsTable';
import CrmDealsBoard from '../components/CrmDealsBoard';
import * as mockApi from '../lib/mockApi';

export default function CrmDemo() {
  const [activeTab, setActiveTab] = useState('accounts');
  const [accounts, setAccounts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [accountsData, contactsData, dealsData, tasksData] = await Promise.all([
        mockApi.getAccounts(),
        mockApi.getContacts(),
        mockApi.getDeals(),
        mockApi.getTasks()
      ]);
      setAccounts(accountsData);
      setContacts(contactsData);
      setDeals(dealsData);
      setTasks(tasksData);
      setLoading(false);
    }
    loadData();
  }, []);

  const tabs = [
    { id: 'accounts', label: 'Accounts' },
    { id: 'contacts', label: 'Contacts' },
    { id: 'deals', label: 'Deals' },
    { id: 'tasks', label: 'Tasks' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-display font-bold text-white mb-2">Universal CRM</h1>
        <p className="text-gray-400">One source of truth for every relationship.</p>
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
          {activeTab === 'accounts' && <CrmAccountsTable accounts={accounts} />}
          
          {activeTab === 'contacts' && (
            <div className="glass-card overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-border-dark/50 text-gray-400">
                  <tr>
                    <th className="p-4 font-medium">Name</th>
                    <th className="p-4 font-medium">Role</th>
                    <th className="p-4 font-medium">Company</th>
                    <th className="p-4 font-medium">Email</th>
                    <th className="p-4 font-medium">Last Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  {contacts.map(contact => (
                    <tr key={contact.id} className="hover:bg-border-dark/30 transition">
                      <td className="p-4 text-white font-medium">{contact.name}</td>
                      <td className="p-4 text-gray-300">{contact.role}</td>
                      <td className="p-4 text-gray-300">{contact.company}</td>
                      <td className="p-4 text-gray-400">{contact.email}</td>
                      <td className="p-4 text-gray-400">{contact.lastContact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'deals' && <CrmDealsBoard deals={deals} />}

          {activeTab === 'tasks' && (
            <div className="glass-card p-6 space-y-4">
              {tasks.map(task => (
                <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-card-dark border border-border-dark">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-500 hover:text-primary transition">
                      <span className="material-symbols-outlined">
                        {task.completed ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                    </button>
                    <div>
                      <h4 className={`text-white font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.title}
                      </h4>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-gray-400">
                        <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">person</span>{task.assignee}</span>
                        <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">event</span>{task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      task.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                      task.priority === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {task.priority}
                    </span>
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
