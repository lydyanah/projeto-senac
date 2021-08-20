import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MemberPage from "../../components/memberPage/memberPage";
import Item from "../../models/item";
import itensService from "../../services/itens";
import "./styles.css";

type Params = {
	id: string
}

const VisualizarItem = () => {
  const { id } = useParams<Params>()
	const [item, setItem] = useState<Item>()

	useEffect(() => {
		itensService.ler(+id, item => setItem(item))
  })
  
  return (
    <MemberPage>
      <section className="conteúdoCloset">
           
				<h1>{item?.nome}</h1>
			
				<p>{item?.descricao}</p>
	
      </section>
    </MemberPage>
  );
};

export default VisualizarItem;