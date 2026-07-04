import { Milestone, Metric, Testimonial, Service, BlogPost, FAQItem } from './types';
import eliteImg from './src/assets/images/chess_pawns.png';
import strategicImg from './src/assets/images/glowing_person.png';
import growthImg from './src/assets/images/network_nodes.png';
import tradeCounterImg from './src/assets/images/talent_compass.png';
import lightingShowroomImg from './src/assets/images/lighting_showroom.jpg';
import evChargingStationImg from './src/assets/images/ev_charging_station.png';
import smartUtilityMeterImg from './src/assets/images/smart_utility_meter.png';
import commercialSolarPanelsImg from './src/assets/images/commercial_solar_panels.png';
import buildingComplianceDocsImg from './src/assets/images/building_compliance_docs.png';
import fuseBoardImg from './src/assets/images/fuse_board.png';
import fireSecurityImg from './src/assets/images/fire_security.png';
import emergencyExitImg from './src/assets/images/emergency_exit.png';
import warehouseForkliftImg from './src/assets/images/warehouse_forklift.jpg';
import tradeCounterPhotoImg from './src/assets/images/trade_counter.jpg';
import laptopWarehouseImg from './src/assets/images/laptop_warehouse.jpg';
import officeCollaborationImg from './src/assets/images/office_collaboration.jpg';

export const ROLES_PLACED: string[] = [
  "Branch Manager",
  "Regional Director",
  "Product Engineering Lead",
  "Operations Director",
  "Specification Manager",
  "Area Sales Manager",
  "Procurement Director",
  "Estimating Engineer",
  "Commercial Director",
  "Contracts Manager",
  "Electrical Design Engineer",
  "Group Sales Director",
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Client Brief",
    description: "We take a deep-dive brief to understand your exact operational needs, culture, and the commercial outcomes you require from the hire.",
    icon: "description"
  },
  {
    step: "02",
    title: "Market Mapping",
    description: "Our AI-driven intelligence platform maps the entire UK passive talent pool — identifying the right people currently delivering results for your competitors.",
    icon: "hub"
  },
  {
    step: "03",
    title: "Confidential Approach",
    description: "We make discreet, personal contact with target candidates. No job boards. No adverts. Absolute confidentiality for both parties throughout.",
    icon: "person_search"
  },
  {
    step: "04",
    title: "Technical Vetting",
    description: "Every candidate is rigorously qualified for technical literacy, sector-specific competence, and commercial acumen across manufacturing, distribution, design, and installation.",
    icon: "verified"
  },
  {
    step: "05",
    title: "Placement & Support",
    description: "We manage the offer process and provide post-placement support, including career development resources to ensure long-term success for all parties.",
    icon: "handshake"
  }
];

export const GUARANTEES = [
  {
    icon: "lock",
    title: "Total Confidentiality",
    description: "Strict NDAs protect both client and candidate at every stage. We never disclose who we are briefed by."
  },
  {
    icon: "schedule",
    title: "28-Day Placement",
    description: "Our average time from brief to shortlist is 28 days. We move quickly because opportunity in wholesale doesn't wait."
  },
  {
    icon: "refresh",
    title: "Replacement Guarantee",
    description: "If a placed candidate leaves within the agreed guarantee period, we re-recruit at no additional cost."
  },
  {
    icon: "workspace_premium",
    title: "Top 1% Only",
    description: "We only present candidates who meet our rigorous vetting criteria — those who are already delivering exceptional results."
  }
];

