import { useNavigate, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import module from "../scss/Layout.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleShowBackArrow = location.pathname === "/";

  return (
    <header className={module.HeaderBox}>
      {handleShowBackArrow ? (
        <h1>Last fm app</h1>
      ) : (
        <BiArrowBack
          size={30}
          onClick={() => navigate(-1)}
        />
      )}
    </header>
  );
};

export default Header;
