import { Link } from "react-router-dom";
import MemberPage from "../../components/MemberPage/MemberPage";

const Closet = () => {
  return (
    <MemberPage>
      <h1>Aqui vai aparecer todos os itens</h1>
      <Link to="/adicionar-item">
        <button className="adicionarItem">Adicionar Item</button>
      </Link>
    </MemberPage>
  );
};

export default Closet;
