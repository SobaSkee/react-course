// import React from "react";
// import Container from "../container/Container";
// import Logo from "../Logo";
// import { Link } from "react-router-dom";
// import LogoutBtn from "./LogoutBtn";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();

//   // authStatus is true by default which means you are logged in
//   const navItems = [
//     {
//       name: "Home",
//       slug: "/",
//       active: true, // always true so user can always access this page
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus, // will not allow user to access if authStatus is true since they are already logged in
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus, // same reason as login
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus, // allow only authenticated users to access posts page
//     },
//     {
//       name: "Add Posts",
//       slug: "/all-posts",
//       active: authStatus,
//     },
//   ];

//   return (
//     <header className="py-3 shadow bg-gray-500">
//       <Container>
//         <nav className="flex">
//           <div className="mr-4">
//             <Link to="/">
//               <Logo />
//             </Link>
//           </div>
//           <ul className="flex ml-auto">
//             {navItems.map((item) => {
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null;
//             })}
//             {auth.status && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
