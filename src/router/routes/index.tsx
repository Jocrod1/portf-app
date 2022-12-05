import Home from "../../Pages/Home/Home";

const PageTitle = "Jocrod Portfolio";

const DefaultRoute = "/";

const Routes: Array<any> = [
  {
    path: "/",
    component: <Home />,
  },
];

export default { PageTitle, DefaultRoute, Routes };
