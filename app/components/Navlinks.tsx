"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Links = [
  {
    name: "Home",
    href: "/dashboard",
  },
  {
    name: "Library",
    href: "/dashboard/library",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
];

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <>
      {Links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={clsx(
            "flex flex-col mb-[1rem] justify-center items-center",
            { "bg-red-600 text-black": pathname === link.href }
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navlinks;
