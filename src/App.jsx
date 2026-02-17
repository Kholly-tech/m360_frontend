import AppRoutes from "./routes/routes";
import Clarity from "@microsoft/clarity";

const App = () => {
  const projectId = "tn02kkuk31";

  Clarity.init(projectId);
  return (
    <div>
      <AppRoutes />
    </div>
  );
};




// // TEMP
// import { useState } from "react";

// const solutions = [
//   {
//     name: "Deel",
//     category: "Global Payroll & EOR",
//     tier: "Enterprise",
//     logo: "🌍",
//     tagline: "Best for agencies with global clients",
//     color: "from-blue-600 to-blue-800",
//     badge: "Top Pick",
//     badgeColor: "bg-yellow-400 text-yellow-900",
//     summary:
//       "Deel offers a no-code white label solution covering EOR, contractor management, and global payroll across 180+ countries. Branding (logo, colors, custom domain, emails) can be set up in hours.",
//     strengths: [
//       "Custom domain, logo, colors & emails in real-time",
//       "Global payroll & compliance in 180+ countries",
//       "Multi-client centralized dashboard",
//       "API access for deeper native integrations",
//       "Onboarding, contracts & document storage built-in",
//     ],
//     limitations: [
//       "Full native white label requires custom API work",
//       "Premium pricing — suited to mid-large agencies",
//       "Heavier on global features; may be overkill for local-only agencies",
//     ],
//     bestFor: "Agencies managing clients across multiple countries",
//     apiAccess: true,
//     multiTenant: true,
//     mobileApp: true,
//     pricing: "Custom / Enterprise",
//     url: "https://www.deel.com/hr-platform/white-label/",
//   },
//   {
//     name: "Playroll",
//     category: "EOR & Payroll Platform",
//     tier: "Mid-Market",
//     logo: "🎯",
//     tagline: "Built specifically for resellers",
//     color: "from-violet-600 to-purple-800",
//     badge: "Reseller Favorite",
//     badgeColor: "bg-purple-200 text-purple-900",
//     summary:
//       "Playroll is purpose-built for resellers and HR agencies. It offers a white label portal with custom logos, domains, and branding, plus a centralized dashboard for managing multiple client accounts.",
//     strengths: [
//       "Built specifically for reseller/agency model",
//       "Segmented client management from one dashboard",
//       "Flexible user permissions per client",
//       "Automated onboarding & contract generation",
//       "Compliance support in 180+ countries",
//     ],
//     limitations: [
//       "Primarily focused on EOR/payroll — may need supplementing for full HRMS",
//       "Less brand recognition than Deel or Rippling",
//       "Performance management modules are limited",
//     ],
//     bestFor: "HR agencies reselling payroll & compliance services",
//     apiAccess: true,
//     multiTenant: true,
//     mobileApp: true,
//     pricing: "Custom / Volume-based",
//     url: "https://www.playroll.com/white-label-hr-software",
//   },
//   {
//     name: "PandaHR",
//     category: "Full-Suite HRM",
//     tier: "SMB–Enterprise",
//     logo: "🐼",
//     tagline: "Purpose-built white label HRM",
//     color: "from-green-600 to-emerald-800",
//     badge: "Best for Agencies",
//     badgeColor: "bg-green-200 text-green-900",
//     summary:
//       "PandaHR is designed exclusively as a white label HR platform for staffing agencies, consulting firms, BPOs, and PEOs. It covers the full HR lifecycle with 18-language support and GDPR compliance.",
//     strengths: [
//       "Built exclusively for white label resale",
//       "Full HR lifecycle: recruit → onboard → manage → offboard",
//       "18-language support (covers ~68% of global population)",
//       "GDPR compliant out of the box",
//       "Transparent client activity visibility",
//     ],
//     limitations: [
//       "Smaller vendor — less market validation vs. Deel/Rippling",
//       "Global payroll infrastructure less robust than Deel",
//       "Fewer third-party integrations listed publicly",
//     ],
//     bestFor:
//       "Staffing agencies & HR consultancies wanting a fully branded platform",
//     apiAccess: true,
//     multiTenant: true,
//     mobileApp: true,
//     pricing: "Partner Program (contact for pricing)",
//     url: "https://pandahr.co/white-label-hr-software",
//   },
//   {
//     name: "OrangeHRM",
//     category: "Open Source + Cloud HRM",
//     tier: "SMB–Enterprise",
//     logo: "🍊",
//     tagline: "Open source flexibility with enterprise options",
//     color: "from-orange-500 to-orange-700",
//     badge: "Dev Friendly",
//     badgeColor: "bg-orange-200 text-orange-900",
//     summary:
//       "OrangeHRM offers a fully modular, open-source HRM platform that your tech team can self-host, customize, and rebrand. It covers the complete HR lifecycle with modules for leave, payroll, performance, recruitment, and more.",
//     strengths: [
//       "Open source — full code access for your dev team",
//       "Modular architecture (add/remove features easily)",
//       "Self-hosting option for full data control",
//       "Drag-and-drop roster & shift scheduling",
//       "Strong reporting & custom analytics",
//     ],
//     limitations: [
//       "Requires significant dev resources to customize",
//       "Cloud version has white label limitations",
//       "Support depends on tier; open-source = community support",
//     ],
//     bestFor: "Agencies with a strong tech team wanting deep customization",
//     apiAccess: true,
//     multiTenant: true,
//     mobileApp: true,
//     pricing: "Free (OS) / Paid cloud plans from ~$5/user/mo",
//     url: "https://www.orangehrm.com",
//   },
//   {
//     name: "Horilla HRMS",
//     category: "Open Source HRM",
//     tier: "Startup–SMB",
//     logo: "⚙️",
//     tagline: "Zero licensing cost, fully customizable",
//     color: "from-slate-600 to-slate-800",
//     badge: "Zero Cost",
//     badgeColor: "bg-slate-200 text-slate-900",
//     summary:
//       "Horilla is a fully open-source, self-hosted HRM platform with no licensing fees. It handles attendance, leave, payroll, recruitment, and performance (OKR-based), and can be completely rebranded by your tech team.",
//     strengths: [
//       "No licensing fee whatsoever",
//       "Full source code access — rebrand 100%",
//       "OKR-based performance management",
//       "360° feedback and custom review templates",
//       "Asset management module included",
//     ],
//     limitations: [
//       "Requires your team to handle hosting, updates & maintenance",
//       "No vendor SLA or guaranteed support",
//       "More setup time compared to SaaS options",
//     ],
//     bestFor: "Tech-heavy agencies on a lean budget wanting full ownership",
//     apiAccess: true,
//     multiTenant: false,
//     mobileApp: false,
//     pricing: "Free (open source)",
//     url: "https://github.com/horilla-opensource/horilla",
//   },
//   {
//     name: "GoHire",
//     category: "Recruitment & ATS",
//     tier: "SMB",
//     logo: "🚀",
//     tagline: "White label hiring & ATS platform",
//     color: "from-sky-500 to-cyan-700",
//     badge: "ATS Specialist",
//     badgeColor: "bg-sky-200 text-sky-900",
//     summary:
//       "GoHire is a white label hiring and applicant tracking system ideal for staffing agencies and HR tech resellers. It covers job posting, candidate management, interview scheduling, and team collaboration — all under your brand.",
//     strengths: [
//       "Complete white label rebrand (domain, logo, language)",
//       "Built-in Slack, Google Calendar & Zapier integrations",
//       "Non-technical friendly — easy client onboarding",
//       "Multi-job posting across boards from one panel",
//       "Designed with resellers/agencies in mind",
//     ],
//     limitations: [
//       "Focused on recruitment only — not full HRMS",
//       "Limited payroll or performance management features",
//       "Less suitable as a standalone full-suite HRM",
//     ],
//     bestFor:
//       "Agencies that prioritize recruitment & ATS over full HR management",
//     apiAccess: true,
//     multiTenant: true,
//     mobileApp: false,
//     pricing: "From ~$79/month",
//     url: "https://gohire.io",
//   },
//   {
//     name: "HiringThing",
//     category: "Private Label ATS",
//     tier: "SMB–Enterprise",
//     logo: "🔍",
//     tagline: "Private label ATS with deep customization",
//     color: "from-rose-600 to-pink-700",
//     badge: "Private Label",
//     badgeColor: "bg-rose-200 text-rose-900",
//     summary:
//       "HiringThing offers a private label ATS platform where workflows, integrations, and functionalities can be customized per client industry. It goes beyond basic white labeling, allowing feature-level customization.",
//     strengths: [
//       "Private label — customize workflows per client",
//       "Integration add-ons tailored to industry needs",
//       "Strong partner program with dedicated support",
//       "Good for vertical SaaS providers adding HR features",
//       "APIs for deep system integration",
//     ],
//     limitations: [
//       "ATS-focused — not a complete HRM suite",
//       "Custom pricing can be complex to negotiate",
//       "Fewer out-of-the-box HRMS features",
//     ],
//     bestFor:
//       "Agencies wanting a private-label ATS to embed in a broader platform",
//     apiAccess: true,
//     multiTenant: true,
//     mobileApp: false,
//     pricing: "Custom / Partner pricing",
//     url: "https://blog.hiringthing.com/white-label-hr-software",
//   },
// ];

