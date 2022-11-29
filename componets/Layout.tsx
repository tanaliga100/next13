import React from "react";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Navbar";

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
