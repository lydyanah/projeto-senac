import { Link } from "react-router-dom";
import MemberPage from "../../components/memberPage/memberPage";
import SubMenu from "../../components/SubMenu";
import "./styles.css";

const Closet = () => {
  return (
    <MemberPage>
      <SubMenu />
      <section className="conteúdoCloset">
        <h1>Aqui vai aparecer todos os itens</h1>
        <Link to="/adicionar-item" className="button">
          Adicionar Item
        </Link>
      </section>
    </MemberPage>
  );
};

export default Closet;
