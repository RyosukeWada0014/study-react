import styles from "src/components/Header/Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
    { href: "/posts", label: "Posts" },
    {
        href: "/about",
        label: "About",
    },
];

export const Header = () => {
    return (
        <header className={styles.header}>
            {NAV_ITEMS.map((item) => {
                return (
                    <Link href={item.href} key={item.href}>
                        <a className={styles.anchor}>{item.label}</a>
                    </Link>
                );
            })}
        </header>
    );
};
