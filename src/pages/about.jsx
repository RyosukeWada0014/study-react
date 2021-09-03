import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function About({
    isShow,
    handleClick,
    handleDisplay,
    array,
    text,
    handleChange,
    handleAdd,
    doubleCount,
}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Page</title>
            </Head>
            <Header />
            {isShow ? <h1>{doubleCount}</h1> : null}
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
            <Main page="about" />
            <Footer />
        </div>
    );
}
