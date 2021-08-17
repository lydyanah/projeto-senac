import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import "./styles.css";

const Home = () => {
  return (
    <Page>
      <section className="conteúdoHome">
        <section className="infoGeral">
          <h1>Organize, crie, planeje!</h1>
          <p>
            Adicione suas roupas e crie looks, planeje o que vestir e tenha
            acesso ao seu guarda-roupa em qualquer lugar que você estiver!
          </p>
          <Link to="/cadastro" className="button">Cadastre-se</Link>
        </section>

        <section className="públicoAlvo">
          <h2>A plataforma é perfeita para:</h2>
          <ul className="públicoAlvo-lista">
            <li className="públicoAlvo-item">
              <h3>Pessoas Ocupadas</h3>
              <p>Planeje o que vestir rapidamente e em qualquer lugar</p>
            </li>
            <li className="públicoAlvo-item">
              <h3>Viajantes</h3>
              <p>Veja o que levar rapidamente e organize suas viagens</p>
            </li>
            <li className="públicoAlvo-item">
              <h3>Fashionistas e Profissionais da moda</h3>
              <p>Crie novos looks, estilos e roupas, melhore o seu estilo</p>
            </li>
          </ul>
        </section>

        <section className="recursos">
          <h2>Recursos</h2>
          <ul className="recursos-lista">
            <li className="recursos-item">
              <h3>Closet</h3>
              <p>
                Cadastre suas roupas, sapatos e acessórios e veja tudo o que
                você tem facilmente
              </p>
            </li>
            <li className="recursos-item">
              <h3>Looks</h3>
              <p>Crie e guarde combinações</p>
            </li>
            <li className="recursos-item">
              <h3>Calendário</h3>
              <p>Planeje o que vestir antes de sair da cama</p>
            </li>
            <li className="recursos-item">
              <h3>Malas</h3>
              <p>Planeje o que levar em suas viagens</p>
            </li>
          </ul>
        </section>
      </section>
    </Page>
  );
};

export default Home;
