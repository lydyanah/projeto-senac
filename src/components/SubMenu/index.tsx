import { Link } from "react-router-dom";
import "../Page/styles.css";
import "./styles.css";

const SubMenu = () => {
  return (
    <div className="submenu">
      <div className="navbar-content">
        <nav className="menu">
          <Link to="/closet" className="menuItem">
            Perfil
          </Link>
          <Link to="/closet" className="menuItem">
            Closet
          </Link>
          <Link to="/closet" className="menuItem">
            Looks
          </Link>
          <Link to="/closet" className="menuItem">
            Calendário
          </Link>
          <Link to="/closet" className="menuItem">
            Malas
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SubMenu;
