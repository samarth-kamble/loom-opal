import { loading } from "@/assets";
import Image from "next/image";
import React from "react";

interface GeneratingProps {
  className?: string;
}

const Generating = ({ className }: GeneratingProps) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <Image src={loading} className="w-5 h-5 mr-4" alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;
