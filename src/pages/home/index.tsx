import { Link } from "react-router-dom";
import ExternalPage from "../../components/ExternalPage/ExternalPage";

const Home = () => {
  return (
    <ExternalPage>
      <div>
        <h1>Organize, crie, planeje!</h1>
        <p>Adicione suas roupas e crie looks, planeje o que vestir e
          tenha acesso ao seu guarda-roupa em qualquer lugar que você estiver! </p>
      </div>
      <Link to="/cadastro">
          <button>Cadastre-se</button>
      </Link>
    </ExternalPage>
  
  );
};

export default Home;