// const comparisonMatrix = [
//   {
//     label: "Full HRM Suite",
//     keys: [
//       "deel",
//       "playroll",
//       "pandahr",
//       "orangehrm",
//       "horilla",
//       "gohire",
//       "hiringthing",
//     ],
//     values: [true, false, true, true, true, false, false],
//   },
//   {
//     label: "White Label Branding",
//     keys: [],
//     values: [true, true, true, true, true, true, true],
//   },
//   {
//     label: "Multi-Tenant (Multi-Client)",
//     keys: [],
//     values: [true, true, true, true, false, true, true],
//   },
//   {
//     label: "API / Custom Integration",
//     keys: [],
//     values: [true, true, true, true, true, true, true],
//   },
//   {
//     label: "Global Payroll",
//     keys: [],
//     values: [true, true, false, false, false, false, false],
//   },
//   {
//     label: "Open Source",
//     keys: [],
//     values: [false, false, false, true, true, false, false],
//   },
//   {
//     label: "Mobile App",
//     keys: [],
//     values: [true, true, true, true, false, false, false],
//   },
//   {
//     label: "Performance Management",
//     keys: [],
//     values: [false, false, true, true, true, false, false],
//   },
//   {
//     label: "ATS / Recruitment",
//     keys: [],
//     values: [true, false, true, true, true, true, true],
//   },
//   {
//     label: "Zero Licensing Cost",
//     keys: [],
//     values: [false, false, false, false, true, false, false],
//   },
// ];

