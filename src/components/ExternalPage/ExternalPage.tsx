import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";

type Props = {
  children?: ReactNode
}

const ExternalPage: FunctionComponent<Props> = ({children}) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">
          <button>Entrar</button>
        </Link>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
};

export default ExternalPage;
