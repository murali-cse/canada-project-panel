import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Hospitals from "./pages/hospitals";
import Insurance from "./pages/insurance";
import Users from "./pages/users";
import Doctors from "./pages/doctors";
import Issues from "./pages/issues";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route element={<Dashboard />} index />
          <Route path="hospitals" element={<Hospitals />} index />
          <Route path="insurance" element={<Insurance />} index />
          <Route path="users" element={<Users />} index />
          <Route path="doctors" element={<Doctors />} index />
          <Route path="issues" element={<Issues />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
