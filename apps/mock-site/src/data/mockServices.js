export const serviceAreas = [
  {
    id: 'universal-crm',
    name: 'Universal CRM',
    tagline: 'One source of truth for every relationship.',
    icon: 'hub',  // Material Symbols Outlined name
    color: '#3B82F6',  // blue
    description: 'Unified accounts, contacts, deals, tasks, and calendar — replacing fragmented legacy systems with a single intelligent workspace.',
    features: ['Accounts CRM', 'Contacts Directory', 'Deals & Opportunities', 'Tasks & Actions', 'Calendar & Schedule'],
  },
  {
    id: 'market-intelligence',
    name: 'Market Intelligence & Prospecting',
    tagline: 'AI-scored opportunities. Zero guesswork.',
    icon: 'query_stats',
    color: '#8B5CF6',  // purple
    description: 'Ten-dimension AI scoring surfaces your highest-value prospects. Companies House integration, director verification, and real-time lead scoring.',
    features: ['Market Intelligence', 'Lead Scraper', 'Job Board Intelligence', 'Prospecting Table', 'Company Intel', 'New Businesses'],
  },
  {
    id: 'recruitment-talent',
    name: 'Recruitment & Talent',
    tagline: 'From shortlist to placement. Streamlined.',
    icon: 'groups',
    color: '#10B981',  // green
    description: 'Purpose-built recruitment pipeline for vertical-specific hiring, with CV parsing, JD matching, and AI-generated job ads.',
    features: ['Pipeline Board', 'CV Parser', 'Job Ad Generator', 'Interview Scheduler', 'JD Matcher'],
  },
  {
    id: 'communication',
    name: 'Communication & Engagement',
    tagline: 'Every channel. One workflow.',
    icon: 'chat',
    color: '#F59E0B',  // amber
    description: 'Compose and send across email, WhatsApp, and SMS from a single interface with smart templates and tracking.',
    features: ['Email Composer', 'WhatsApp Composer', 'SMS Quick Action', 'Outreach Templates'],
  },
  {
    id: 'analytics-coaching',
    name: 'Analytics & Coaching',
    tagline: 'Data-driven performance. AI-powered coaching.',
    icon: 'insights',
    color: '#EF4444',  // red
    description: 'Real-time KPI dashboards, call scoring against rubrics, and an AI sales trainer that runs role-play simulations.',
    features: ['Analytics Dashboard', 'Business Intelligence', 'Sales Coaching', 'TradeHunter Sales Trainer', 'Voice Studio'],
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    tagline: 'Your autonomous AI workforce.',
    icon: 'smart_toy',
    color: '#06B6D4',  // cyan
    description: 'Purpose-built AI agents for sales outreach, email drafting, client support, and natural-language database queries.',
    features: ['Sales Agent', 'Email Agent', 'Client Support Agent', 'Customer Service Agent', 'AI CRM Agent'],
  },
  {
    id: 'ancillary-admin',
    name: 'Ancillary & Admin',
    tagline: 'Everything else your team needs.',
    icon: 'settings',
    color: '#64748B',  // slate
    description: 'Industry news feeds, weather for field consultants, SEO audit tools, and a white-label control panel for multi-tenant branding.',
    features: ['Industry News', 'Weather Forecast', 'SEO/AEO Audit', 'Control Panel'],
  },
];

// Internal documentation: Deprecated/replaced modules
export const DEPRECATED_SERVICES = [
  { name: 'Planning Sites', replacedBy: 'Market Intelligence', reason: 'Superseded by AI-scored opportunity engine' },
  { name: 'Contacts CRM (Legacy)', replacedBy: 'Universal CRM → Contacts Directory', reason: 'Merged into unified CRM' },
  { name: 'Companies CRM (Legacy)', replacedBy: 'Universal CRM → Accounts CRM', reason: 'Merged into unified CRM' },
  { name: 'Marketing Pipeline', replacedBy: 'Universal CRM → Deals & Opportunities', reason: 'Consolidated pipeline management' },
  { name: "Today's Outreach", replacedBy: 'Universal CRM → Tasks & Actions', reason: 'Unified task management' },
  { name: 'BI Dashboard (Duplicate)', replacedBy: 'Analytics & Coaching → Business Intelligence', reason: 'Merged duplicate dashboards' },
  { name: 'Sales Navigator Agent (Standalone)', replacedBy: 'AI Agents → Sales Agent', reason: 'Merged into unified agent suite' },
];
