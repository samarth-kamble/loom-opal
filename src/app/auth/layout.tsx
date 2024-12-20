import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="container h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
