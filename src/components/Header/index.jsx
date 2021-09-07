import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Index",
  },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b h-24 w-full">
      {NAV_ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <a className="inline-block text-xl px-6 py-2 hover:text-blue-600 focus:text-blue-600 active:text-blue-600">
              {item.label}
            </a>
          </Link>
        );
      })}
    </header>
  );
};
