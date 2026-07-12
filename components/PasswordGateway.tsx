import React, { useState, useEffect, ReactNode } from 'react';

interface PasswordGatewayProps {
  children: ReactNode;
  correctPassword?: string;
  title?: string;
}

const PasswordGateway: React.FC<PasswordGatewayProps> = ({ 
  children, 
  correctPassword = "secure123", 
  title = "Secure Access Required" 
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const originalTitleRef = React.useRef(document.title);
  const originalFaviconRef = React.useRef<string | null>(null);

  useEffect(() => {
    const faviconLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!originalFaviconRef.current && faviconLink) {
      originalFaviconRef.current = faviconLink.href;
    }

    if (sessionStorage.getItem('site_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const faviconLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!isAuthenticated) {
      document.title = "Security Gateway";
      if (faviconLink) {
        faviconLink.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔒</text></svg>';
      }
    } else {
      document.title = originalTitleRef.current;
      if (faviconLink && originalFaviconRef.current) {
        faviconLink.href = originalFaviconRef.current;
      }
    }
  }, [isAuthenticated]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      sessionStorage.setItem('site_auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#111827',
      color: '#f3f4f6',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        padding: '2rem',
        backgroundColor: '#1f2937',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              borderRadius: '0.375rem',
              border: '1px solid #374151',
              backgroundColor: '#111827',
              color: 'white',
              boxSizing: 'border-box'
            }}
            autoFocus
          />
          {error && <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            Access Site
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGateway;
