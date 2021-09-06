import styles from "src/components/Layout/Layout.module.css";

export const Layout = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
