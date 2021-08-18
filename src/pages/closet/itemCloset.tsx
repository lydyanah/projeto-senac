
import { Link } from "react-router-dom";
import MemberPage from "../../components/memberPage/memberPage";
import "./styles.css";

const VisualizarItem = () => {
  return (
    <MemberPage>
      <section className="conteúdoCloset">
      <h1>Aqui vai aparecer todos os itens</h1>
      <Link to="/adicionar-item" className="button">
        Adicionar Item
        </Link>
      </section>
    </MemberPage>
  );
};

export default VisualizarItem;