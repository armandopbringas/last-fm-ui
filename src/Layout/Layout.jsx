import Header from "../components/Header";
import styles from "../scss/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.BorderBox}>
      <Header />
      <div className={styles.Box}>{children}</div>
    </div>
  );
};

export default Layout;
