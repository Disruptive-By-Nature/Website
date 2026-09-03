import React, { useState, useEffect } from 'react';
import RecruitmentPipelineBoard from '../components/RecruitmentPipelineBoard';
import * as mockApi from '../lib/mockApi';

export default function RecruitmentDemo() {
  const [candidates, setCandidates] = useState([]);
  const [parsedCv, setParsedCv] = useState(null);
  const [jobAd, setJobAd] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [candidatesData, cvData, jobAdData] = await Promise.all([
        mockApi.getCandidates(),
        mockApi.getParsedCv(),
        mockApi.getGeneratedJobAd()
      ]);
      setCandidates(candidatesData);
      setParsedCv(cvData);
      setJobAd(jobAdData);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <header>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Recruitment & Talent</h1>
        <p className="text-gray-400">End-to-end applicant tracking and AI-powered recruitment tools.</p>
      </header>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">autorenew</span>
        </div>
      ) : (
        <>
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Candidate Pipeline</h2>
            <RecruitmentPipelineBoard candidates={candidates} />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary">document_scanner</span>
                CV Parsing Engine
              </h2>
              {parsedCv && (
                <div className="glass-card p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{parsedCv.name}</h3>
                      <p className="text-primary font-medium text-lg">{parsedCv.currentRole} at {parsedCv.currentCompany}</p>
                    </div>
                    <div className="bg-navy-deep border border-blue-900 text-blue-400 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <span className="material-symbols-outlined text-[18px] mr-1">history</span>
                      {parsedCv.experience} Years Exp
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Summary</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{parsedCv.summary}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Skills Extracted</h4>
                    <div className="flex flex-wrap gap-2">
                      {parsedCv.skills.map(skill => (
                        <span key={skill} className="bg-card-dark border border-border-dark text-gray-300 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Education</h4>
                    <p className="text-gray-300 text-sm">{parsedCv.education}</p>
                  </div>
                </div>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary">edit_document</span>
                AI Job Ad Generator
              </h2>
              {jobAd && (
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">auto_awesome</span>
                    AI Generated
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 pr-24">{jobAd.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">business</span>{jobAd.company}</span>
                    <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">location_on</span>{jobAd.location}</span>
                    <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">payments</span>{jobAd.salary}</span>
                  </div>

                  <div className="prose prose-invert prose-sm max-w-none mb-6">
                    <p className="text-gray-300 whitespace-pre-line">{jobAd.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      {jobAd.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
}
