import styles from "src/components/Headline/Headline.module.css";

export function Headline({ page, children, handleReduce }) {
    return (
        <div>
            <h1 className={styles.title}>{page} page</h1>

            <p className={styles.description}>
                アイテムの数は {children}個です。
            </p>

            <button onClick={handleReduce}>減らす</button>
        </div>
    );
}
