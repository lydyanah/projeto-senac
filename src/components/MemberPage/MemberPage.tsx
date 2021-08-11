import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import "./styles.css";

type Props = {
  children?: ReactNode;
};

const MemberPage: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <span>
          <img className="logo" src={Logo} alt="logotipo" />
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

export default MemberPage;
