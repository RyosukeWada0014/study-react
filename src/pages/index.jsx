import Head from "next/head";
import { useCallback, useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
    const foo = 1;
    const handleClick = useCallback((e) => {
        e.preventDefault();
        console.log(e.target.href);
        alert(foo);
    }, []);

    useEffect(() => {
        console.log("マウント時");
        document.body.style.backgroundColor = "lightblue";
        return () => {
            console.log("アンマウント時");
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Index Page</title>
            </Head>
            <Header />
            <a href="/about" onClick={handleClick}>
                ボタン
            </a>
            <Main page="index" />
            <Footer />
        </div>
    );
}
