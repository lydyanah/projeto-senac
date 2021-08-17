import Page from "../../components/Page/Page";
import GitHubButton from "react-github-btn";
import lydyanah from "../../assets/images/lydyanah.jpg";
import mendesarthur from "../../assets/images/mendesarthur.jpg";
import "./styles.css";

const About = () => {
  return (
    <Page>
      <section className="conteúdoSobre">
        <section className="infoSobre">
          <h2>Sobre</h2>
          <p>
            A proposta do Meu Estilo Online é ser uma alternativa aos
            aplicativos de virtualização de guarda-roupas já existentes,
            oferecendo uma plataforma totalmente em português, fácil de utilizar
            e personalizável.
          </p>
        </section>

        <section className="infoDevs">
          <h2>Desenvolvedores</h2>
          <ul className="devsLista">
            <li className="devsLista-perfil">
              <img className="fotoPerfil" src={lydyanah} alt="lydyanah" />
              <div className="devInfo">
                <h3>Lidiana Tedeschi</h3>
                <span className="GitHubButton">
                  <GitHubButton
                    href="https://github.com/lydyanah"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-size="large"
                    aria-label="Siga @lydyanah no GitHub"
                  > Seguir @lydyanah
                  </GitHubButton>
                </span>
              </div>
            </li>
            <li className="devsLista-perfil">
              <img className="fotoPerfil" src={mendesarthur} alt="mendesarthur" />
              <div className="devInfo">
                <h3>Arthur Mendes</h3>
                <span className="GitHubButton">
                  <GitHubButton
                    href="https://github.com/mendesarthur"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-size="large"
                    aria-label="Siga @mendesarthur no GitHub"
                  > Seguir @mendesarthur
                  </GitHubButton>
                </span>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </Page>
  );
};

export default About;
