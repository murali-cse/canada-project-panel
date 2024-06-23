import Login from "../pages/auth/login/login";
import Settings from "../pages/settings/settings";
import Profile from "../pages/profile/profile";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard/dashboard";
import Hospitals from "../pages/hospitals/hospitals";
import ListHospitals from "../pages/hospitals/list";
import AddHospital from "../pages/hospitals/add";
import Insurance from "../pages/insurance/insurance";
import Users from "../pages/users/users";
import Doctors from "../pages/doctors/doctors";
import Issues from "../pages/issues/issues";
import HospitalDetails from "../pages/hospitals/details";

const Routes = [
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/settings",
    element: <Settings />,
    children: [],
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [],
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        index: true,
      },
      {
        path: "insurance",
        element: <Insurance />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "issues",
        element: <Issues />,
      },
      {
        path: "hospital",
        element: <Hospitals />,
        children: [
          {
            path: "",
            element: <ListHospitals />,
            index: true,
          },
          {
            path: "add",
            element: <AddHospital />,
          },
          {
            path: "details/:id",
            element: <HospitalDetails />,
          },
        ],
      },
    ],
  },
];

export default Routes;
