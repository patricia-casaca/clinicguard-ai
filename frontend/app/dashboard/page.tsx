// "use client";

// import { useState } from "react";

// interface Document {
//   name: string;
//   uploadedAt: string;
// }

// interface Risk {
//   description: string;
//   severity: "High" | "Medium" | "Low";
// }

// interface MissingDocument {
//   name: string;
//   status: "Missing" | "Incomplete";
// }

// interface ClinicScan {
//   clinicName: string;
//   overallComplianceScore: number;
//   topRisks: Risk[];
//   missingDocuments: MissingDocument[];
//   recommendedNextSteps: string[];
//   documents: Document[];
// }

// export default function DashboardPage() {
//   const [clinicScan] = useState<ClinicScan>({
//     clinicName: "Sunny Dental Clinic",
//     overallComplianceScore: 82,
//     topRisks: [
//       { description: "Incomplete HIPAA section", severity: "High" },
//       { description: "No breach notification procedure", severity: "High" },
//       {
//         description: "Missing staff training acknowledgment",
//         severity: "Medium",
//       },
//       { description: "Unclear patient consent forms", severity: "Medium" },
//       { description: "Outdated retention schedule", severity: "Low" },
//     ],
//     missingDocuments: [
//       { name: "Data Backup Policy", status: "Missing" },
//       { name: "Incident Response Plan", status: "Incomplete" },
//     ],
//     recommendedNextSteps: [
//       "Update HIPAA section",
//       "Add staff training acknowledgment",
//       "Create breach notification procedure",
//     ],
//     documents: [
//       { name: "Patient Privacy Policy.pdf", uploadedAt: "2026-01-10" },
//       { name: "Employee Handbook.docx", uploadedAt: "2026-01-08" },
//     ],
//   });

//   const severityDot = (severity: string) => {
//     switch (severity) {
//       case "High":
//         return "🔴";
//       case "Medium":
//         return "🟡";
//       case "Low":
//         return "🟢";
//       default:
//         return "⚪";
//     }
//   };

//   const severityColor = (severity: string) => {
//     switch (severity) {
//       case "High":
//         return "text-red-600";
//       case "Medium":
//         return "text-yellow-600";
//       case "Low":
//         return "text-green-600";
//       default:
//         return "text-gray-500";
//     }
//   };

//   const docBadgeColor = (status: string) => {
//     switch (status) {
//       case "Missing":
//         return "bg-red-100 text-red-700";
//       case "Incomplete":
//         return "bg-yellow-100 text-yellow-700";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <h1 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
//         {clinicScan.clinicName} - Compliance Dashboard
//       </h1>

//       {/* Overall Score */}
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12 text-center">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//           Overall Compliance Score
//         </h2>
//         <p className="text-5xl font-bold text-gray-900 mb-5">
//           {clinicScan.overallComplianceScore}%
//         </p>
//         <div className="w-full h-4 bg-gray-200 rounded-full mb-5">
//           <div
//             className={`h-4 rounded-full ${
//               clinicScan.overallComplianceScore >= 90
//                 ? "bg-green-500"
//                 : clinicScan.overallComplianceScore >= 70
//                   ? "bg-yellow-400"
//                   : "bg-red-500"
//             }`}
//             style={{ width: `${clinicScan.overallComplianceScore}%` }}
//           ></div>
//         </div>
//         <button className="bg-[#3B82A0] text-white px-6 py-2 rounded hover:bg-[#256B85] transition">
//           📄 Generate Audit-Ready PDF
//         </button>
//       </div>

