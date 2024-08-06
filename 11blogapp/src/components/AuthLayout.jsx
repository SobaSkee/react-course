// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// // this page is meant to wrap around any pages that are protected/require authentication
// function Protected({ children, authentication = true }) {
//   const authStatus = useSelector((state) => {
//     state.auth.status;
//   });

//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(true);

//   useEffect(() => {
//     if (authentication && authStatus !== authentication) {
//       navigate("/login");
//     } else if (!authentication && authStatus !== authentication) {
//       // this is for pages that do not require auth (sign up and login) so redirect user to home
//       navigate("/");
//     }
//     setLoader(false);
//   }, [authStatus, authentication, navigate]);

//   return loader ? null : <>{children}</>;
// }

// export default Protected;

import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? null : <>{children}</>;
}

export default Protected;
