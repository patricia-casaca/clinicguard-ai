import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "ClinicGuard AI",
  description: "Audit-ready compliance intelligence for clinics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
