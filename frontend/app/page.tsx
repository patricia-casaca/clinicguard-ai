// "use client";

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
//           <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
//             ClinicGuard AI
//           </h1>
//           <p className="max-w-2xl mx-auto text-gray-600 text-lg sm:text-xl mb-10">
//             An AI-powered compliance platform that helps small clinics stay
//             audit-ready, reduce risk, and save time.
//           </p>

//           <div className="flex justify-center gap-4">
//             <Link
//               href="/upload"
//               className="px-7 py-3 bg-[#3B82A0] text-white font-medium rounded-lg hover:bg-[#256B85] transition-colors"
//             >
//               Upload Documents
//             </Link>
//             <Link
//               href="/scan"
//               className="px-7 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
//             >
//               View Dashboard
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
//           Built for Clinic Compliance
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               title: "Document Intake & Analysis",
//               desc: "Upload clinic policies and procedures to receive automated compliance scoring and gap detection.",
//             },
//             {
//               title: "HIPAA-Safe Q&A",
//               desc: "Ask compliance questions in plain language and receive clear, defensible answers.",
//             },
//             {
//               title: "Audit-Ready Reports",
//               desc: "Generate structured reports highlighting risks, missing documentation, and priority fixes.",
//             },
//             {
//               title: "Risk Alerts",
//               desc: "Surface high-risk compliance issues early—before they become audit findings or fines.",
//             },
//           ].map((item) => (
//             <div
//               key={item.title}
//               className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-sm transition"
//             >
//               <h3 className="text-base font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="border-t border-gray-200 py-20">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
//             How It Works
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
//             {[
//               { step: "01", title: "Upload Documents" },
//               { step: "02", title: "AI Reviews & Scores" },
//               { step: "03", title: "Generate Reports" },
//               { step: "04", title: "Maintain Compliance" },
//             ].map((item) => (
//               <div
//                 key={item.step}
//                 className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-sm transition"
//               >
//                 <div className="text-sm font-semibold text-[#5FA8D3] mb-3">
//                   Step {item.step}
//                 </div>
//                 <div className="font-medium text-gray-900">{item.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="border-t border-gray-200 py-20 text-center">
//         <h2 className="text-3xl font-semibold text-gray-900 mb-4">
//           Ready to Reduce Compliance Risk?
//         </h2>
//         <p className="max-w-xl mx-auto mb-8 text-gray-600 text-lg">
//           Start a 30-day pilot and see how ClinicGuard AI identifies gaps,
//           risks, and missing documentation.
//         </p>
//         <Link
//           href="/upload"
//           className="inline-block px-8 py-4 bg-[#3B82A0] text-white font-semibold rounded-lg hover:bg-[#256B85] transition-colors"
//         >
//           Start 30-Day Pilot
//         </Link>
//       </section>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// // import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero */}
//       <section className="pt-28 pb-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
//               ClinicGuard AI
//             </h1>
//             <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-xl">
//               AI-powered compliance software designed to help small clinics
//               reduce risk, stay audit-ready, and save administrative time.
//             </p>

//             <div className="flex gap-4">
//               <Link
//                 href="/upload"
//                 className="px-7 py-3 bg-[#3B82A0] text-white font-medium rounded-lg hover:bg-[#256B85]"
//               >
//                 Upload Documents
//               </Link>
//               <Link
//                 href="/scan"
//                 className="px-7 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200"
//               >
//                 View Dashboard
//               </Link>
//             </div>
//           </div>

//           {/* Placeholder for future product image */}
//           <div className="hidden lg:block">
//             <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
//               Product preview
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
//             Built for Clinic Compliance
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Document Analysis",
//                 desc: "Automatically review clinic policies and procedures for compliance gaps.",
//               },
//               {
//                 title: "HIPAA-Safe Guidance",
//                 desc: "Get clear answers to compliance questions in plain language.",
//               },
//               {
//                 title: "Audit Reports",
//                 desc: "Generate structured, audit-ready compliance summaries.",
//               },
//               {
//                 title: "Risk Alerts",
//                 desc: "Identify high-risk issues early before they escalate.",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="p-6 rounded-xl border border-gray-200"
//               >
//                 <h3 className="text-sm font-semibold text-[#5FA8D3] mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-semibold text-gray-900 text-center mb-16">
//             How It Works
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
//             {[
//               "Upload clinic documents",
//               "AI reviews & scores compliance",
//               "Reports highlight gaps",
//               "Stay audit-ready",
//             ].map((text, i) => (
//               <div key={i}>
//                 <div className="mx-auto w-10 h-10 rounded-full bg-[#3B82A0] text-white flex items-center justify-center font-semibold mb-4">
//                   {i + 1}
//                 </div>
//                 <p className="text-sm text-gray-700">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24">
//         <div className="max-w-2xl mx-auto text-center px-4">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-4">
//             Start With One Upload
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Upload a policy or procedure to see how ClinicGuard AI identifies
//             compliance risks—no setup required.
//           </p>
//           <Link
//             href="/upload"
//             className="inline-block px-8 py-4 bg-[#3B82A0] text-white font-semibold rounded-lg hover:bg-[#256B85]"
//           >
//             Upload First Document
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              ClinicGuard AI
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-xl">
              AI-powered compliance software designed to help small clinics
              reduce risk, stay audit-ready, and save administrative time.
            </p>

            <div className="flex gap-4">
              <Link
                href="/upload"
                className="px-7 py-3 bg-[#3B82A0] text-white font-medium rounded-lg hover:bg-[#256B85] transition"
              >
                Upload Documents
              </Link>
              <Link
                href="/scan"
                className="px-7 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          {/* Product preview placeholder */}
          <div className="hidden lg:block">
            <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
              Product preview
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F5FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
            Built for Clinic Compliance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Document Analysis",
                desc: "Automatically review clinic policies and procedures for compliance gaps.",
              },
              {
                title: "HIPAA-Safe Guidance",
                desc: "Get clear answers to compliance questions in plain language.",
              },
              {
                title: "Audit Reports",
                desc: "Generate structured, audit-ready compliance summaries.",
              },
              {
                title: "Risk Alerts",
                desc: "Identify high-risk issues early before they escalate.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-sm font-semibold text-[#3B82A0] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center">
            {[
              "Upload clinic documents",
              "AI reviews & scores compliance",
              "Reports highlight gaps",
              "Stay audit-ready",
            ].map((text, i) => (
              <div key={i}>
                <div className="mx-auto w-10 h-10 rounded-full bg-[#3B82A0]/90 text-white flex items-center justify-center font-semibold mb-4">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F5FAFD]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Start With One Upload
          </h2>
          <p className="text-gray-600 mb-8">
            Upload a policy or procedure to see how ClinicGuard AI identifies
            compliance risks—no setup required.
          </p>
          <Link
            href="/upload"
            className="inline-block px-8 py-4 bg-[#3B82A0] text-white font-semibold rounded-lg hover:bg-[#256B85] transition"
          >
            Upload First Document
          </Link>
        </div>
      </section>
    </div>
  );
}
