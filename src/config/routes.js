import { lazy } from "react";

export const routes = {
  loginpage: {
    path: "/",
    component: lazy(() => import("../pages/Loginpage/Loginpage")),
    exact: true,
    authRoute: true,
  },
  player_score: {
    path: "/player-score",
    component: lazy(() => import("../pages/ScorePage/ScorePage")),
    exact: true,
    authRoute: true,
    header: "auth",
  },
};

export const renderRoutes = Object.entries(routes);
