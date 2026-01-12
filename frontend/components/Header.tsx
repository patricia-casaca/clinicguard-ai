// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const Header = () => {
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   // Dummy user for MVP
//   const userData = {
//     first_name: "Sandra",
//     last_name: "Smith",
//     email: "sandra@example.com",
//   };

//   const initials =
//     userData.first_name?.charAt(0)?.toUpperCase() ||
//     userData.email?.charAt(0)?.toUpperCase() ||
//     "?";

//   return (
//     <>
//       <nav className="bg-white shadow-sm border-b sticky top-0 z-50 dropdown-enter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link
//                 href="/"
//                 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors text-shadow"
//               >
//                 🏥 ClinicGuard AI
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-6">
//               <Link
//                 href="/"
//                 className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//               >
//                 Dashboard
//               </Link>

//               <Link
//                 href="/upload"
//                 className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//               >
//                 Upload Docs
//               </Link>

//               <Link
//                 href="/scan"
//                 className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//               >
//                 Scan & Reports
//               </Link>
//             </div>

//             {/* User Menu */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowUserMenu(!showUserMenu)}
//                 className="flex items-center space-x-3 rounded-full p-2 hover:bg-gray-100 transition-colors focus-visible"
//               >
//                 <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
//                   {initials}
//                 </div>

//                 <span className="hidden md:block text-gray-700 font-medium">
//                   {userData.first_name} {userData.last_name}
//                 </span>

//                 <svg
//                   className="w-4 h-4 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {/* Dropdown */}
//               {showUserMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 dropdown-enter">
//                   <Link
//                     href="/profile"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                     onClick={() => setShowUserMenu(false)}
//                   >
//                     Your Profile
//                   </Link>

//                   <Link
//                     href="/settings"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                     onClick={() => setShowUserMenu(false)}
//                   >
//                     Settings
//                   </Link>

//                   <hr className="my-1" />

//                   <button
//                     onClick={() => {
//                       setShowUserMenu(false);
//                       window.location.href = "/";
//                     }}
//                     className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                   >
//                     Sign out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Nav */}
//           <div className="md:hidden pb-3">
//             <div className="flex space-x-1">
//               <Link
//                 href="/"
//                 className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 href="/upload"
//                 className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
//               >
//                 Upload
//               </Link>
//               <Link
//                 href="/scan"
//                 className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
//               >
//                 Scan
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Click outside to close */}
//       {showUserMenu && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={() => setShowUserMenu(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Header;

"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Dummy user for MVP
  const userData = {
    first_name: "Sandra",
    last_name: "Smith",
    email: "sandra@example.com",
  };

  const initials =
    userData.first_name?.charAt(0)?.toUpperCase() ||
    userData.email?.charAt(0)?.toUpperCase() ||
    "?";

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-[#3B82A0] transition-colors"
            >
              🏥 <span className="tracking-tight">ClinicGuard AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { label: "Dashboard", href: "/" },
                { label: "Upload Docs", href: "/upload" },
                { label: "Scan & Reports", href: "/scan" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#3B82A0] flex items-center justify-center text-white font-semibold text-sm">
                  {initials}
                </div>

                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {userData.first_name} {userData.last_name}
                </span>

                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50">
                  {[
                    { label: "Your Profile", href: "/profile" },
                    { label: "Settings", href: "/settings" },
                  ].map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setShowUserMenu(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}

                  <hr className="my-1" />

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      window.location.href = "/";
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-3">
            <div className="flex space-x-1">
              {[
                { label: "Dashboard", href: "/" },
                { label: "Upload", href: "/upload" },
                { label: "Scan", href: "/scan" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex-1 text-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Click outside to close */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </>
  );
};

export default Header;