//       {/* Dashboard Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//         {/* Top 5 Risks */}
//         <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">
//             Top 5 Risks
//           </h3>
//           <ul className="space-y-2">
//             {clinicScan.topRisks
//               .sort((a, b) =>
//                 a.severity === b.severity
//                   ? 0
//                   : a.severity === "High"
//                     ? -1
//                     : b.severity === "High"
//                       ? 1
//                       : a.severity === "Medium"
//                         ? -1
//                         : 1
//               )
//               .map((risk, i) => (
//                 <li key={i} className="flex items-center gap-2">
//                   <span className={severityColor(risk.severity)}>
//                     {severityDot(risk.severity)}
//                   </span>
//                   <span className="flex-1">{risk.description}</span>
//                   <span
//                     className={`px-2 py-0.5 text-xs font-semibold rounded-full ${severityColor(
//                       risk.severity
//                     )}`}
//                   >
//                     {risk.severity}
//                   </span>
//                 </li>
//               ))}
//           </ul>
//         </div>

//         {/* Missing / Incomplete Documents */}
//         <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">
//             Missing / Incomplete Documents
//           </h3>
//           <ul className="space-y-2">
//             {clinicScan.missingDocuments.map((doc, i) => (
//               <li key={i} className="flex items-center gap-2">
//                 <span
//                   className={`px-2 py-0.5 rounded-full text-xs font-semibold ${docBadgeColor(
//                     doc.status
//                   )}`}
//                 >
//                   {doc.status}
//                 </span>
//                 <span>{doc.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Recommended Next Steps */}
//         <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">
//             Recommended Next Steps
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             {clinicScan.recommendedNextSteps.map((step, i) => (
//               <li key={i}>{step}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Uploaded Documents */}
//         <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">
//             Uploaded Documents
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             {clinicScan.documents.map((doc, i) => (
//               <li key={i}>
//                 {doc.name}{" "}
//                 <span className="text-gray-400 text-sm">
//                   (Uploaded: {doc.uploadedAt})
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import ExpandableRow from "../../components/ui/ExpandableRow";

// const complianceScore = 82;

// const topRisks = [
//   {
//     id: 1,
//     title: "Incomplete HIPAA Risk Assessment",
//     severity: "High",
//     summary: "Risk assessment document is outdated.",
//     details:
//       "The most recent HIPAA risk assessment on file is over 3 years old. OCR guidance recommends regular updates, especially after operational or system changes.",
//   },
//   {
//     id: 2,
//     title: "Missing Business Associate Agreement",
//     severity: "High",
//     summary: "No BAA found for cloud storage vendor.",
//     details:
//       "A signed Business Associate Agreement is required for all vendors handling PHI, including cloud storage and backup providers.",
//   },
//   {
//     id: 3,
//     title: "Policy Review Frequency Unclear",
//     severity: "Medium",
//     summary: "Policies lack review cadence.",
//     details:
//       "Several policies do not specify how often they are reviewed or updated, which may raise compliance concerns during audits.",
//   },
//   {
//     id: 4,
//     title: "Incident Response Training Not Documented",
//     severity: "Medium",
//     summary: "No proof of staff training.",
//     details:
//       "Incident response training should be documented annually to demonstrate preparedness and compliance.",
//   },
//   {
//     id: 5,
//     title: "Encryption Standards Not Explicit",
//     severity: "Low",
//     summary: "Encryption requirements are vague.",
//     details:
//       "While encryption is mentioned, the policy does not specify standards (e.g., AES-256) or scope (at rest vs in transit).",
//   },
// ];

// const missingDocs = [
//   {
//     id: 1,
//     name: "HIPAA Risk Assessment",
//     status: "Incomplete",
//     details: "Document exists but is outdated and missing mitigation updates.",
//   },
//   {
//     id: 2,
//     name: "Vendor BAA – Cloud Provider",
//     status: "Missing",
//     details: "No signed agreement found in uploaded documentation.",
//   },
//   {
//     id: 3,
//     name: "Annual Security Training Record",
//     status: "Incomplete",
//     details: "Training policy exists, but attendance records are missing.",
//   },
// ];

// export default function ComplianceDashboard() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
//       {/* Score */}
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow border border-gray-200 mb-10 text-center">
//         <h2 className="text-lg font-medium text-gray-700 mb-2">
//           Overall Compliance Score
//         </h2>

//         <p className="text-5xl font-semibold text-gray-900 mb-4">
//           {complianceScore}%
//         </p>

//         <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
//           <div
//             className={`h-2 rounded-full ${
//               complianceScore >= 90
//                 ? "bg-green-500"
//                 : complianceScore >= 70
//                   ? "bg-yellow-400"
//                   : "bg-red-500"
//             }`}
//             style={{ width: `${complianceScore}%` }}
//           />
//         </div>

//         <button className="bg-[#3B82A0] text-white px-5 py-2.5 rounded-lg hover:bg-[#256B85] transition">
//           📄 Generate Audit-Ready PDF
//         </button>
//       </div>

//       {/* Two-column layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Top Risks */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-900">
//             Top 5 Compliance Risks
//           </h2>

//           <div className="space-y-3">
//             {topRisks.map((risk) => (
//               <ExpandableRow
//                 key={risk.id}
//                 title={risk.title}
//                 summary={risk.summary}
//                 details={risk.details}
//                 badge={risk.severity}
//                 badgeColor={
//                   risk.severity === "High"
//                     ? "bg-red-100 text-red-700"
//                     : risk.severity === "Medium"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-gray-100 text-gray-700"
//                 }
//               />
//             ))}
//           </div>
//         </div>

//         {/* Missing / Incomplete Docs */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-900">
//             Missing or Incomplete Documents
//           </h2>

//           <div className="space-y-3">
//             {missingDocs.map((doc) => (
//               <ExpandableRow
//                 key={doc.id}
//                 title={doc.name}
//                 summary={doc.status}
//                 details={doc.details}
//                 badge={doc.status}
//                 badgeColor={
//                   doc.status === "Missing"
//                     ? "bg-red-100 text-red-700"
//                     : "bg-yellow-100 text-yellow-700"
//                 }
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Next steps placeholder */}
//       <div className="bg-white border rounded-xl p-6">
//         <h2 className="text-lg font-semibold text-gray-900">
//           Recommended Next Steps
//         </h2>
//         <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
//           <li>Upload missing Business Associate Agreements</li>
//           <li>Update and re-upload HIPAA Risk Assessment</li>
//           <li>Add documentation for annual staff training</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

import ExpandableRow from "../../components/ui/ExpandableRow";

type Severity = "High" | "Medium" | "Low";
type DocStatus = "Missing" | "Incomplete";

const complianceScore = 82;

/* ------------------ Helpers ------------------ */

const severityOrder: Record<Severity, number> = {
  High: 1,
  Medium: 2,
  Low: 3,
};

const sortBySeverity = <T extends { severity: Severity }>(items: T[]) =>
  [...items].sort(
    (a, b) => severityOrder[a.severity] - severityOrder[b.severity]
  );

/* ------------------ Dummy Data ------------------ */

const topRisks = [
  {
    id: 1,
    title: "Incomplete HIPAA Risk Assessment",
    severity: "High" as Severity,
    summary: "Risk assessment document is outdated.",
    details:
      "The most recent HIPAA risk assessment on file is over 3 years old. OCR guidance recommends regular updates, especially after operational or system changes.",
  },
  {
    id: 2,
    title: "Missing Business Associate Agreement",
    severity: "High" as Severity,
    summary: "No BAA found for cloud storage vendor.",
    details:
      "A signed Business Associate Agreement is required for all vendors handling PHI, including cloud storage and backup providers.",
  },
  {
    id: 3,
    title: "Policy Review Frequency Unclear",
    severity: "Medium" as Severity,
    summary: "Policies lack review cadence.",
    details:
      "Several policies do not specify how often they are reviewed or updated, which may raise compliance concerns during audits.",
  },
  {
    id: 4,
    title: "Incident Response Training Not Documented",
    severity: "Medium" as Severity,
    summary: "No proof of staff training.",
    details:
      "Incident response training should be documented annually to demonstrate preparedness and compliance.",
  },
  {
    id: 5,
    title: "Encryption Standards Not Explicit",
    severity: "Low" as Severity,
    summary: "Encryption requirements are vague.",
    details:
      "While encryption is mentioned, the policy does not specify standards (e.g., AES-256) or scope (at rest vs in transit).",
  },
];

const missingDocs = [
  {
    id: 1,
    name: "HIPAA Risk Assessment",
    status: "Incomplete" as DocStatus,
    details: "Document exists but is outdated and missing mitigation updates.",
  },
  {
    id: 2,
    name: "Vendor BAA – Cloud Provider",
    status: "Missing" as DocStatus,
    details: "No signed agreement found in uploaded documentation.",
  },
  {
    id: 3,
    name: "Annual Security Training Record",
    status: "Incomplete" as DocStatus,
    details: "Training policy exists, but attendance records are missing.",
  },
];

const uploadedDocuments = [
  { id: 1, name: "Patient Privacy Policy.pdf", uploadedAt: "2026-01-10" },
  { id: 2, name: "Employee Handbook.docx", uploadedAt: "2026-01-08" },
];

/* ------------------ Page ------------------ */

export default function ComplianceDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      {/* ---------------- Score ---------------- */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow border border-gray-200 text-center">
        <h2 className="text-lg font-medium text-gray-700 mb-2">
          Overall Compliance Score
        </h2>

        <p className="text-5xl font-semibold text-gray-900 mb-4">
          {complianceScore}%
        </p>

        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className={`h-2 rounded-full ${
              complianceScore >= 90
                ? "bg-green-500"
                : complianceScore >= 70
                  ? "bg-yellow-400"
                  : "bg-red-500"
            }`}
            style={{ width: `${complianceScore}%` }}
          />
        </div>

        <button className="bg-[#3B82A0] text-white px-5 py-2.5 rounded-lg hover:bg-[#256B85] transition">
          📄 Generate Audit-Ready PDF
        </button>
      </div>

      {/* ---------------- Risks + Missing Docs ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Risks */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Top Compliance Risks
          </h2>

          {topRisks.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No compliance risks identified based on provided documentation.
            </p>
          ) : (
            <div className="space-y-3">
              {sortBySeverity(topRisks).map((risk) => (
                <ExpandableRow
                  key={risk.id}
                  title={risk.title}
                  summary={risk.summary}
                  details={risk.details}
                  badge={risk.severity}
                  badgeColor={
                    risk.severity === "High"
                      ? "bg-red-100 text-red-700"
                      : risk.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                  }
                />
              ))}
            </div>
          )}
        </section>

        {/* Missing / Incomplete Documents */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Missing or Incomplete Documents
          </h2>

          {missingDocs.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No missing or incomplete documents identified.
            </p>
          ) : (
            <div className="space-y-3">
              {missingDocs.map((doc) => (
                <ExpandableRow
                  key={doc.id}
                  title={doc.name}
                  summary={doc.status}
                  details={doc.details}
                  badge={doc.status}
                  badgeColor={
                    doc.status === "Missing"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ---------------- Next Steps + Documents ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recommended Next Steps */}
        <div className="bg-white border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Recommended Next Steps
          </h2>

          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Upload missing Business Associate Agreements</li>
            <li>Update and re-upload HIPAA Risk Assessment</li>
            <li>Add documentation for annual staff training</li>
          </ul>
        </div>

        {/* Uploaded Documents */}
        <div className="bg-white border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Uploaded Documents
          </h2>

          {uploadedDocuments.length === 0 ? (
            <p className="text-sm text-gray-500 italic mt-2">
              No documents uploaded yet.
            </p>
          ) : (
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
              {uploadedDocuments.map((doc) => (
                <li key={doc.id}>
                  {doc.name}
                  <span className="text-gray-400 text-xs">
                    {" "}
                    • Uploaded {doc.uploadedAt}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
