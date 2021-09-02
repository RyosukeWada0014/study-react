﻿import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import styles from "src/components/Main/Main.module.css";

export function Main(props) {
    
    return (
        <main className={styles.main}>
            <Headline page={props.page}>
                <code className={styles.code}>pages/{props.page}.js</code>
            </Headline>
            <Links />
        </main>
    );
}
