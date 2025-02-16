import React, { Children } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const DefaultLayout2 = ({ children }) => {
  return (
    <div>
      {/* nav bar */}

      <Header />
      {/* Content */}
      <main className="main">
        <Outlet />
      </main>
      {/* footer  */}
      <Footer />
    </div>
  );
};
