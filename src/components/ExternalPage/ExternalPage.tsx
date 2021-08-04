import { Link } from "react-router-dom";
import "../../styles/global.css";

const ExternalPage = () => {
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
        <h2>Conteúdo da página</h2>
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
};

export default ExternalPage;
