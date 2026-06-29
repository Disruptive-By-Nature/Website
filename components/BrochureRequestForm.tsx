import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth, sendEmail, getAccessToken } from '../src/lib/google';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

interface Brochure {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  pages: string;
  author: string;
  description: string;
  outcomes: string[];
  docUrl: string;
}

const AVAILABLE_BROCHURES: Brochure[] = [
  {
    id: "salary-guide",
    title: "2026/2027 UK Electrical Wholesale Salary & Benefits Report",
    subtitle: "P&L-Linked Reward Architecture for Top-Tier Performers",
    category: "EXECUTIVE COMPENSATION",
    pages: "24 Pages",
    author: "Power-Up Intelligence Division",
    description: "An exhaustive analysis of compensations, branch-manager percentages/commission grids, car allowances, and regional benefits across national electrical distributors and leading UK independents (Edmundson, Rexel, CEF, etc.).",
    outcomes: [
      "Branch Manager profit-share bonus modeling",
      "Company EV and car scheme trends in the trade sector",
      "Retention strategies for multi-site Regional Managers",
      "Accurate benchmarks of base salary tiers based on annual trade volume"
    ],
    docUrl: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772982124/Gemini_Generated_Image_vrx46xvrx46xvrx4_yq2wbd.png"
  },
  {
    id: "vetting-blueprint",
    title: "Branch Manager Vetting Blueprint: 10 Trade Counter Frameworks",
    subtitle: "Assessing Margin Integrity & P&L Literacy under Fire",
    category: "SOURCING INTELLIGENCE",
    pages: "18 Pages",
    author: "Headhunting Operations Team",
    description: "Our proprietary guide detailing exactly how we vet active and passive candidates on commercial acumen, wholesale stock turn ratios, supplier rebate mechanisms, and trade counter team leadership.",
    outcomes: [
      "The 'Trade Counter Margin Check' scenario tests",
      "Dissecting real versus artificial gross profit gains",
      "How to run non-disruptive, highly discrete candidate lookups",
      "Evaluating local client base migration probability"
    ],
    docUrl: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772982124/Gemini_Generated_Image_vrx46xvrx46xvrx4_yq2wbd.png"
  },
  {
    id: "rollout-playbook",
    title: "National Rollout Sourcing Playbook: Scaling Wholesalers post-EV",
    subtitle: "Sourcing High-Performing Regional and Specialist Branch Teams at Speed",
    category: "GROWTH & ROLLOUTS",
    pages: "32 Pages",
    author: "Strategic Solutions Group",
    description: "Frameworks designed specifically for UK Electrical Wholesalers undergoing rapid geographic rollout, branch acquisitions, or restructuring into specialised teams.",
    outcomes: [
      "Sourcing branch managers to capture early EV, PV & smart tech markets",
      "Fast-track scaling recruitment for regional branch hubs in 90 days",
      "Retaining localised supplier relations during high-pace counter expansion",
      "Co-ordinating cross-geographical trade counter hiring pipelines"
    ],
    docUrl: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772982124/Gemini_Generated_Image_vrx46xvrx46xvrx4_yq2wbd.png"
  },
  {
    id: "fire-safety-lighting",
    title: "Fire Safety & Architectural Lighting Sourcing Metrics",
    subtitle: "Bridging Compliance, Technical Engineering & Regional Corporate Sales",
    category: "SECTOR REPORT",
    pages: "16 Pages",
    author: "Technical Specialist Division",
    description: "A comprehensive guide on recruitment dynamics within high-growth connected sectors, specifically Fire Safety and Lighting specifiers and regional sales engineers.",
    outcomes: [
      "Vetting for regulatory and British Standard safety compliance",
      "Attracting technical lighting designers with deep contractor channels",
      "How to recruit specifiers who secure high-margin project bids",
      "Salary frameworks for fire system project managers in key UK regions"
    ],
    docUrl: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772982124/Gemini_Generated_Image_vrx46xvrx46xvrx4_yq2wbd.png"
  }
];