export const METRICS: Metric[] = [
  { value: "25,000+", label: "Professionals market-mapped" },
  { value: "98%", label: "12-month placement retention" },
  { value: "30+", label: "Years combined sector experience" },
  { value: "28", label: "Average days to shortlist" }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2018",
    title: "Operational Origins",
    description: "Founded on decades of first-hand experience working across UK electrical distribution, manufacturing, and contracting operations.",
    icon: "engineering"
  },
  {
    year: "2020",
    title: "Strategic Market Mapping",
    description: "Built the UK's most comprehensive passive talent database — 25,000+ electrical sector professionals mapped and profiled.",
    icon: "hub"
  },
  {
    year: "2023",
    title: "AI-Driven Sourcing",
    description: "Integrated proprietary AI sourcing tools to identify passive high-performers across manufacturing, specification, and contracting.",
    icon: "data_object"
  },
  {
    year: "2024",
    title: "National Expansion",
    description: "Became the trusted talent partner for major manufacturers, national distributors, specifiers, and electrical contractors across the UK.",
    icon: "partner_exchange"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Thomas Wilson",
    role: "Regional Director",
    company: "National Electrical Distributor",
    quote: "Power-Up Talent don't just fill vacancies — they provide market intelligence that allows us to outmanoeuvre the competition. They found us a Regional Director we didn't know existed."
  },
  {
    name: "Michael Roberts",
    role: "Managing Director",
    company: "Leading OEM Electrical Manufacturer",
    quote: "Their grasp of operational alignment and manufacturing supply chains ensured our new facility launch was staffed with a high-performing leadership team from day one."
  },
  {
    name: "Sarah Jenkins",
    role: "Design Practice Lead",
    company: "UK Specification & Lighting Consultancy",
    quote: "The only headhunters I've worked with who actually understand the technical requirements of specification and engineering design. They speak our language."
  },
  {
    name: "David Hargreaves",
    role: "Operations Director",
    company: "M&E Electrical Contracting Group",
    quote: "We'd used three other agencies and got nowhere. Power-Up placed a calibre of Project Contracts Manager we didn't think existed in our region — within four weeks."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which sectors of the electrical industry do you cover?",
    answer: "We recruit across the entire UK electrical sector. Our core expertise spans Manufacturing (OEMs, product innovators), Distribution (wholesalers, buying groups), Design & Specification (consultancies, lighting design houses), and Installation & Contracting (M&E contracting firms)."
  },
  {
    question: "How do you source passive talent?",
    answer: "We utilise AI-driven market mapping and direct outreach to identify high-performing talent who aren't actively searching for jobs. Our approach is consultative and focused on finding the top 1% of the market."
  },
  {
    question: "Can you help with facility launches or project team scale-ups?",
    answer: "Yes, our 'Growth Partnerships' service is specifically designed for businesses undergoing rapid scale, factory expansions, project team mobilisations, or national restructuring across the UK."
  },
  {
    question: "What is your approach to candidate discretion?",
    answer: "Absolute discretion is at the core of our methodology. We understand the sensitivity of executive searches and ensure that both client and candidate confidentiality is maintained throughout the process."
  }
];

