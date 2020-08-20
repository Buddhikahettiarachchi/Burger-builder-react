import React from "react";

import Aux from "../../hoc/Aux";

import Classes from "./Layout.module.css"

const layout = (props) => { 
  return (
    <Aux>
      <div>Toolbar, sideDrawer, Backdrop </div>
      <main className={Classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
