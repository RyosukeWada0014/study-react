import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "./Main.module.css";

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
