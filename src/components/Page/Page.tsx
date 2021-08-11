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
      <body>
        <div className="navbar">
          <Link to="/">
            <img className="logo" src={Logo} alt="logotipo" />
          </Link>
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
          </nav>
          <Link to="/login">
            <button className="login">Entrar</button>
          </Link>
        </div>
        <main>
          {children}
        </main>
        <footer>
          <p>2021. Meu Estilo Online. Todos os direitos reservados.</p>
        </footer>
      </body>
    </>
  );
};

export default Page;
