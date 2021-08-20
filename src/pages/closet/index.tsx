import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MemberPage from "../../components/memberPage/memberPage";
import SubMenu from "../../components/SubMenu";
import Item from "../../models/item";
import itensService from "../../services/itens";
import "./styles.css";

const Closet = () => {
  const [itens, setItens] = useState<Item[]>([]);

  useEffect(() => {
    itensService.lerTodos((itens) => setItens(itens));
  });

  return (
    <MemberPage>
      <SubMenu />
      <section className="conteúdoCloset">
        <h1>Aqui vai aparecer todos os itens</h1>
        <ul className="lista-itens">
          {itens.map((item) => {
            return <li key={item.id}>{item.nome}</li>;
          })}
        </ul>

        <Link to="/adicionar-item" className="button">
          Adicionar Item
        </Link>
      </section>
    </MemberPage>
  );
};

export default Closet;
