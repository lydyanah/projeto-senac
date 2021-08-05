import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
  children?: ReactNode;
};

const ExternalPage: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <span>
          <h1 className="logo">Meu Estilo Online</h1>
        </span>
        <span className="menu">
          <Link to="/" className="menuItem">Home</Link>
          <Link to="/sobre" className="menuItem">Sobre</Link>
          <Link to="/contato" className="menuItem">Contato</Link>
        </span>
        <Link to="/login" className="menuItem">
          <button className="login">Entrar</button>
        </Link>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <p>2021. Meu Estilo Online. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default ExternalPage;