export const SERVICES: Service[] = [
  {
    id: "elite-recruitment",
    name: "Headhunters",
    icon: "person_search",
    tagline: "Headhunting passive high-performers.",
    description: "Our Headhunters pillar is built for businesses that need the strongest people in the market, not just the most available. We leverage long-standing relationships across the UK electrical supply chain — from manufacturing and distribution to specification and installation — and proactively headhunt proven performers with the track record, local reputation, and sector credibility.",
    operationalScope: "Our Headhunters pillar is built for businesses that need the strongest people in the market, not just the most available. We leverage long-standing relationships across the UK electrical supply chain — from manufacturing and distribution to specification and installation — and proactively headhunt proven performers with the track record, local reputation, and sector credibility.",
    methodologyInsight: "We do not rely on job board traffic or generic keyword searches. We map the target market, identify who is genuinely performing in comparable environments, and discreetly approach high-calibre candidates who are rarely active but often open to the right opportunity.",
    features: [
      "Confidential direct outreach",
      "Passive talent mapping",
      "Reputation-led shortlisting",
      "Technical and sector vetting"
    ],
    image: eliteImg
  },
  {
    id: "strategic-recruitment",
    name: "Strategic Recruitment",
    icon: "leaderboard",
    tagline: "Local Market Mapping & Competitor Target Recruitment.",
    description: "Our Strategic Recruitment pillar is designed for businesses that need more than recruitment delivery; they need a hiring plan built around growth, market conditions, and operational pressure points. We work with you to understand your business, define the real brief behind the vacancy, and design a tailored hiring strategy that helps you secure the best talent across every level of your operation.",
    operationalScope: "Our Strategic Recruitment pillar is designed for businesses that need more than recruitment delivery; they need a hiring plan built around growth, market conditions, and operational pressure points. We work with you to understand your business, define the real brief behind the vacancy, and design a tailored hiring strategy that helps you secure the best talent across every level of your operation.",
    methodologyInsight: "We co-design the search with you, map the target talent landscape, analyse competitor teams, and identify where the strongest candidates are already delivering results. Unlike executive-only search firms, we apply this elite, insight-led model across all role tiers, from senior leadership, manufacturing operations, and design engineering through to project management, estimating, and sales positions.",
    features: [
      "Target market and competitor mapping",
      "Co-designed hiring strategy",
      "All-tier search capability",
      "Insight-led qualification and shortlist design"
    ],
    image: strategicImg
  },
  {
    id: "growth-partnerships",
    name: "Growth Partnerships",
    icon: "handshake",
    tagline: "Recruitment Process Outsourcing (RPO) Models.",
    description: "Our Growth Partnerships pillar is for businesses that need a dedicated recruitment function embedded into their operation. We act as an extension of your internal team, managing all or part of your permanent hiring across attraction, sourcing, screening, interview coordination, offer management, and onboarding.",
    operationalScope: "Our Growth Partnerships pillar is for businesses that need a dedicated recruitment function embedded into their operation. We act as an extension of your internal team, managing all or part of your permanent hiring across attraction, sourcing, screening, interview coordination, offer management, and onboarding.",
    methodologyInsight: "This model is ideal for facility expansions, project team scale-ups, branch rollouts, restructuring programmes, or businesses that need consistent recruitment delivery without building a full in-house talent team. We can operate as a visible extension of your brand, giving you a seamless outsourced recruitment partner that reflects your standards, messaging, and market identity.",
    features: [
      "End-to-end recruitment delivery",
      "Embedded recruitment partner model",
      "White-label or branded delivery",
      "Scale support for growth, rollouts, and change"
    ],
    image: growthImg
  }
];

