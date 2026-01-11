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

//   const handleLogout = () => {
//     // For now, just refresh page / reset dummy state
//     window.location.href = "/";
//   };

//   return (
//     <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link
//               href="/"
//               className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
//             >
//               🌍 Travel App Name
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               href="/"
//               className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Dashboard
//             </Link>
//             <Link
//               href="/upload"
//               className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Upload Documents
//             </Link>
//             <Link
//               href="/scan"
//               className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Scan & Reports
//             </Link>
//           </div>

//           {/* User Menu */}
//           <div className="relative">
//             <button
//               onClick={() => setShowUserMenu(!showUserMenu)}
//               className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 hover:bg-gray-100 transition-colors"
//             >
//               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
//                 {userData.first_name?.charAt(0)?.toUpperCase() ||
//                   userData.email?.charAt(0)?.toUpperCase() ||
//                   "?"}
//               </div>
//               <span className="hidden md:block text-gray-700 font-medium">
//                 {userData.first_name && userData.last_name
//                   ? `${userData.first_name} ${userData.last_name}`
//                   : userData.email?.split("@")[0] || "User"}
//               </span>
//               <svg
//                 className="w-4 h-4 text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>

//             {/* Dropdown Menu */}
//             {showUserMenu && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
//                 <Link
//                   href="/profile"
//                   className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                   onClick={() => setShowUserMenu(false)}
//                 >
//                   <svg
//                     className="w-4 h-4 mr-3 text-gray-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Your Profile
//                 </Link>
//                 <Link
//                   href="/edit-profile"
//                   className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                   onClick={() => setShowUserMenu(false)}
//                 >
//                   <svg
//                     className="w-4 h-4 mr-3 text-gray-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                   </svg>
//                   Edit Profile
//                 </Link>
//                 <hr className="my-1" />
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                 >
//                   <svg
//                     className="w-4 h-4 mr-3 text-gray-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Sign out
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden pb-3">
//           <div className="flex space-x-1">
//             <Link
//               href="/"
//               className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Dashboard
//             </Link>
//             <Link
//               href="/upload"
//               className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Upload
//             </Link>
//             <Link
//               href="/scan"
//               className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Scan
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Click outside to close dropdown */}
//       {showUserMenu && (
//         <div
//           className="fixed inset-0 z-10"
//           onClick={() => setShowUserMenu(false)}
//         />
//       )}
//     </nav>
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
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50 dropdown-enter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors text-shadow"
              >
                🏥 ClinicGuard AI
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Dashboard
              </Link>

              <Link
                href="/upload"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Upload Docs
              </Link>

              <Link
                href="/scan"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Scan & Reports
              </Link>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 rounded-full p-2 hover:bg-gray-100 transition-colors focus-visible"
              >
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {initials}
                </div>

                <span className="hidden md:block text-gray-700 font-medium">
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
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 dropdown-enter">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Your Profile
                  </Link>

                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Settings
                  </Link>

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

          {/* Mobile Nav */}
          <div className="md:hidden pb-3">
            <div className="flex space-x-1">
              <Link
                href="/"
                className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/upload"
                className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Upload
              </Link>
              <Link
                href="/scan"
                className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Scan
              </Link>
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
