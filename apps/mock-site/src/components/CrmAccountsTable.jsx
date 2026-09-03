import React from 'react';

export default function CrmAccountsTable({ accounts }) {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'bg-green-500/10 text-green-500 border border-green-500/20';
      case 'prospect': return 'bg-blue-500/10 text-blue-500 border border-blue-500/20';
      case 'dormant': return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
      default: return 'bg-gray-800 text-gray-400 border border-gray-700';
    }
  };

  return (
    <div className="overflow-x-auto w-full glass-card rounded-xl border border-border-dark p-1">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Company</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Sector</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Location</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Revenue</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Status</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Contacts</th>
            <th className="text-xs uppercase text-gray-500 pb-3 pt-4 px-4 border-b border-border-dark font-semibold">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {accounts?.map((account, idx) => (
            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
              <td className="py-3 px-4 text-sm font-medium text-white border-b border-border-dark/50">{account.company}</td>
              <td className="py-3 px-4 text-sm text-gray-400 border-b border-border-dark/50">{account.sector}</td>
              <td className="py-3 px-4 text-sm text-gray-400 border-b border-border-dark/50">{account.location}</td>
              <td className="py-3 px-4 text-sm text-gray-400 border-b border-border-dark/50">{account.revenue}</td>
              <td className="py-3 px-4 text-sm border-b border-border-dark/50">
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(account.status)}`}>
                  {account.status}
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-400 border-b border-border-dark/50">{account.contacts}</td>
              <td className="py-3 px-4 text-sm text-gray-400 border-b border-border-dark/50">{account.lastContact}</td>
            </tr>
          ))}
          {(!accounts || accounts.length === 0) && (
            <tr>
              <td colSpan="7" className="py-8 text-center text-gray-500 text-sm">No accounts found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