export const INSIGHTS: BlogPost[] = [
  {
    id: "why-stock-availability-is-now-a-margin-issue",
    title: "Why Stock Availability Is Now a Margin Issue in Electrical Wholesale",
    excerpt: "Stock availability affects more than service levels — it directly impacts margin, customer loyalty and branch performance in electrical wholesale.",
    content: `In electrical wholesale, stock availability has always mattered, but the stakes are now much higher. Customers expect fast turnaround, accurate availability and reliable delivery, and if a branch cannot provide those, buyers will often move quickly to a competitor. That makes stock management not just an operational issue, but a commercial one.

Margin pressure is often linked to stock decisions that seem minor in the moment. Over-ordering ties up cash and creates markdown risk, while under-ordering leads to lost sales and frustrated customers. The most effective wholesalers are increasingly using data to understand movement by branch, category and seasonality, rather than relying on instinct alone.

Availability also influences customer perception. A wholesaler that consistently has the right product in the right place becomes the default supplier, even when pricing is not the lowest. That loyalty is especially important in a market where contractors are under pressure and do not have time to chase multiple suppliers for one order.

The challenge is that stock strategy is no longer about depth alone. It is about range discipline, supplier reliability, lead times and understanding what local customers actually buy. Branches that get this right protect margin while improving service, which is a difficult balance but a powerful competitive advantage.`,
    date: "June 21, 2026",
    author: "Sector Specialist",
    category: "Operational Excellence",
    image: warehouseForkliftImg,
    readTime: "4 min read"
  },
  {
    id: "why-the-trade-counter-still-matters",
    title: "Why the Trade Counter Still Matters in Electrical Wholesale",
    excerpt: "The trade counter remains a critical part of electrical wholesale, even as digital ordering and click-and-collect continue to grow.",
    content: `The trade counter is still one of the most important touchpoints in electrical wholesale. Even as more ordering moves online, many customers still want face-to-face support when they are under pressure, comparing products, checking availability or solving a last-minute issue on site. The trade counter is where service quality becomes visible.

What has changed is the expectation placed on counter staff. They are no longer just taking orders; they are expected to recommend alternatives, manage urgency and know enough about product applications to guide the customer correctly. In many branches, the counter is the difference between a one-off transaction and a long-term relationship.

Digital ordering has not reduced the importance of the counter — it has raised the bar. Customers now expect faster service, cleaner processes and better product knowledge, because they can already see stock and pricing online before walking in. Branches that combine speed with expertise tend to win more repeat business.

The trade counter also acts as a listening post for the whole business. It provides direct feedback on customer demand, competitor behaviour and local market trends. Wholesalers that treat the counter as a strategic asset, rather than just a transactional function, often gain a sharper view of what is happening in the market.`,
    date: "June 21, 2026",
    author: "Sector Specialist",
    category: "Operational Excellence",
    image: tradeCounterPhotoImg,
    readTime: "4 min read"
  },
  {
    id: "product-knowledge-remains-a-competitive-advantage",
    title: "Product Knowledge Remains a Competitive Advantage in Electrical Wholesale",
    excerpt: "In a crowded market, deep product knowledge helps wholesalers win trust, protect margin and support customers better.",
    content: `In a sector with thousands of product lines, product knowledge remains a major commercial advantage. Customers do not only want a supplier; they want someone who can help them choose the right solution quickly, confidently and without unnecessary delay. That is especially true when projects are technically complex or time-sensitive.

Strong product knowledge allows wholesalers to sell value rather than just price. A well-informed counter or sales person can recommend a better alternative, identify compatibility issues early and reduce the risk of returns or site problems. That creates trust, which is often more valuable than a slightly lower price from a competitor.

The pace of change in the industry also makes knowledge more important. New categories such as EV charging, smart controls and energy-efficient lighting continue to evolve, and customers increasingly expect wholesalers to understand them. Businesses that train their teams properly are better equipped to support this shift.

There is also a retention angle. Customers who feel they are dealing with knowledgeable people are more likely to stay loyal, even in difficult trading conditions. In electrical wholesale, expertise is not just a support function — it is part of the sales proposition.`,
    date: "June 21, 2026",
    author: "Sector Specialist",
    category: "Talent Strategy",
    image: laptopWarehouseImg,
    readTime: "4 min read"
  },
  {
    id: "how-local-competition-shapes-branch-performance",
    title: "How Local Competition Shapes Electrical Wholesale Branch Performance",
    excerpt: "Branch performance in electrical wholesale is heavily influenced by local competition, customer behaviour and regional trading patterns.",
    content: `Electrical wholesale is a local game as much as a national one. Two branches within the same group can perform very differently depending on the strength of nearby competitors, the quality of local relationships and the type of work happening in the area. Regional dynamics matter far more than many outside the industry realise.

Some locations are driven by strong contractor networks, active housing development or commercial refurbishment activity. Others may be more dependent on industrial work, public sector projects or a small number of large accounts. That means one-size-fits-all strategies rarely work well at branch level.

Local competitors also influence behaviour in subtle ways. If a rival branch is known for speed, stock depth or strong account management, customers will quickly notice. Once those expectations are set in a local market, branches have to work harder to win back share and defend loyalty.

Understanding regional behaviour helps explain why branch managers matter so much. They are not just managing a location; they are interpreting a local market, shaping relationships and reacting to competitor moves in real time. In a market like electrical wholesale, local execution often matters more than corporate messaging.`,
    date: "June 21, 2026",
    author: "Sector Specialist",
    category: "Market Trends",
    image: officeCollaborationImg,
    readTime: "4 min read"
  },
  {
    id: "how-customer-expectations-are-changing",
    title: "How Customer Expectations Are Changing in Electrical Wholesale",
    excerpt: "Electrical wholesale customers now expect faster service, more visibility and better communication across the entire buying journey.",
    content: `Customer expectations in electrical wholesale have shifted significantly. Buyers now want faster responses, clearer product visibility, better communication and fewer mistakes. That applies whether they are collecting from the trade counter, ordering online or calling for support on a live job.

The modern customer experience is shaped by comparison with other sectors. Contractors and installers are used to real-time updates, next-day delivery and easy digital ordering in many parts of their working lives. When a wholesaler falls short on those basics, it becomes much easier for the customer to look elsewhere.

Communication is a major part of this shift. Customers value branches that confirm stock quickly, suggest alternatives without delay and follow through reliably. In many cases, the quality of communication matters just as much as the price itself, because missed information can cause project delays and frustration on site.

This change is pushing wholesalers to become more organised and more service-led. Businesses that invest in customer experience, branch responsiveness and consistent processes are better placed to keep accounts long term. In a market where trust and convenience drive repeat business, service is no longer a soft skill — it is a commercial requirement.`,
    date: "June 21, 2026",
    author: "Sector Specialist",
    category: "Market Trends",
    image: evChargingStationImg,
    readTime: "4 min read"
  },
  {
    id: "digital-transformation-uk-electrical-wholesale",
    title: "Digital Transformation in UK Electrical Wholesale",
    excerpt: "The UK electrical wholesale sector is in the middle of a fundamental digital shift, with technology reshaping everything from stock control to customer experience.",
    content: `The UK electrical wholesale sector is in the middle of a fundamental digital shift, with technology reshaping everything from stock control to customer experience. Estimates put the value of the electrical wholesale market at around £4.28 billion in 2024, and a large majority of wholesalers report that modern digital tools have materially improved how they operate. This is not just about installing a new ERP; it is about redesigning processes around data, automation and omnichannel service.

Recent surveys suggest that roughly 87% of British electrical wholesalers feel they work more effectively after adopting new technology, highlighting the scale of transformation already under way. Early adopters report tangible benefits such as lower operating costs, faster reaction to market changes and better visibility of margins across branches. As customers become used to online ordering, real‑time stock data and click‑and‑collect from other sectors, trade counters that still rely purely on manual workflows risk looking increasingly dated.

Digital change is also about competition. Market analysis shows that broader UK electricals retail has been through a period of weak growth, with small declines in 2023 and only marginal improvement forecast for 2024 before a stronger upswing from 2025 onwards. In that context, wholesalers that use data to optimise pricing, rationalise stock and intelligently target customers are better positioned to defend margin when demand is soft and scale rapidly when it recovers. Over time, digital maturity becomes a structural advantage rather than a side project.

Finally, digital tools are starting to intersect with workforce challenges. Automation of routine tasks creates headroom for branch and sales teams to focus on higher‑value work such as solution selling and project support. At the same time, new systems demand staff who are comfortable with CRM platforms, analytics dashboards and online customer interaction. This shift means wholesalers need to think as hard about digital skills as they do about product knowledge when recruiting and developing their people.`,
    date: "June 16, 2026",
    author: "Sector Specialist",
    category: "Operational Excellence",
    image: fuseBoardImg,
    readTime: "5 min read"
  },
  {
    id: "skills-shortages-apprenticeships-talent-pipeline",
    title: "Skills Shortages and Apprenticeships: The Pressure on the Talent Pipeline",
    excerpt: "A persistent shortage of skilled labour is now the single biggest constraint on growth across the UK electrotechnical and building services sector, and that pressure flows directly into electrical wholesale.",
    content: `A persistent shortage of skilled labour is now the single biggest constraint on growth across the UK electrotechnical and building services sector, and that pressure flows directly into electrical wholesale. Industry surveys show that for more than 12 consecutive quarters, the lack of qualified electricians has been cited as the top barrier to expansion, with over a third of firms pointing to this issue. When contractors cannot recruit, their order books slow down—and wholesalers feel the impact through reduced demand, tougher price competition and more volatile volumes.

The skills gap is not limited to fully qualified tradespeople. Research by one leading certification body found that over half of electrical businesses that tried to recruit technical staff in 2024 described the process as “very difficult”. Administrative complexity and the challenge of sourcing suitable apprentices were repeatedly flagged as obstacles, alongside concerns about training costs and the readiness of young people entering the sector. These frictions delay hiring, increase workloads for existing staff and encourage some firms to defer growth plans.

Apprenticeships are widely viewed as the most effective way to rebuild the talent pipeline, yet the numbers are still falling short. Analysis from training providers suggests the industry needs around 10,500 new electrical apprentices each year simply to maintain the workforce, but recent data indicates only about 7,540 starts annually, leaving a significant shortfall. Other studies highlight that fewer than 10% of learners completing classroom‑based electrical courses progress into apprenticeships within a year, leaving many interested candidates unable to find a route into work.

Parallel research on engineering construction shows similar patterns, with surveys identifying double‑digit percentage gaps between current staffing and required tradespeople, and particularly acute shortages in electricians. Commentators warn that if current trends continue, the overall number of electricians could fall by more than a quarter over two decades, just as demand for electrification and infrastructure upgrades accelerates. For wholesalers, this means planning for a world where skilled labour is structurally scarce: supporting apprenticeships, investing in training, and designing roles that make the best use of limited expert time.`,
    date: "June 17, 2026",
    author: "Sector Specialist",
    category: "Talent Strategy",
    image: fireSecurityImg,
    readTime: "6 min read"
  },
  {
    id: "energy-efficiency-lighting-net-zero-demand",
    title: "Energy Efficiency, Lighting and Net‑Zero: How Demand Is Changing",
    excerpt: "Energy efficiency and sustainability have moved from 'nice to have' topics to central drivers of demand in electrical wholesale, particularly in lighting and controls.",
    content: `Energy efficiency and sustainability have moved from “nice to have” topics to central drivers of demand in electrical wholesale, particularly in lighting and controls. Trade commentary notes that lighting remains one of the largest areas of interest for readers of specialist electrical wholesale publications, reflecting both regulatory change and commercial opportunity. As businesses and local authorities pursue long‑term energy security and carbon reduction, large‑scale lighting upgrades and retrofit projects are becoming more common.

Commercial and public sector clients are increasingly prioritising high‑efficiency LED solutions for offices, warehouses and external spaces. Modern luminaires often offer lifetimes exceeding 50,000 hours, reducing maintenance cycles as well as energy consumption. This shift changes the sales conversation at the trade counter: instead of focusing purely on unit price, customers and wholesalers are talking about total cost of ownership, payback periods and compliance with building and environmental standards.

Sustainability is also reshaping how stock and obsolete equipment are managed. Industry features highlight initiatives such as reuse hubs for lighting and IT equipment, designed to help businesses avoid sending surplus items to landfill by refurbishing and returning them to productive use. These programmes support corporate ESG goals while opening new value streams for distributors who can facilitate repair, reuse and recycling.

At the same time, product trends in wiring accessories, controls and related categories are reflecting growing expectations for smarter, more integrated solutions. Intelligent dimming, presence detection, and building management interfaces are becoming standard in many commercial schemes, requiring wholesalers to hold deeper technical knowledge and support customers in navigating complex product ranges. As the UK moves further towards net‑zero, the wholesalers that align their ranges, training and advice with these long‑term efficiency trends are likely to see stronger, more resilient demand.`,
    date: "June 18, 2026",
    author: "Sector Specialist",
    category: "Compliance",
    image: emergencyExitImg,
    readTime: "5 min read"
  },
  {
    id: "careers-progression-electrical-wholesaling",
    title: "Careers and Progression in Electrical Wholesaling",
    excerpt: "Electrical wholesaling is often overlooked as a career destination, yet the industry offers a broad spectrum of roles and clear progression paths across the electrotechnical supply chain.",
    content: `Electrical wholesaling is often overlooked as a career destination, yet the industry offers a broad spectrum of roles and clear progression paths across the electrotechnical supply chain. The Electrical Distributors’ Association (EDA), founded in 1914, serves as the main trade body for wholesale distributors of electrotechnical products in the UK and actively promotes the sector as a place to build a long‑term career. Its “Power It Up” campaigns and related materials are used by members and partners to explain how the supply chain works and what opportunities exist.

Within wholesaling itself, roles span purchasing and procurement, stock and logistics, data and financial management, sales, marketing, merchandising and HR. Many people enter through warehouse, driver or counter positions and progress into internal and external sales, branch management and regional leadership over time. Because wholesalers sit at the intersection of manufacturers and contractors, staff also gain broad exposure to products, installation practices and project delivery, which can later translate into moves into manufacturing, contracting or technical support roles.

Training and professional development infrastructure is well established. The EDA runs product knowledge training programmes specifically targeted at closing skills gaps across the wholesale sector, and this work has been recognised with national awards for its impact. Apprenticeship schemes tailored to electrical distribution are offered through partner training agencies, combining on‑the‑job learning with structured education designed for the industry’s needs. Broader electrotechnical training frameworks, from college qualifications to advanced power network apprenticeships, also underpin career routes into and through the wider electricity sector.

For young people considering where to start, guides produced by the EDA and related organisations explain how electrical wholesaling fits into the broader electrotechnical ecosystem and the types of careers available. As the sector plays a larger role in supporting electrification, energy efficiency and digital infrastructure, the long‑term demand for skilled people in wholesaling and distribution is likely to remain strong. That combination of stability, variety and progression makes the industry an increasingly attractive option for those who want to blend commercial work with technical content.`,
    date: "June 19, 2026",
    author: "Sector Specialist",
    category: "Talent Strategy",
    image: tradeCounterImg,
    readTime: "5 min read"
  },
  {
    id: "market-outlook-2024-2028-navigating-landscape",
    title: "Market Outlook 2024–2028: Navigating a Tough but Improving Landscape",
    excerpt: "The broader UK electricals market has been through a challenging period, shaped by cost‑of‑living pressures, weak housing activity and cautious consumer spending.",
    content: `The broader UK electricals market has been through a challenging period, shaped by cost‑of‑living pressures, weak housing activity and cautious consumer spending. Analysts report that the sector saw declines over two consecutive years, with a small 0.2% contraction in 2023 as households postponed non‑essential big‑ticket purchases. Forecasts for 2024 point to only modest growth of around 0.4%, with more meaningful expansion expected from 2025 onwards as confidence gradually returns.

Electrical wholesalers have experienced these dynamics from both sides: squeezed customers facing higher living costs and contractors struggling with their own input inflation and labour shortages. Commentators note that domestic buyers have tended to delay lighting and improvement projects, while commercial and public sector clients push ahead with energy‑efficiency upgrades as part of longer‑term cost‑control and sustainability strategies. This divergence means wholesalers with a strong commercial project footprint may be faring better than those heavily exposed to purely domestic spend.

At the same time, the sector is being asked to support ambitious national goals around net‑zero, electrification and infrastructure renewal, which implies robust medium‑term demand for electrical products and services. Surveys of electrotechnical and building engineering firms show that order books are often healthy but constrained by the availability of skilled labour and by volatile material pricing. These factors complicate planning for wholesalers, who must manage stock risk while maintaining service levels into projects that may shift timelines or specifications at short notice.

Looking out to 2028, market reports emphasise that while volume growth may be modest in some segments, value growth is likely to be supported by higher‑specification products, digital solutions and sustainability‑driven upgrades. Wholesalers that invest in digital capabilities, specialist product knowledge and strong relationships across contractors, manufacturers and clients are better placed to capture this value. In an environment where structural skills shortages and macroeconomic uncertainty coexist with long‑term electrification trends, the ability to interpret market signals and adjust quickly becomes a core competitive skill for the entire industry.`,
    date: "June 20, 2026",
    author: "Sector Specialist",
    category: "Market Trends",
    image: buildingComplianceDocsImg,
    readTime: "6 min read"
  }
];
