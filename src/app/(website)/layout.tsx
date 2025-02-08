import React from "react";
import LandingPageNavBar from "./_components/LandingPageNavBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="font-sans bg-n-8 text-n-1 text-base">
      <LandingPageNavBar />
      {children}
    </div>
  );
};

export default Layout;
