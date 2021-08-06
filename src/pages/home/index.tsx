import { Link } from "react-router-dom";
import ExternalPage from "../../components/ExternalPage/ExternalPage";

const Home = () => {
  return (
    <ExternalPage>
      <div>
        <h1>Organize, crie, planeje!</h1>
        <p>
          Adicione suas roupas e crie looks, planeje o que vestir e tenha acesso
          ao seu guarda-roupa em qualquer lugar que você estiver!{" "}
        </p>
        <Link to="/cadastro">
          <button>Cadastre-se</button>
        </Link>
      </div>

      <div>
        <h1>A plataforma é perfeita para:</h1>
        <h2>Pessoas Ocupadas</h2>
        <p>Planeje o que vestir rapidamente e em qualquer lugar</p>
        <h2>Viajantes</h2>
        <p>Veja o que levar rapidamente e organize suas viagens</p>
        <h2>Fashionistas e Profissionais da moda</h2>
        <p>Crie novos looks, estilos e roupas, melhore o seu estilo</p>
      </div>
    </ExternalPage>
  );
};

export default Home;
