"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "Home",
    href: "/dashboard",
  },
  {
    name: "Settings",
    href: "/settings",
  },
  {
    name: "Library",
    href: "/library",
  },
];

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 mt-[4rem] items-center justify-center w-full">
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx('flex h-[48px] grow border-2 border-red-200  items-center w-[full] justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:md:flex-none md:justify-start md:p-2 md:px-3', {
              'bg-red-600 text-black': pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
