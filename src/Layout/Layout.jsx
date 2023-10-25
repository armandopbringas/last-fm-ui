import Header from "../components/Header";
import styles from "../scss/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.Box}>
      <Header />
      {children}
    </div>
  );
}
 
export default Layout;