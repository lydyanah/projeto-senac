import { Link } from "react-router-dom";
import MemberPage from "../../components/memberPage/memberPage";

const Closet = () => {
  return (
    <MemberPage>
      <h1>Aqui vai aparecer todos os itens</h1>
      <Link to="/adicionar-item" className="button"> Entrar</Link>
    </MemberPage>
  );
};

export default Closet;
