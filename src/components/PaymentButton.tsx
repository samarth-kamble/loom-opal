import React from "react";
import { Button } from "./ui/button";
import Loader from "./Loader/Loader";

const PaymentButton = () => {
  const isProcessing = false;
  return (
    <Button className="text-sm w-full" onClick={() => {}}>
      <Loader color="#000" state={isProcessing} />
      Upgrade
    </Button>
  );
};

export default PaymentButton;