// const tabs = ["Overview", "Comparison", "Recommendation"];

// export default function App() {
//   const [activeTab, setActiveTab] = useState("Overview");
//   const [expanded, setExpanded] = useState(null);
//   const [filter, setFilter] = useState("All");

//   const filters = [
//     "All",
//     "Enterprise",
//     "Mid-Market",
//     "SMB–Enterprise",
//     "SMB",
//     "Startup–SMB",
//   ];
//   const filteredSolutions =
//     filter === "All" ? solutions : solutions.filter((s) => s.tier === filter);

//   return (
//     <div className="min-h-screen bg-gray-950 text-white font-sans">
//       {/* Header */}
//       <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-b border-gray-800 px-6 py-8">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-2">
//             Product Manager's Guide
//           </p>
//           <h1 className="text-3xl font-bold text-white mb-2">
//             White Label HRM Solutions
//           </h1>
//           <p className="text-gray-400 text-sm max-w-2xl">
//             A curated breakdown of platforms your tech team can leverage to
//             launch a branded HRM product — without building from scratch.
//           </p>

//           {/* Tabs */}
//           <div className="flex gap-2 mt-6">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                   activeTab === tab
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-8">
//         {/* OVERVIEW TAB */}
//         {activeTab === "Overview" && (
//           <>
//             {/* Filter bar */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               <span className="text-sm text-gray-500 self-center mr-1">
//                 Filter by tier:
//               </span>
//               {filters.map((f) => (
//                 <button
//                   key={f}
//                   onClick={() => setFilter(f)}
//                   className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
//                     filter === f
//                       ? "bg-indigo-600 text-white"
//                       : "bg-gray-800 text-gray-400 hover:bg-gray-700"
//                   }`}
//                 >
//                   {f}
//                 </button>
//               ))}
//             </div>

