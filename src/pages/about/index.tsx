import Page from "../../components/Page/Page";
import "./styles.css";

const About = () => {
  return (
    <Page>
      <div className="conteúdoSobre">
        <div className="infoSobre">
          <h2>Sobre</h2>
          <p>
            A proposta do Meu Estilo Online é ser uma alternativa aos
            aplicativos de virtualização de guarda-roupas já existentes,
            oferecendo uma plataforma totalmente em português, fácil de utilizar
            e personalizável.
          </p>
        </div>

        <div className="infoDevs">
          <h2>Desenvolvedores</h2>
          <ul className="devs">
            <li>
              <h3>Lidiana Tedeschi</h3>
              <p>gitHub</p>
            </li>
            <li>
              <h3>Arthur Mendes</h3>
              <p>gitHub</p>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default About;
