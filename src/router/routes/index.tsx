import { lazy } from "react";

const PageTitle = "Jocrod Portfolio";

const DefaultRoute = "/";

const Routes: Array<any> = [
  {
    path: "/",
    component: lazy(() => import("@pages/Home/Home")),
  },
];

export default { PageTitle, DefaultRoute, Routes };
