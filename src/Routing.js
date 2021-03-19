import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutes } from "./config/routes";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes.map(([key, route]) => (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            render={() => {
              const ComponentToRender = route.component;
              return <ComponentToRender></ComponentToRender>;
            }}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
