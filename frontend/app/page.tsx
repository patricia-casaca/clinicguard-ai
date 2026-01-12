// "use client";

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
//             🏥 ClinicGuard AI
//           </h1>
//           <p className="text-gray-700 text-lg sm:text-xl mb-8">
//             Your 24/7 AI Compliance Officer for small clinics.
//           </p>
//           <div className="flex justify-center gap-4">
//             <Link
//               href="/upload"
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Upload Docs
//             </Link>
//             <Link
//               href="/scan"
//               className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
//             >
//               See Dashboard
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//           What ClinicGuard AI Can Do
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">
//               📄 Document Upload & Scan
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Upload your clinic policies & procedures. Get instant compliance
//               scoring.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">💬 HIPAA Q&A Chat</h3>
//             <p className="text-gray-600 text-sm">
//               Ask questions like “Can I email this patient?” and get clear, safe
//               answers.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">
//               📊 Audit-Ready Reports
//             </h3>
//             <p className="text-gray-600 text-sm">
//               One-click reports to stay prepared for audits. Show top risks &
//               missing documents.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">⚠️ Red Flag Alerts</h3>
//             <p className="text-gray-600 text-sm">
//               Get notified about high-risk gaps and compliance issues before
//               they become fines.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-12">
//             How It Works
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
//             {[
//               { step: "Step 1", title: "Upload Docs" },
//               { step: "Step 2", title: "AI Scans & Scores" },
//               { step: "Step 3", title: "Generate Report" },
//               { step: "Step 4", title: "Stay Audit Ready" },
//             ].map((item) => (
//               <div
//                 key={item.step}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//               >
//                 <div className="text-blue-600 font-bold text-lg mb-2">
//                   {item.step}
//                 </div>
//                 <div className="font-semibold text-gray-800">{item.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-blue-600 text-white text-center">
//         <h2 className="text-3xl font-bold mb-4">Ready to Feel Audit-Safe?</h2>
//         <p className="mb-6 text-lg">
//           Start your 30-day pilot and see what ClinicGuard AI finds.
//         </p>
//         <Link
//           href="/upload"
//           className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
//         >
//           Start Your Pilot
//         </Link>
//       </section>
//     </div>
//   );
// }

"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            🏥 ClinicGuard AI
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8">
            Your 24/7 AI compliance officer for small clinics.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/upload"
              className="px-6 py-3 bg-[#3B82A0] text-white font-medium rounded-lg hover:bg-[#256B85] transition-colors"
            >
              Upload Docs
            </Link>
            <Link
              href="/scan"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          What ClinicGuard AI Helps With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "📄 Document Upload & Scan",
              desc: "Upload your clinic policies and procedures. Get instant compliance scoring.",
            },
            {
              title: "💬 HIPAA Q&A Chat",
              desc: "Ask questions like “Can I email this patient?” and get clear, compliant answers.",
            },
            {
              title: "📊 Audit-Ready Reports",
              desc: "Generate reports that highlight risks, gaps, and missing documentation.",
            },
            {
              title: "⚠️ Red Flag Alerts",
              desc: "Get notified about high-risk compliance issues before they become fines.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { step: "Step 1", title: "Upload Documents" },
              { step: "Step 2", title: "AI Scans & Scores" },
              { step: "Step 3", title: "Generate Reports" },
              { step: "Step 4", title: "Stay Audit-Ready" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div className="text-sm font-semibold text-[#5FA8D3] mb-2">
                  {item.step}
                </div>
                <div className="font-medium text-gray-900">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to Feel Audit-Safe?
        </h2>
        <p className="mb-6 text-gray-600 text-lg">
          Start your 30-day pilot and see what ClinicGuard AI uncovers.
        </p>
        <Link
          href="/upload"
          className="inline-block px-8 py-4 bg-[#3B82A0] text-white font-semibold rounded-lg hover:bg-[#256B85] transition-colors"
        >
          Start Your Pilot
        </Link>
      </section>
    </div>
  );
}
