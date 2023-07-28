import React from "react";
import DashHeader from "./DashHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <DashHeader />
      {children}
    </div>
  );
};

export default Layout;
