import React from "react";
import LandingPageNavBar from "./_components/LandingPageNavBar";
import { MaxWidthWrapper } from "./_components/MaxWidthWrapper";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col py-10 px-10 xl:px-0 container">
        <LandingPageNavBar />
        {children}
      </div>
    </MaxWidthWrapper>
  );
};

export default Layout;