//             <div className="grid gap-4">
//               {filteredSolutions.map((s, i) => (
//                 <div
//                   key={s.name}
//                   className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all"
//                 >
//                   {/* Card Header */}
//                   <div className="p-5">
//                     <div className="flex items-start justify-between gap-4">
//                       <div className="flex items-center gap-4">
//                         <div
//                           className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl flex-shrink-0`}
//                         >
//                           {s.logo}
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-2 flex-wrap">
//                             <h2 className="text-lg font-bold text-white">
//                               {s.name}
//                             </h2>
//                             <span
//                               className={`px-2 py-0.5 rounded-full text-xs font-semibold ${s.badgeColor}`}
//                             >
//                               {s.badge}
//                             </span>
//                             <span className="px-2 py-0.5 rounded-full text-xs bg-gray-800 text-gray-400">
//                               {s.tier}
//                             </span>
//                           </div>
//                           <p className="text-xs text-indigo-400 mt-0.5">
//                             {s.category}
//                           </p>
//                           <p className="text-sm text-gray-400 mt-1">
//                             {s.tagline}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex flex-col items-end gap-2 flex-shrink-0">
//                         <span className="text-xs text-gray-500 text-right">
//                           {s.pricing}
//                         </span>
//                         <button
//                           onClick={() => setExpanded(expanded === i ? null : i)}
//                           className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-medium transition-all"
//                         >
//                           {expanded === i ? "▲ Less" : "▼ Details"}
//                         </button>
//                         <a href={s.url} className="text-sm px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg">Go to site</a>
//                       </div>
//                     </div>

//                     {/* Quick badges */}
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {s.apiAccess && (
//                         <span className="px-2 py-1 bg-blue-950 text-blue-400 rounded text-xs">
//                           API Access
//                         </span>
//                       )}
//                       {s.multiTenant && (
//                         <span className="px-2 py-1 bg-purple-950 text-purple-400 rounded text-xs">
//                           Multi-Tenant
//                         </span>
//                       )}
//                       {s.mobileApp && (
//                         <span className="px-2 py-1 bg-green-950 text-green-400 rounded text-xs">
//                           Mobile App
//                         </span>
//                       )}
//                       {s.pricing.includes("Free") && (
//                         <span className="px-2 py-1 bg-emerald-950 text-emerald-400 rounded text-xs">
//                           Free / Open Source
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Expanded Detail */}
//                   {expanded === i && (
//                     <div className="border-t border-gray-800 p-5 bg-gray-900/50">
//                       <p className="text-sm text-gray-300 mb-4">{s.summary}</p>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <h4 className="text-xs font-semibold text-green-400 uppercase mb-2">
//                             ✅ Strengths
//                           </h4>
//                           <ul className="space-y-1">
//                             {s.strengths.map((item, j) => (
//                               <li
//                                 key={j}
//                                 className="text-sm text-gray-300 flex gap-2"
//                               >
//                                 <span className="text-green-500 mt-0.5 flex-shrink-0">
//                                   •
//                                 </span>
//                                 {item}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div>
//                           <h4 className="text-xs font-semibold text-red-400 uppercase mb-2">
//                             ⚠️ Limitations
//                           </h4>
//                           <ul className="space-y-1">
//                             {s.limitations.map((item, j) => (
//                               <li
//                                 key={j}
//                                 className="text-sm text-gray-300 flex gap-2"
//                               >
//                                 <span className="text-red-400 mt-0.5 flex-shrink-0">
//                                   •
//                                 </span>
//                                 {item}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="mt-4 p-3 bg-indigo-950/40 border border-indigo-900/50 rounded-lg">
//                         <span className="text-xs text-indigo-400 font-semibold">
//                           🎯 Best For:{" "}
//                         </span>
//                         <span className="text-sm text-gray-300">
//                           {s.bestFor}
//                         </span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* COMPARISON TAB */}
//         {activeTab === "Comparison" && (
//           <div className="overflow-x-auto">
//             <p className="text-sm text-gray-400 mb-4">
//               Feature-by-feature comparison across all 7 solutions.
//             </p>
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="border-b border-gray-800">
//                   <th className="text-left py-3 pr-4 text-gray-400 font-medium w-44">
//                     Feature
//                   </th>
//                   {solutions.map((s) => (
//                     <th
//                       key={s.name}
//                       className="text-center py-3 px-2 text-xs font-semibold text-gray-300 min-w-20"
//                     >
//                       <div className="text-lg mb-1">{s.logo}</div>
//                       {s.name}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {comparisonMatrix.map((row, i) => (
//                   <tr
//                     key={row.label}
//                     className={`border-b border-gray-800/50 ${i % 2 === 0 ? "bg-gray-900/30" : ""}`}
//                   >
//                     <td className="py-3 pr-4 text-gray-300 font-medium text-xs">
//                       {row.label}
//                     </td>
//                     {row.values.map((v, j) => (
//                       <td key={j} className="text-center py-3 px-2">
//                         {v ? (
//                           <span className="text-green-400 text-base">✓</span>
//                         ) : (
//                           <span className="text-gray-700 text-base">✗</span>
//                         )}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//                 <tr className="border-b border-gray-800/50">
//                   <td className="py-3 pr-4 text-gray-300 font-medium text-xs">
//                     Pricing
//                   </td>
//                   {solutions.map((s) => (
//                     <td key={s.name} className="text-center py-3 px-2">
//                       <span className="text-xs text-gray-400">
//                         {s.pricing.split(" ")[0]}
//                       </span>
//                     </td>
//                   ))}
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* RECOMMENDATION TAB */}
//         {activeTab === "Recommendation" && (
//           <div className="space-y-5">
//             <p className="text-sm text-gray-400">
//               Based on your use case as an HR agency building a client-facing
//               branded HRM platform:
//             </p>

