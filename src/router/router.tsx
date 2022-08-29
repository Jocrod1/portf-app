//React imports
import { Suspense, lazy } from "react";

//Router Components
import {
  BrowserRouter as AppRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//Routes
import RoutesApp from "./routes";

const Router = () => {
  return (
    <AppRouter>
      <Routes>
        {RoutesApp.Routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.component} />
        ))}
        <Route path="/*" element={"ERROR"} />
      </Routes>
    </AppRouter>
  );
};

export default Router;
