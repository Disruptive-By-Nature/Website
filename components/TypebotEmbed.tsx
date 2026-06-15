import React, { useEffect, useRef } from 'react';

interface TypebotEmbedProps {
  typebot: string;
  className?: string;
  height?: string;
}

const TypebotEmbed: React.FC<TypebotEmbedProps> = ({ typebot, className = "", height = "600px" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js'
      
      const container = document.getElementById('typebot-container');
      if (container) {
        container.innerHTML = ''; // Clear container first
        Typebot.initStandard({
          container: container,
          typebot: "${typebot}",
          apiHost: "https://forms.power-up-talent.app",
        });
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [typebot]);

  return (
    <div 
      id="typebot-container" 
      ref={containerRef} 
      className={`w-full rounded-sm overflow-hidden border border-white/10 bg-navy-deep shadow-2xl ${className}`}
      style={{ height }}
    />
  );
};

export default TypebotEmbed;
