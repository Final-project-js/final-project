import React from "react";
import { Route } from "react-router-dom";
// import { InStore } from "../../shopItems/InStore";

export const SectionLayout = ({ component: Component }) => {
  return (
    <Route>
      {/* <InStore /> */}
      <Component />
    </Route>
  );
};
