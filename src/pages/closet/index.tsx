import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MemberPage from "../../components/memberPage/memberPage";
import SubMenu from "../../components/SubMenu";
import Item from "../../models/item";
import itensService from "../../services/itens";
import "./styles.css";

type Params = {
  id: string;
};

const Closet = () => {
  const { id } = useParams<Params>();
  const [itens, setItens] = useState<Item[]>([]);

  useEffect(() => {
    itensService.lerTodos((itens) => setItens(itens));
  });

  return (
    <MemberPage>
      <SubMenu />
      <section className="conteúdoCloset">
        <h1>Aqui vai aparecer todos os itens</h1>

        <ul>
          {itens.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/itens/${item.id}`}>{item.nome}</Link>
              </li>
            );
          })}
        </ul>

        <Link to="/adicionar-item">
          Adicionar Item
        </Link>
      </section>
    </MemberPage>
  );
};

export default Closet;
