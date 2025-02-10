import React from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

const CustomComponent = ({ prop1, children }) => {
  return (
    <div>
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default CustomComponent;