const BrochureRequestForm: React.FC = () => {
  // Brochure selection state
  const [selectedBrochureId, setSelectedBrochureId] = useState<string>("all");

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    company: '',
  });

  // Action states
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileStep, setCompileStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasDispatchedEmail, setHasDispatchedEmail] = useState(false);

  const compilationSteps = [
    'Mapping competitor branch managers in your UK region...',
    'Aggregating electrical wholesale salary benchmarks from 25,000+ records...',
    'Customising executive headhunting case studies for your division...',
    'Locking in secure dispatch links and CRM lead index...',
    'Compiling PDF package successfully.'
  ];

  // Firestore error handler
  const handleFirestoreError = (error: unknown, operationType: OperationType, path: string | null) => {
    const errInfo: FirestoreErrorInfo = {
      error: error instanceof Error ? error.message : String(error),
      authInfo: {
        userId: auth.currentUser?.uid,
        email: auth.currentUser?.email,
        emailVerified: auth.currentUser?.emailVerified,
        isAnonymous: auth.currentUser?.isAnonymous,
      },
      operationType,
      path,
    };
    console.error('Firestore Error: ', JSON.stringify(errInfo));
    throw new Error(JSON.stringify(errInfo));
  };

  const validateForm = () => {
    const errors = { name: '', email: '', company: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Corporate email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid corporate email';
      isValid = false;
    }

    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const getBrochureName = (id: string) => {
    if (id === "all") return "All Volumes Comprehensive Pack";
    const found = AVAILABLE_BROCHURES.find(b => b.id === id);
    return found ? found.title : "Custom Sourcing Dossier";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsCompiling(true);
    setCompileStep(0);

    const activeBrochureTitle = getBrochureName(selectedBrochureId);

    // Save lead to Firestore
    const pathForWrite = 'brochure_requests';
    const uniqueId = doc(collection(db, pathForWrite)).id;
    try {
      await setDoc(doc(db, pathForWrite, uniqueId), {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        roleInterest: activeBrochureTitle,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.warn('Could not save lead to database directly:', err);
      try {
        handleFirestoreError(err, OperationType.WRITE, `${pathForWrite}/${uniqueId}`);
      } catch (logErr) {
        // Fallback gracefully
      }
    }

    // Try sending email if Google Access Token exists
    try {
      const accessToken = await getAccessToken();
      if (accessToken) {
        const bodyContent = `Dear ${formData.name},

Thank you for your interest in Power-Up Talent, the UK's premier headhunting and executive search specialist for the Electrical Wholesale industry.

As requested, we have compiled the "${activeBrochureTitle}" executive briefing pack.

What's Inside:
1. Sourcing Intelligence: How we map passive executive talent across Edmundson, Rexel, CEF, and leading independents.
2. Sourcing Action plans: Strategies on retaining regional branch hubs and evaluating localised supplier relations.
3. Market benchmarks: Relevant wage, allowance, and growth metrics tailored for operations directors and HR talent.

You can download your high-resolution copy of our services briefing sheet here:
https://poweruptalent.co.uk/brochure

If you have any operational executive search challenges, please reply directly to this email to sync with our specialist consultants.

Discretion & Grit,
The Power-Up Talent Team
London Executive Search Offices`;

        await sendEmail(formData.email, `Power-Up Talent | ${activeBrochureTitle} Request Passed`, bodyContent);
        setHasDispatchedEmail(true);
      }
    } catch (mailError) {
      console.error('Auto-email dispatch skipped (admin not authenticated or expired token):', mailError);
    }
  };

  // Compile steps sequence timer effect
  useEffect(() => {
    if (isCompiling && compileStep < compilationSteps.length - 1) {
      const timer = setTimeout(() => {
        setCompileStep((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else if (isCompiling && compileStep === compilationSteps.length - 1) {
      const successTimer = setTimeout(() => {
        setIsCompiling(false);
        setIsSuccess(true);
      }, 800);
      return () => clearTimeout(successTimer);
    }
  }, [isCompiling, compileStep]);

  return (
    <div className="space-y-16">
      {/* 1. Header Information */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
          Executive Knowledge Hub
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 uppercase tracking-tight leading-none">
          Branded <span className="text-primary italic font-serif lowercase">of-the-art</span> Sector Guides
        </h2>
        <p className="text-slate-500 font-light leading-relaxed text-lg">
          We believe in providing the UK Electrical Wholesale industry with peerless, actionable intelligence. Click on any of our comprehensive executive reports below to review what you will receive.
        </p>
      </div>

      {/* 2. Interactive Catalog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {AVAILABLE_BROCHURES.map((brochure) => {
          const isSelected = selectedBrochureId === brochure.id;
          return (
            <div
              key={brochure.id}
              onClick={() => setSelectedBrochureId(brochure.id)}
              className={`cursor-pointer group relative p-8 md:p-10 rounded-sm border transition-all duration-500 text-left flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? 'bg-navy-deep text-white border-primary shadow-[0_15px_30px_rgba(255,193,7,0.15)] ring-1 ring-primary'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-slate-400 hover:shadow-md'
              }`}
            >
              {/* Corner badge */}
              <div className="absolute top-0 right-0 p-5 flex items-center gap-2">
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  isSelected ? 'bg-primary/25 text-primary border border-primary/30' : 'bg-slate-100 text-slate-500'
                }`}>
                  {brochure.pages}
                </span>
                {isSelected && (
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                )}
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.34em] block ${
                    isSelected ? 'text-primary' : 'text-slate-400'
                  }`}>
                    {brochure.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight uppercase leading-snug max-w-[85%]">
                    {brochure.title}
                  </h3>
                  <p className={`text-xs font-mono lowercase ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                    authored by: {brochure.author}
                  </p>
                </div>

                <p className={`text-sm font-light leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {brochure.description}
                </p>

                {/* Takeaways / Outcomes */}
                <div className="space-y-3 pt-6 border-t border-dashed border-current/10">
                  <h4 className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? 'text-primary' : 'text-slate-900'}`}>
                    Document Highlights & Takeaways:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                    {brochure.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs">
                        <span className={`material-symbols-outlined text-sm mt-0.5 shrink-0 ${isSelected ? 'text-primary' : 'text-slate-400'}`}>
                          keyboard_double_arrow_right
                        </span>
                        <span className={isSelected ? 'text-slate-300' : 'text-slate-600'}>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 flex justify-end">
                <span className={`text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 transition-all group-hover:gap-3 ${
                  isSelected ? 'text-primary' : 'text-slate-950'
                }`}>
                  {isSelected ? 'Selected for Compile' : 'Select Volume'}
                  <span className="material-symbols-outlined text-sm">
                    {isSelected ? 'bookmark_added' : 'add_circle'}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Combined Selection Banner for "All Volumes" */}
      <div 
        onClick={() => setSelectedBrochureId("all")}
        className={`cursor-pointer group p-8 md:p-10 rounded-sm border transition-all duration-500 text-center relative overflow-hidden ${
          selectedBrochureId === "all"
            ? 'bg-navy-deep text-white border-primary shadow-[0_20px_40px_rgba(255,193,7,0.2)] ring-1 ring-primary'
            : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-white hover:border-slate-400'
        }`}
      >
        <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-[0.3em]">
            Highly Recommended
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight">
            Request the Comprehensive <span className="text-primary italic">4-Volume</span> Executive Package
          </h3>
          <p className={`text-sm font-light leading-relaxed ${selectedBrochureId === "all" ? 'text-slate-300' : 'text-slate-500'}`}>
            Includes all current reports, case studies, salary guides, and rollout methodologies bundled into a premium single-compile dispatch dossier.
          </p>

          <div className="pt-2">
            <span className={`text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 transition-all ${
              selectedBrochureId === "all" ? 'text-primary' : 'text-slate-950'
            }`}>
              {selectedBrochureId === "all" ? 'Selected Complete Bundle' : 'Select All 4 Volumes'}
              <span className="material-symbols-outlined text-sm">
                {selectedBrochureId === "all" ? 'folder_special' : 'library_books'}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* 4. Request / Compilation Form */}
      <div id="brochure_form_anchor" className="bg-navy-deep text-white rounded-lg p-10 md:p-16 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden max-w-4xl mx-auto">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,193,7,0.06)_0%,transparent_50%)] pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isCompiling && !isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-10"
            >
              {/* Form Heading Context */}
              <div className="text-center md:text-left space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-6">
                  <div className="space-y-1 text-center md:text-left">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Current Dispatch Selection</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white">
                      {getBrochureName(selectedBrochureId)}
                    </h3>
                  </div>
                  <div className="shrink-0 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm font-mono">
                    {selectedBrochureId === "all" ? "4 Volumes" : "1 Volume Selected"}
                  </div>
                </div>
                <p className="text-slate-400 font-light text-sm max-w-xl">
                  Please provide your corporate details to confirm delivery. Power-Up Talent strictly limits these resources to active electrical wholesale directors, branch executives, and HR leadership.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8 bg-black/40 p-8 md:p-10 rounded-sm border border-white/5 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full name */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rachel Foster"
                      className="w-full bg-background-dark border border-white/10 rounded-sm p-5 text-sm outline-none focus:border-primary transition-all text-white placeholder:text-slate-700"
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                  </div>

                  {/* Corporate email */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Work Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="r.foster@wholesale.co.uk"
                      className="w-full bg-background-dark border border-white/10 rounded-sm p-5 text-sm outline-none focus:border-primary transition-all text-white placeholder:text-slate-700"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Company name and dynamic reference view */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Edmundson Regional"
                      className="w-full bg-background-dark border border-white/10 rounded-sm p-5 text-sm outline-none focus:border-primary transition-all text-white placeholder:text-slate-700"
                    />
                    {formErrors.company && <p className="text-red-500 text-xs mt-1">{formErrors.company}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Distribution Sector</label>
                    <div className="w-full bg-background-dark/50 border border-white/5 rounded-sm p-5 text-sm text-slate-500 font-medium select-none flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg">info</span>
                      UK Electrical Wholesale Specialism
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-white text-navy-deep font-bold py-6 px-10 rounded-sm text-xs uppercase tracking-[0.45em] transition-all flex items-center justify-center gap-4 group"
                >
                  Assemble Selected Sourcing Dossier
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </form>
            </motion.div>
          ) : isCompiling ? (
            <motion.div
              key="compiling"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="flex flex-col items-center justify-center py-16 text-center space-y-10"
            >
              <div className="relative">
                {/* Spinner */}
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl animate-pulse">settings</span>
                </div>
              </div>

              <div className="space-y-4 max-w-xl">
                <h3 className="text-xl font-display font-medium uppercase tracking-[0.2em] text-primary">
                  Assembling Custom Pack
                </h3>
                <p className="text-xs text-slate-500 font-mono tracking-wider h-6 flex items-center justify-center">
                  {compilationSteps[compileStep]}
                </p>
              </div>

              {/* Visual compiling steps indicators */}
              <div className="flex gap-3 justify-center">
                {compilationSteps.map((_, stepIdx) => (
                  <div
                    key={stepIdx}
                    className={`h-1 mx-0.5 rounded-full transition-all duration-300 ${
                      stepIdx < compileStep
                        ? 'bg-primary w-8'
                        : stepIdx === compileStep
                        ? 'bg-primary/60 w-12'
                        : 'bg-white/10 w-4'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-center md:py-8 max-w-2xl mx-auto space-y-10"
            >
              <div className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <span className="material-symbols-outlined text-primary text-5xl">folder_zip</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                  Package Ready <br /><span className="text-primary italic">Compiled.</span>
                </h3>
                <p className="text-slate-400 font-light leading-relaxed max-w-lg mx-auto">
                  Thank you, <strong className="text-white font-medium">{formData.name}</strong>. Your requested corporate profile has been successfully generated for <strong className="text-white font-medium">{formData.company}</strong>.
                </p>
                {hasDispatchedEmail ? (
                  <div className="flex items-center justify-center gap-2.5 py-2 px-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-sm text-xs uppercase tracking-widest max-w-md mx-auto mt-4 font-semibold">
                    <span className="material-symbols-outlined text-lg">mark_email_read</span>
                    Direct high-res delivery dispatched via Gmail to your address
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 tracking-wider">
                    The automated email dispatcher has logged your delivery queue to <span className="text-slate-300">{formData.email}</span>.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://res.cloudinary.com/dtf76y0s7/image/upload/v1772982124/Gemini_Generated_Image_vrx46xvrx46xvrx4_yq2wbd.png"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary hover:bg-white text-navy-deep font-bold py-5 px-10 rounded-sm text-xs uppercase tracking-widest transition-all inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/25"
                >
                  <span className="material-symbols-outlined text-xl">download</span>
                  Download Compiled PDFs
                </a>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: '', email: '', company: '' });
                  }}
                  className="border border-white/20 hover:bg-white/5 text-white font-bold py-5 px-10 rounded-sm text-xs uppercase tracking-widest transition-all"
                >
                  Request Another Copy
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BrochureRequestForm;
