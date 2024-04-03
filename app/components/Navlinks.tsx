import Link from "next/link";
import clsx from "clsx";

const links = [
  {
    name: "Home",
    href: "/dashboard",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
  {
    name: "Library",
    href: "/dashboard/library",
  },
];

const Navlinks = () => {
  return (
    <div className="flex flex-col gap-4 mt-[4rem]">
      {links.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
