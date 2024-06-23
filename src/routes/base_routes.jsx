import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/not_found";
import AppRoutes from "./routes";

const buildSimpleRoute = (e) => {
  return <Route key={e.path} path={e.path} element={e.element} />;
};

const buildChildrenRoute = (e) => (
  <Route key={e.path} path={e.path} element={e.element}>
    {e.children.map((child) => {
      if (child.children && child.children.length != 0) {
        return buildChildrenRoute(child);
      }

      return (
        <Route
          key={child.path}
          path={child.path}
          element={child.element}
          index={child.index && child.index === true}
        />
      );
    })}
  </Route>
);

const BaseRoutes = () => {
  return (
    <>
      <Routes>
        {AppRoutes.map((e) => {
          if (e.children && e.children.length != 0) {
            return buildChildrenRoute(e);
          }
          return buildSimpleRoute(e);
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default BaseRoutes;
