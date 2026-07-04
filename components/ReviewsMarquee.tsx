import React from 'react';

interface Review {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const REVIEWS_ROW_1: Review[] = [
  {
    quote: "Power-Up Talent's hybrid approach is a game-changer. Their AI found candidates we never would have, and their human touch ensured a perfect cultural fit.",
    name: "David",
    role: "Managing Director",
    company: "National Distributor"
  },
  {
    quote: "We struggled to find a Branch Manager for our flagship Edmundson depot. Power-Up mapped the local market within 7 days and delivered three outstanding profiles.",
    name: "Richard",
    role: "Operational Director",
    company: "Edmundson Electrical"
  },
  {
    quote: "They understood exactly what we needed for our new trade counter opening. The candidates presented were operationally sharp and commercially driven.",
    name: "Emma",
    role: "Branch Manager",
    company: "CEF"
  },
  {
    quote: "Outstanding service. They headhunted a superb Regional Director who has already restructured our low-performing branches to return to profitability.",
    name: "William",
    role: "CEO",
    company: "Electrical Supply Group"
  },
  {
    quote: "A truly professional headhunting service. They mapped out the entire M4 corridor to locate top-tier branch managers with proven local trade connections.",
    name: "Jason",
    role: "Regional Director",
    company: "Independent Buying Group"
  },
  {
    quote: "They managed to source a senior R&D Engineering Lead who accelerated our switchgear product development timeline by three months.",
    name: "George",
    role: "Technical Director",
    company: "OEM Electrical Manufacturer"
  },
  {
    quote: "Power-Up delivered a high-calibre Assistant Branch Manager when our usual recruitment channels failed. Highly recommend their market mapping service.",
    name: "Joseph",
    role: "Branch Manager",
    company: "National Wholesaler"
  },
  {
    quote: "Excellent communication and deep industry insight. They knew who the top performers were in our region and how to approach them discreetly.",
    name: "Kevin",
    role: "Regional Director",
    company: "National Wholesaler"
  },
  {
    quote: "Discreet, fast, and highly effective. They helped us replace a critical Branch Manager role without any disruption to our local trade counter.",
    name: "Timothy",
    role: "Divisional Director",
    company: "Rexel PLC"
  },
  {
    quote: "Their consultative approach is refreshing. They took time to understand our company culture and alignment before presenting candidates.",
    name: "Ryan",
    role: "Managing Director",
    company: "Independent Wholesaler"
  },
  {
    quote: "They understand trade counter dynamics and local customer base retention. The Branch Manager they placed has kept 100% of our key accounts.",
    name: "Nicholas",
    role: "Director",
    company: "Independent Group"
  },
  {
    quote: "Power-Up knows the Edmundson and Rexel networks inside out. They know exactly where to find high-performing branch talent.",
    name: "Stephen",
    role: "Operations Manager",
    company: "National Wholesaler"
  },
  {
    quote: "Highly discreet approach to recruiting passive candidates. They successfully hired a competitor's top estimator for us.",
    name: "Larry",
    role: "Branch Manager",
    company: "Independent Electrical"
  },
  {
    quote: "They understand the pressure on margins in the current market. The Branch Manager they sourced is a master at GP protection.",
    name: "Frank",
    role: "Regional Director",
    company: "National Wholesaler"
  },
  {
    quote: "Their sector knowledge is invaluable. They saved us a significant amount of time and money by finding the perfect candidate on the first try.",
    name: "Charles",
    role: "General Manager",
    company: "Independent Buying Group"
  },
  {
    quote: "The best recruitment experience we've had in 15 years of operating. They truly understand electrical wholesale.",
    name: "Sarah",
    role: "Managing Director",
    company: "Link Electrical Distributors"
  }
];

const REVIEWS_ROW_2: Review[] = [
  {
    quote: "Headhunting passive sales talent is their superpower. They secured a top-performing Sales Representative from a competitor, instantly boosting our region's GP.",
    name: "Sarah",
    role: "Regional Director",
    company: "Rexel PLC"
  },
  {
    quote: "Their knowledge of margin protection and pricing models in electrical wholesale means they screen candidates properly. Excellent consultative service.",
    name: "Michael",
    role: "Finance Director",
    company: "Independent Distributor"
  },
  {
    quote: "Power-Up helped us hire three Key Account Managers. Their grasp of the UK electrical sector is unmatched. We won't go anywhere else.",
    name: "John",
    role: "Commercial Director",
    company: "National Wholesaler"
  },
  {
    quote: "They don't just send CVs; they deliver detailed candidate dossiers highlighting margin management capability and trade counter leadership styles.",
    name: "Robert",
    role: "HR Director",
    company: "Rexel PLC"
  },
  {
    quote: "Power-Up's focus on passive candidates saved us. The Branch Manager they found has already improved our branch GP margin by 4% in six months.",
    name: "Thomas",
    role: "Managing Director",
    company: "Western Electrical"
  },
  {
    quote: "They understand the difference between a generic sales person and an electrical wholesale specialist. Every candidate they sent was spot on.",
    name: "Matthew",
    role: "Area Manager",
    company: "Edmundson Electrical"
  },
  {
    quote: "Their database and headhunting capability in the UK electrical sector is second to none. They have successfully filled four key roles for us.",
    name: "Edward",
    role: "HR Manager",
    company: "City Plumbing & Electrical"
  },
  {
    quote: "They secured a brilliant Lighting Specialist for our showroom who has already secured three new commercial contracts.",
    name: "Brian",
    role: "Branch Manager",
    company: "Independent Distributor"
  },
  {
    quote: "The candidate dossier they provided was incredibly detailed, showing exact commercial achievements and margin control capabilities.",
    name: "Ronald",
    role: "Managing Director",
    company: "Elite Electrical Wholesalers"
  },
  {
    quote: "We needed an Estimating Lead who understood EV infrastructure contracts. Power-Up found a passive specialist who hit the ground running.",
    name: "Jeffrey",
    role: "Contracts Director",
    company: "M&E Electrical Contracting Group"
  },
  {
    quote: "They mapped the North West region to find us a Regional Sales Manager. The level of detail in their market mapping was exceptionally impressive.",
    name: "Gary",
    role: "Sales Director",
    company: "National Wholesaler"
  },
  {
    quote: "A fantastic partner for branch expansion. They filled three branch manager positions for our new locations ahead of schedule.",
    name: "Eric",
    role: "Commercial Director",
    company: "Regional Electrical"
  },
  {
    quote: "Their candidate vetting is extremely rigorous. We saved hours of interviewing because they only put forward high-potential fits.",
    name: "Jonathan",
    role: "HR Business Partner",
    company: "Electrical Wholesaler"
  },
  {
    quote: "They found us a Senior Electrical Design Engineer who brought key relationships with specification clients. A game-changing placement.",
    name: "Scott",
    role: "Design Director",
    company: "Electrical Design Practice"
  },
  {
    quote: "Professional, knowledgeable, and responsive. They are our go-to talent partner for all senior branch and regional roles.",
    name: "Justin",
    role: "Director",
    company: "Trade Counter Network"
  },
  {
    quote: "Power-Up Talent's market mapping gave us a clear picture of the competitive landscape. Their placement was the icing on the cake.",
    name: "Matthew",
    role: "Regional Manager",
    company: "National Wholesaler"
  }
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="w-[300px] sm:w-[380px] bg-[#111625] text-white rounded-lg p-6 mx-4 shadow-lg border border-slate-800 flex flex-col justify-between shrink-0 hover:border-primary/45 transition-colors duration-300 whitespace-normal">
      <div>
        <div className="flex text-primary mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="material-symbols-outlined text-sm text-primary animate-pulse"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
        <p className="text-slate-200 text-sm leading-relaxed mb-6 font-light italic">
          "{review.quote}"
        </p>
      </div>
      <div>
        <span className="text-primary font-bold text-xs uppercase tracking-wider block">
          {review.name}
        </span>
        <span className="text-slate-400 text-[10px] font-semibold tracking-wide block mt-1">
          {review.role}, <strong className="text-primary">{review.company}</strong>
        </span>
      </div>
    </div>
  );
};

export const ReviewsMarquee: React.FC = () => {
  return (
    <section className="bg-white py-24 text-navy-deep border-t border-slate-100 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-display font-black text-4xl md:text-5xl text-navy-deep leading-tight mb-4 uppercase tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-slate-600 text-base max-w-2xl mx-auto font-light leading-relaxed">
          Hear from talent and businesses in the electrical wholesale industry who have experienced our exceptional service.
        </p>
      </div>

      {/* Marquee Row 1 (Moving Left) */}
      <div className="relative flex overflow-x-hidden w-full mb-8">
        <div className="animate-marquee whitespace-nowrap flex items-center py-2">
          {/* Double the array for seamless infinite scrolling loop */}
          {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((review, i) => (
            <ReviewCard key={`row1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Moving Right) */}
      <div className="relative flex overflow-x-hidden w-full">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center py-2">
          {/* Double the array for seamless infinite scrolling loop */}
          {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((review, i) => (
            <ReviewCard key={`row2-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsMarquee;
