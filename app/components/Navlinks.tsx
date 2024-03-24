"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const link = [
  { name: "Home", link: "/dashboard" },
  { name: "Library", link: "/dashboard/library" },
  { name: "Settings", link: "/dashboard/settings" },
];
import clsx from "clsx";

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <>
      {link.map((link) => {
        return (
          <Link
            href={link.link}
            key={link.name}
            className={clsx("flex justify-center items-center h-[48px] gap-3", {
              "bg-red-600 text-black": pathname == link.link,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default Navlinks;
