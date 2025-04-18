import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="font-sans bg-n-8 text-n-1 text-base">{children}</div>;
};

export default Layout;
