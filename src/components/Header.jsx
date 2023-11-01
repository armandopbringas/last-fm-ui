import { useNavigate, useLocation, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styles from "../scss/Layout.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleShowBackArrow = location.pathname === "/";

  return (
    <header className={styles.HeaderBox}>
      {handleShowBackArrow ? (
        <nav className={styles.navBox}>
          <h1>Last fm app</h1>
          <Link to="/profile" className={styles.textLink}>
            My profile
          </Link>
        </nav>
      ) : (
        <BiArrowBack size={30} onClick={() => navigate(-1)} />
      )}
    </header>
  );
};

export default Header;
