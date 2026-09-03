import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import CrmDemo from './pages/CrmDemo';
import IntelligenceDemo from './pages/IntelligenceDemo';
import RecruitmentDemo from './pages/RecruitmentDemo';
import AgentsDemo from './pages/AgentsDemo';
import FullDemo from './pages/FullDemo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/crm" element={<CrmDemo />} />
          <Route path="/intelligence" element={<IntelligenceDemo />} />
          <Route path="/recruitment" element={<RecruitmentDemo />} />
          <Route path="/agents" element={<AgentsDemo />} />
          <Route path="/demo" element={<FullDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