//             {[
//               {
//                 scenario: "If you want speed to market with minimal dev work",
//                 pick: "Deel or Playroll",
//                 icon: "⚡",
//                 color: "border-yellow-600/40 bg-yellow-950/20",
//                 accent: "text-yellow-400",
//                 detail:
//                   "Both offer no-code white label setup that can go live in hours to days. Playroll is built specifically for resellers, making it a strong fit for your agency model. Deel adds global payroll depth if your clients operate internationally.",
//               },
//               {
//                 scenario: "If you want a full-featured branded HRM platform",
//                 pick: "PandaHR",
//                 icon: "🏆",
//                 color: "border-green-600/40 bg-green-950/20",
//                 accent: "text-green-400",
//                 detail:
//                   "PandaHR is purpose-built for HR agencies and staffing firms. It covers the full employee lifecycle, supports 18 languages, is GDPR-ready, and gives you complete visibility over all client activity — exactly what a multi-client HR agency needs.",
//               },
//               {
//                 scenario:
//                   "If your tech team wants deep customization & code access",
//                 pick: "OrangeHRM or Horilla",
//                 icon: "🛠️",
//                 color: "border-blue-600/40 bg-blue-950/20",
//                 accent: "text-blue-400",
//                 detail:
//                   "OrangeHRM (open source) or Horilla (zero cost, fully self-hosted) give your developers complete control over the codebase. You can rebrand 100%, build custom modules, and own the data entirely. Best if you have 2–3 dedicated backend developers.",
//               },
//               {
//                 scenario: "If recruitment is the core service you're selling",
//                 pick: "GoHire or HiringThing",
//                 icon: "🎯",
//                 color: "border-purple-600/40 bg-purple-950/20",
//                 accent: "text-purple-400",
//                 detail:
//                   "For agencies whose primary value proposition is talent acquisition, GoHire provides a clean white label ATS that can be live quickly. HiringThing goes further with private-label customization per client, making it ideal if different clients need different recruiting workflows.",
//               },
//               {
//                 scenario: "Recommended combination strategy for most agencies",
//                 pick: "PandaHR (core HRM) + GoHire (ATS) + Playroll (payroll)",
//                 icon: "🔗",
//                 color: "border-indigo-600/40 bg-indigo-950/20",
//                 accent: "text-indigo-400",
//                 detail:
//                   "Rather than finding one platform that does everything mediocrely, consider a modular approach: PandaHR for the branded HR portal, GoHire for recruitment, and Playroll for payroll/compliance. Connect them via APIs to deliver a best-in-class solution under your brand.",
//               },
//             ].map((r, i) => (
//               <div key={i} className={`border rounded-2xl p-5 ${r.color}`}>
//                 <div className="flex items-start gap-3">
//                   <span className="text-2xl">{r.icon}</span>
//                   <div>
//                     <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
//                       {r.scenario}
//                     </p>
//                     <h3 className={`font-bold text-base ${r.accent} mb-2`}>
//                       {r.pick}
//                     </h3>
//                     <p className="text-sm text-gray-300">{r.detail}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Key Decision Factors */}
//             <div className="mt-6 p-5 bg-gray-900 border border-gray-800 rounded-2xl">
//               <h3 className="font-bold text-white mb-4">
//                 📋 Key Questions Before You Decide
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {[
//                   "How large is your dev team? (determines build vs. configure)",
//                   "Are your clients local or global? (determines payroll complexity)",
//                   "Do you need multi-tenancy from day one?",
//                   "What is your go-to-market timeline?",
//                   "What is your licensing budget per client?",
//                   "Do you need data sovereignty / self-hosting?",
//                   "Will clients need separate admin portals?",
//                   "Is recruitment or payroll your core service?",
//                 ].map((q, i) => (
//                   <div key={i} className="flex gap-2 text-sm text-gray-300">
//                     <span className="text-indigo-500 flex-shrink-0">›</span>
//                     {q}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

export default App;
