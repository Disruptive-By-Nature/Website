import { Milestone, Metric, Testimonial, Service, BlogPost } from './types';

export const METRICS: Metric[] = [
  { value: "25,000+", label: "Market-mapped professionals" },
  { value: "98%", label: "Placement retention rate" },
  { value: "30+ Years", label: "Combined sector leadership" },
  { value: "28 Days", label: "Average placement" }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2018",
    title: "Operational Origins",
    description: "Built on deep-rooted experience within UK electrical wholesale operations.",
    icon: "engineering"
  },
  {
    year: "2020",
    title: "Strategic Market Mapping",
    description: "Establishing the UK's most comprehensive database of passive industry talent.",
    icon: "map"
  },
  {
    year: "2024",
    title: "Consultancy Evolution",
    description: "Transitioning to a full-service strategic talent partner for national wholesalers.",
    icon: "partner_exchange"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Thomas Wilson",
    role: "Regional Director",
    quote: "Power-Up Talent doesn't just fill vacancies; they provide market intelligence that allows us to outmanoeuvre the competition."
  },
  {
    name: "Michael Roberts",
    role: "Managing Director",
    quote: "Their grasp of operational alignment ensured our new branch launch was staffed with a high-performing leadership team from day one."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    quote: "The only headhunters I've worked with who actually understand the technical requirements of the trade counter environment."
  }
];

export const SERVICES: Service[] = [
  {
    id: "elite-recruitment",
    name: "Elite Executive Search",
    tagline: "Headhunting passive high-performers.",
    description: "Our core headhunting service. We specialise in identifying and securing the top 1% of passive talent currently delivering results for your competitors, using precise, AI-driven market mapping.",
    features: [
      "Confidential direct outreach",
      "Passive talent mapping",
      "Technical DNA vetting",
      "Absolute discretion protocols"
    ],
    image: "/images/electrical_executive_1778586578289.png"
  },
  {
    id: "strategic-recruitment",
    name: "Strategic Leadership Recruitment",
    tagline: "Aligning leaders with commercial goals.",
    description: "Executive search specifically for Branch Managers and Regional Directors who possess the commercial acumen to drive your bottom line, protect margins, and manage complex trade counter networks.",
    features: [
      "Executive search & selection",
      "Succession planning",
      "Operational leadership alignment",
      "Competency-based interviewing"
    ],
    image: "/images/electrical_trade_counter_1778586696903.png"
  },
  {
    id: "growth-partnerships",
    name: "Growth & Scale Partnerships",
    tagline: "Scaling with operational intelligence.",
    description: "Long-term collaboration for wholesalers undergoing rapid scale, branch rollouts, or national restructuring across major UK electrical and industrial logistics hubs.",
    features: [
      "Branch launch talent acquisition",
      "Local market intelligence",
      "Multi-hire management",
      "Strategic retention modelling"
    ],
    image: "/images/electrical_warehouse_hero_1778586599378.png"
  }
];

