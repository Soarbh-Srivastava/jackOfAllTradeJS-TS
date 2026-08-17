// import React from "react";
// import { createRoot } from "react-dom/client";

// import { createBrowserRouter, Link, Outlet } from "react-router";

// import { RouterProvider } from "react-router/dom";

// const Root = () => {
//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       {/* 🧭 A quick navigation menu that stays on screen across all pages */}
//       <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
//         <Link to="/">Home Page</Link>
//         <Link to="/about">About Page</Link>
//       </nav>

//       <hr />
//       <h1>Root Layout Header</h1>

//       {/* ✅ 2. This placeholder is critical. React Router swaps child elements right here! */}
//       <div
//         style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
//       >
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   return <h1>🏠 Home Page Content</h1>;
// };

// const About = () => {
//   return <h1>ℹ️ About Page Content</h1>;
// };

// // const router = createBrowserRouter([
// //   { path: "/", element: <div>Helloe react router</div> },
// //   { path: "/component", Component: Login },
// // ]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Root,
//     children: [
//       { index: true, Component: Home },
//       { path: "about", Component: About },
//     ],
//   },
// ]);
// const root = document.getElementById("root");

// createRoot(root).render(<RouterProvider router={router} />);

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Setting, Dashboard } from "./DecalrativeMode";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="dashBoard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
