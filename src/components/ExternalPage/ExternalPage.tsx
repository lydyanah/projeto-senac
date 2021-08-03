import { Link } from "react-router-dom";
import '../../styles/global.css'

const ExternalPage = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <button>Entrar</button> {/*ir para a página login*/}
      </nav>
      <main>
        <h2>Conteúdo da página</h2>
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  );
};

export default ExternalPage;
