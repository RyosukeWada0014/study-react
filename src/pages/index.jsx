import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import styles from "src/styles/Home.module.css";

export default function Home() {
    const { count, isShow, handleClick, handleDisplay } = useCounter();
    const { array, text, handleChange, handleAdd } = useInputArray();
    useBgLightBlue();

    return (
        <div className={styles.container}>
            <Head>
                <title>Index Page</title>
            </Head>
            <Header />
            {isShow ? <h1>{count}</h1> : null}
            <button onClick={handleClick}>ボタン</button>
            <button onClick={handleDisplay}>
                {isShow ? "非表示" : "表示"}
            </button>
            <button onClick={handleAdd}>追加</button>
            <input type="text" value={text} onChange={handleChange} />
            <ul>
                {array.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
            <Main page="index" />
            <Footer />
        </div>
    );
}
