import React from "react";
import Section from "./Secttion";
import { discordBlack, facebook, instagram, telegram, twitter } from "@/assets";
import Link from "next/link";
import Image from "next/image";

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col ">
        &copy; {new Date().getFullYear()} All rights reserved.
        <ul className="flex gap-5 flex-wrap">
          {socials?.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <Image
                src={item.iconUrl}
                width={16}
                height={16}
                alt={item.title}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
