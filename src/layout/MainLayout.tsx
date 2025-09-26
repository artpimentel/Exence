import type React from "react";

import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
