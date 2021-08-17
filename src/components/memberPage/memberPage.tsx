import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "../Page/styles.css";
import "./styles.css";

type Props = {
  children?: ReactNode;
};

const MemberPage: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div className="navbar-fixed">
        <div className="navbar-content">
          <Link to="/closet">
            <img className="logotipo" src={Logo} alt="logotipo" />
          </Link>
          <div className="menu">
            <nav className="menu">
              <Link to="/closet" className="menuItem">
               Perfil
              </Link>
              <Link to="/closet" className="menuItem">
                Configurações
              </Link>
              <Link to="/" className="menuItem">
                Sair
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <main>
        {children}
      </main>
      <footer>
        <p>2021. Meu Estilo Online. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default MemberPage;