export const INSIGHTS: BlogPost[] = [
  {
    id: "uk-electrical-wholesale-trends-2026",
    title: "UK Electrical Wholesale: 5 Trends Shaping 2026",
    excerpt: "From digital transformation to sustainable supply chains, here's what's driving the UK electrical wholesale market this year.",
    content: `The UK electrical wholesale sector is undergoing a period of unprecedented change. As we move further into 2026, several key trends are emerging that will define the winners and losers in this competitive landscape.

### 1. Digital Transformation at the Counter
The traditional trade counter is evolving. Wholesalers are increasingly adopting omnichannel strategies, blending physical expertise with seamless digital ordering and inventory management.

### 2. Sustainability and the Circular Economy
ESG (Environmental, Social, and Governance) is no longer a buzzword. Wholesalers are being pressured to provide more sustainable product options and demonstrate greener operations.

### 3. The Rise of Smart Infrastructure
Demand for EV charging, smart home tech, and energy-efficient industrial solutions is skyrocketing. This requires a more technically literate workforce than ever before.

### 4. Supply Chain Resilience
After years of volatility, wholesalers are investing in more robust, data-driven supply chain models to ensure availability and protect margins.

### 5. Talent as a Competitive Advantage
In a tight labour market, the ability to attract, train, and retain top-tier talent is the ultimate differentiator.`,
    date: "March 15, 2026",
    author: "James Power",
    category: "Market Trends",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png",
    readTime: "6 min read"
  },
  {
    id: "attracting-top-performers-outside-industry",
    title: "Why You Should Hire Outside the Electrical Industry",
    excerpt: "Discover how bringing in top performers from other sectors can inject fresh perspective and drive innovation in your branch network.",
    content: `The electrical wholesale industry has a long tradition of promoting from within. While sector experience is invaluable, there is a growing case for looking outside the industry to find the next generation of leaders.

### Why hire from outside?

*   **Fresh Perspectives:** Candidates from high-pressure retail or logistics backgrounds often bring new ideas for operational efficiency and customer service.
*   **Transferable Skills:** Leadership, commercial acumen, and strategic thinking are universal. A top performer in one sector is likely to be a top performer in another.
*   **Bridging the Skills Gap:** As the industry becomes more technical and digital, skills from the tech or data sectors are becoming increasingly relevant.

At Power-Up Talent, we specialise in identifying these high-performers and supporting them with the industry-specific training they need to succeed.`,
    date: "February 28, 2026",
    author: "Sarah Jenkins",
    category: "Talent Strategy",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916341/530b2ac7-e334-4b7e-b4b4-6c3c996cda80_x6fcac.jpg",
    readTime: "4 min read"
  },
  {
    id: "margin-protection-in-volatile-market",
    title: "Protecting Your Margins: A Guide for Branch Managers",
    excerpt: "In a market defined by price volatility, how can branch managers protect their bottom line without sacrificing customer loyalty?",
    content: `Margin protection is the lifeblood of any successful electrical wholesaler. However, in a market where material costs can fluctuate daily, maintaining healthy margins is easier said than done.

### Key strategies for margin protection:

*   **Value-Added Selling:** Move away from price-based competition by focusing on technical expertise, availability, and reliability.
*   **Inventory Optimisation:** Use data to ensure you're stocking the right products at the right time, reducing the need for costly emergency orders.
*   **Customer Segmentation:** Understand which customers are truly profitable and tailor your service levels accordingly.
*   **Staff Training:** Ensure your team understands the commercial impact of discounting and has the confidence to sell on value.

The best branch managers are those who combine technical grit with a sharp commercial mind.`,
    date: "January 12, 2026",
    author: "Michael Roberts",
    category: "Operational Excellence",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg",
    readTime: "5 min read"
  },
  {
    id: "the-future-of-branch-management",
    title: "The Future of Branch Management: Leadership in 2026",
    excerpt: "What does it take to lead a successful electrical wholesale branch in today's fast-paced environment?",
    content: `Branch management is no longer just about managing inventory and staff. It's about leading a commercial hub that delivers value to customers and profitability to the business.

### The Evolving Role of the Branch Manager

The modern branch manager is a hybrid leader, combining technical knowledge with commercial acumen and digital literacy.

### Key Leadership Traits for 2026

*   **Data-Driven Decision Making:** Using real-time data to manage inventory, pricing, and customer service.
*   **People Development:** Creating a culture of continuous learning and development.
*   **Customer-Centricity:** Focusing on delivering exceptional customer experiences, not just selling products.

Leading a branch in 2026 requires a proactive, strategic approach to management.`,
    date: "March 5, 2026",
    author: "Michael Roberts",
    category: "Leadership",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png",
    readTime: "5 min read"
  },
  {
    id: "navigating-the-skills-shortage",
    title: "Navigating the Skills Shortage in Electrical Wholesale",
    excerpt: "How wholesalers can overcome the industry-wide skills shortage and build a resilient workforce.",
    content: `The skills shortage is one of the biggest challenges facing the electrical wholesale industry. Finding and retaining talent with the right technical and commercial skills is increasingly difficult.

### Strategies to Overcome the Shortage

*   **Invest in Training:** Develop your own talent through structured training and development programmes.
*   **Broaden Your Search:** Look outside the industry for candidates with transferable skills.
*   **Improve Your Employer Brand:** Make your company an attractive place to work by offering competitive benefits, clear career progression, and a positive culture.

Building a resilient workforce requires a long-term, strategic approach to talent acquisition and development.`,
    date: "February 15, 2026",
    author: "James Power",
    category: "Talent Strategy",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916348/713aeba2-3f10-4512-95b7-defca1b268a2_vggzr3.jpg",
    readTime: "6 min read"
  },
  {
    id: "impact-of-smart-metering",
    title: "The Impact of Smart Metering on UK Wholesale",
    excerpt: "How the rollout of smart meters is creating new opportunities for electrical wholesalers.",
    content: `The UK's smart meter rollout is more than just a utility upgrade; it's a significant driver of demand for electrical components and expertise.

### Opportunities for Wholesalers:

*   **Increased Demand for Components:** Smart meters require a range of associated products, from cabling to installation tools.
*   **Technical Expertise:** Wholesalers who can provide technical advice on smart meter integration are becoming essential partners for contractors.
*   **New Revenue Streams:** Smart metering opens doors to broader energy management solutions.

Wholesalers that position themselves as experts in smart infrastructure will be well-placed to capitalise on this ongoing trend.`,
    date: "March 10, 2026",
    author: "James Power",
    category: "Market Trends",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916341/530b2ac7-e334-4b7e-b4b4-6c3c996cda80_x6fcac.jpg",
    readTime: "4 min read"
  },
  {
    id: "navigating-2026-building-regulations",
    title: "Navigating the 2026 UK Building Regulations",
    excerpt: "A guide to understanding the latest changes in UK building regulations and their impact on electrical wholesale.",
    content: `Keeping up with building regulations is a constant challenge for the electrical industry. The 2026 updates bring new requirements for energy efficiency and safety.

### Key Areas of Impact:

*   **Energy Efficiency Standards:** New buildings must meet stricter energy performance criteria, driving demand for high-efficiency components.
*   **Safety Requirements:** Updated regulations focus on fire safety and electrical installation standards.
*   **Compliance Support:** Wholesalers who can help contractors navigate these regulations provide immense value.

Staying informed and providing compliant product solutions is key to supporting your customers through these regulatory shifts.`,
    date: "March 8, 2026",
    author: "Sarah Jenkins",
    category: "Compliance",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png",
    readTime: "5 min read"
  },
  {
    id: "ai-in-inventory-management",
    title: "The Role of AI in Inventory Management",
    excerpt: "How artificial intelligence is revolutionising inventory management for electrical wholesalers.",
    content: `Inventory management is a balancing act. Too much stock ties up capital; too little leads to lost sales. AI is changing the game.

### How AI is Transforming Inventory:

*   **Predictive Analytics:** AI models analyse historical data and market trends to forecast demand with high accuracy.
*   **Automated Reordering:** AI systems can trigger reorders automatically, ensuring stock levels are always optimal.
*   **Optimised Stock Placement:** AI helps wholesalers place stock in the right branches to meet local demand efficiently.

Embracing AI in inventory management is essential for wholesalers looking to improve efficiency and profitability.`,
    date: "March 1, 2026",
    author: "Michael Roberts",
    category: "Operational Excellence",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg",
    readTime: "6 min read"
  },
  {
    id: "attracting-gen-z-to-electrical-trade",
    title: "Attracting Gen Z to the Electrical Trade",
    excerpt: "How to make the electrical wholesale industry an appealing career choice for the next generation.",
    content: `Attracting Gen Z talent requires a different approach. They value purpose, technology, and clear career progression.

### Strategies for Gen Z Engagement:

*   **Highlight the Impact:** Show how the electrical industry contributes to a greener, smarter future.
*   **Embrace Technology:** Showcase the digital tools and tech-forward nature of modern wholesale.
*   **Clear Progression:** Provide structured career paths and opportunities for development.

By aligning our industry's value proposition with the priorities of Gen Z, we can build a strong pipeline of future talent.`,
    date: "February 20, 2026",
    author: "Sarah Jenkins",
    category: "Talent Strategy",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png",
    readTime: "5 min read"
  },
  {
    id: "future-of-ev-charging-infrastructure",
    title: "The Future of EV Charging Infrastructure in the UK",
    excerpt: "Exploring the growth of EV charging and the opportunities it presents for electrical wholesalers.",
    content: `The rapid adoption of electric vehicles (EVs) is transforming the UK's energy landscape. For electrical wholesalers, this presents a significant opportunity to supply the components and expertise needed for the expanding charging infrastructure.

### Key Opportunities:
*   **Product Demand:** Increased demand for charging units, cabling, and protective devices.
*   **Technical Support:** Contractors need guidance on installation standards and grid connectivity.
*   **Integrated Solutions:** Opportunities to bundle charging solutions with energy management systems.

Wholesalers who invest in knowledge and stock will be essential partners in the EV transition.`,
    date: "March 12, 2026",
    author: "James Power",
    category: "Market Trends",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png",
    readTime: "5 min read"
  },
  {
    id: "retaining-top-talent-competitive-market",
    title: "How to Retain Top Talent in a Competitive Market",
    excerpt: "Practical strategies for keeping your best people engaged and motivated.",
    content: `Retention is just as important as acquisition. In a competitive market, top talent has options. Keeping them requires a proactive approach.

### Strategies for Retention:
*   **Competitive Compensation & Benefits:** Ensure your package is market-leading.
*   **Clear Career Paths:** Provide opportunities for growth and advancement.
*   **Positive Culture:** Foster an environment where employees feel valued and supported.
*   **Recognition:** Regularly acknowledge and reward high performance.

Investing in your people is the best investment you can make for your business.`,
    date: "March 14, 2026",
    author: "Sarah Jenkins",
    category: "Talent Strategy",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916341/530b2ac7-e334-4b7e-b4b4-6c3c996cda80_x6fcac.jpg",
    readTime: "5 min read"
  },
  {
    id: "data-analytics-in-branch-performance",
    title: "The Role of Data Analytics in Branch Performance",
    excerpt: "How data-driven insights can help branch managers improve efficiency and profitability.",
    content: `Data is a powerful tool for branch managers. By analysing performance metrics, you can identify areas for improvement and make informed decisions.

### Key Metrics to Analyse:
*   **Sales Trends:** Identify top-performing products and customer segments.
*   **Inventory Turnover:** Optimise stock levels to reduce holding costs.
*   **Customer Acquisition Cost:** Understand the cost of winning new business.
*   **Operational Efficiency:** Measure the time taken to process orders and deliveries.

Data-driven management is the key to achieving consistent branch performance.`,
    date: "March 16, 2026",
    author: "Michael Roberts",
    category: "Operational Excellence",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg",
    readTime: "6 min read"
  },
  {
    id: "shift-to-renewable-energy-solutions",
    title: "Navigating the Shift to Renewable Energy Solutions",
    excerpt: "How electrical wholesalers can support the transition to renewable energy.",
    content: `The shift towards renewable energy is accelerating. Wholesalers have a crucial role in providing the components and expertise required for solar, wind, and storage solutions.

### Supporting the Transition:
*   **Product Knowledge:** Develop expertise in renewable technologies.
*   **Supply Chain Partnerships:** Build relationships with leading renewable energy suppliers.
*   **Contractor Support:** Provide training and technical support to installers.

The renewable energy sector is a major growth area for the electrical industry.`,
    date: "March 18, 2026",
    author: "James Power",
    category: "Market Trends",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png",
    readTime: "5 min read"
  },
  {
    id: "culture-of-continuous-improvement",
    title: "Building a Culture of Continuous Improvement",
    excerpt: "Why fostering a culture of improvement is essential for long-term success.",
    content: `A culture of continuous improvement is the hallmark of a high-performing organisation. It encourages employees to look for better ways of doing things, every single day.

### Fostering Improvement:
*   **Encourage Feedback:** Create channels for employees to share ideas.
*   **Empower Employees:** Give your team the authority to make improvements.
*   **Celebrate Success:** Recognise and reward efforts to improve processes.
*   **Learn from Failure:** View mistakes as opportunities to learn and grow.

Continuous improvement is not a destination; it's a journey.`,
    date: "March 20, 2026",
    author: "Sarah Jenkins",
    category: "Leadership",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916348/713aeba2-3f10-4512-95b7-defca1b268a2_vggzr3.jpg",
    readTime: "4 min read"
  },
  {
    id: "sustainable-supply-chains-uk-perspective",
    title: "Sustainable Supply Chains: A UK Perspective",
    excerpt: "Why sustainability is becoming a critical component of supply chain management in the UK.",
    content: `Sustainability is no longer optional. For UK electrical wholesalers, it's a strategic imperative that influences everything from supplier selection to customer relationships.

### The Sustainability Shift:

*   **Supplier Audits:** Wholesalers are increasingly vetting suppliers based on their environmental and social credentials.
*   **Logistics Efficiency:** Optimising delivery routes and vehicle fleets to reduce carbon footprints.
*   **Product Lifecycle:** Promoting products that are durable, repairable, and recyclable.

Building a sustainable supply chain is not just good for the planet; it's good for business, enhancing reputation and operational efficiency.`,
    date: "February 10, 2026",
    author: "James Power",
    category: "Market Trends",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916348/713aeba2-3f10-4512-95b7-defca1b268a2_vggzr3.jpg",
    readTime: "7 min read"
  },
  {
    id: "impact-of-iot-on-warehouse-efficiency",
    title: "The Impact of IoT on Warehouse Efficiency",
    excerpt: "Exploring how Internet of Things (IoT) devices are streamlining warehouse operations and reducing errors.",
    content: "The adoption of IoT devices in warehouses is transforming operational efficiency. By tracking inventory in real-time, monitoring equipment health, and automating routine tasks, wholesalers can significantly reduce errors and improve throughput. This technology is becoming a standard for competitive operations.",
    date: "March 22, 2026",
    author: "Michael Roberts",
    category: "Operational Excellence",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916308/3cadf2e2-ecc7-4148-932e-0aa74ba4ba7a_mfggyl.jpg",
    readTime: "5 min read"
  },
  {
    id: "attracting-talent-employer-branding",
    title: "Attracting Talent: The Power of Employer Branding",
    excerpt: "Why a strong employer brand is essential for attracting top talent in a competitive market.",
    content: "In a tight labour market, your employer brand is your most powerful recruitment tool. It's not just about salary; it's about the culture, values, and opportunities you offer. Building a strong brand requires authenticity and a commitment to your employees' growth.",
    date: "March 25, 2026",
    author: "Sarah Jenkins",
    category: "Talent Strategy",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916341/530b2ac7-e334-4b7e-b4b4-6c3c996cda80_x6fcac.jpg",
    readTime: "4 min read"
  },
  {
    id: "navigating-supply-chain-disruptions",
    title: "Navigating Supply Chain Disruptions",
    excerpt: "Practical advice for wholesalers to build more resilient supply chains in an uncertain global market.",
    content: "Supply chain disruptions have become the new normal. To stay ahead, wholesalers must diversify their supplier base, invest in data-driven forecasting, and maintain strategic buffer stocks. Resilience is no longer a luxury; it's a necessity.",
    date: "March 28, 2026",
    author: "James Power",
    category: "Market Trends",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983186/Gemini_Generated_Image_4xh7434xh7434xh7_ksfi1z.png",
    readTime: "6 min read"
  },
  {
    id: "role-of-mentorship-in-branch-leadership",
    title: "The Role of Mentorship in Branch Leadership",
    excerpt: "How mentorship programmes can develop the next generation of branch managers.",
    content: "Mentorship is a powerful tool for leadership development. By pairing experienced branch managers with high-potential employees, wholesalers can accelerate the development of future leaders and ensure a smooth transition of knowledge and culture.",
    date: "March 30, 2026",
    author: "Michael Roberts",
    category: "Leadership",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772983190/Gemini_Generated_Image_q5yx61q5yx61q5yx_vj21wc.png",
    readTime: "5 min read"
  },
  {
    id: "new-safety-standards-ev-installations",
    title: "Understanding the New Safety Standards for EV Installations",
    excerpt: "A breakdown of the latest safety standards for EV charging installations and what they mean for your business.",
    content: "As EV charging infrastructure expands, safety standards are becoming increasingly stringent. Wholesalers must ensure they are stocking compliant products and providing contractors with the necessary technical guidance to meet these new requirements.",
    date: "April 2, 2026",
    author: "Sarah Jenkins",
    category: "Compliance",
    image: "https://res.cloudinary.com/dtf76y0s7/image/upload/v1772916348/713aeba2-3f10-4512-95b7-defca1b268a2_vggzr3.jpg",
    readTime: "5 min read"
  }
];
