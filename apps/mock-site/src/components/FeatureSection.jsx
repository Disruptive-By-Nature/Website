import React from 'react';

export default function FeatureSection({ service }) {
  return (
    <section id={service.id} className="py-12 border-b border-border-dark last:border-0 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: service.color || '#FFC107' }}
            >
              <span className="material-symbols-outlined text-white">{service.icon}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-display">{service.name}</h2>
              <p className="text-primary text-sm font-medium">{service.tagline}</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
        
        <div className="bg-card-dark rounded-xl p-6 border border-border-dark">
          <h3 className="text-white font-semibold mb-4 font-display">Key Features</h3>
          <ul className="space-y-3">
            {service.features?.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span 
                  className="material-symbols-outlined text-[20px] mt-0.5"
                  style={{ color: service.color || '#FFC107' }}
                >
                  check_circle
                </span>
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
