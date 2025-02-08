import { yourlogo } from "@/assets";
import Image from "next/image";
import React from "react";

interface CompanyLogosProps {
  className?: string;
}

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

const CompanyLogos = ({ className }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beatiful content at
      </h5>
      <ul className="flex">
        {companyLogos?.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
