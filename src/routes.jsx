import React from "react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard/dashboard";
import Hospitals from "./pages/hospitals/hospitals";
import Insurance from "./pages/insurance/insurance";
import Users from "./pages/users/users";
import Doctors from "./pages/doctors/doctors";
import Issues from "./pages/issues/issues";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/login";
import Settings from "./pages/settings/settings";
import Profile from "./pages/profile/profile";

const BaseRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />}>
          <Route element={<Dashboard />} index />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="users" element={<Users />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="issues" element={<Issues />} />
        </Route>
      </Routes>
    </>
  );
};

export default BaseRoutes;
