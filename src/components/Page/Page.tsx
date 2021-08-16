import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./styles.css";

type Props = {
  children?: ReactNode;
};

const Page: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div className="navbar-fixed">
        <div className="navbar-content">
          <Link to="/">
            <img className="logotipo" src={Logo} alt="logotipo" />
          </Link>
          <div className="menu">
            <nav className="menu">
              <Link to="/" className="menuItem">
                Home
              </Link>
              <Link to="/sobre" className="menuItem">
                Sobre
              </Link>
              <Link to="/contato" className="menuItem">
                Contato
              </Link>
              <Link to="/login">
                <button className="login">Entrar</button>
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

export default Page;
