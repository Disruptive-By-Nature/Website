import React, { useState } from 'react';
import FeatureSection from '../components/FeatureSection';
import { serviceAreas, DEPRECATED_SERVICES } from '../data/mockServices';

export default function Platform() {
  const [showDeprecated, setShowDeprecated] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center">
        <h1 className="text-3xl font-display font-bold text-white mb-4">Platform Feature Catalogue</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything your team needs, in one place.
        </p>
      </header>

      <div className="space-y-16">
        {serviceAreas.map(area => (
          <FeatureSection key={area.id} service={area} />
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border-dark">
        <button 
          onClick={() => setShowDeprecated(!showDeprecated)}
          className="flex items-center text-gray-500 hover:text-white transition"
        >
          <span className="material-symbols-outlined mr-2">
            {showDeprecated ? 'expand_less' : 'expand_more'}
          </span>
          {showDeprecated ? 'Hide' : 'Show'} Deprecated Modules
        </button>
        
        {showDeprecated && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {DEPRECATED_SERVICES.map((service, idx) => (
              <div key={idx} className="glass-card p-4 flex items-center justify-between opacity-75">
                <div>
                  <h4 className="text-white font-semibold line-through">{service.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">{service.reason}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-primary block">Replaced by:</span>
                  <span className="text-sm text-white">{service.replacedBy}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
