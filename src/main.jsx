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
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route element={<Dashboard />} index />
            <Route path="hospitals" element={<Hospitals />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="users" element={<Users />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="issues" element={<Issues />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
