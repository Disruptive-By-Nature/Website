import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <Link to={`/platform#${service.id}`} className="block h-full group">
      <div className="glass-card rounded-xl p-6 h-full border border-border-dark hover:border-gray-700 transition-colors bg-card-dark">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: service.color || '#FFC107' }}
        >
          <span className="material-symbols-outlined text-white">{service.icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mt-3 font-display">{service.name}</h3>
        <p className="text-sm text-gray-400 mt-1">{service.tagline}</p>
        <div className="mt-4">
          <span className="text-xs text-gray-500 bg-border-dark/50 px-2 py-1 rounded-full">
            {service.features?.length || 0} features
          </span>
        </div>
      </div>
    </Link>
  );
}
