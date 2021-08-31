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
        <h1>Detalhes do item</h1>
           
        <p>{item?.categoria}</p>
        <p>{item?.subcategoria}</p>
        <p>{item?.tamanho}</p>
        <p>{item?.cor}</p>
        <p>{item?.marca}</p>
        <p>{item?.material}</p>
        <p>{item?.cuidados}</p>
        <p>{item?.preco}</p>
        <p>{item?.dataCompra}</p>
        <p>{item?.status}</p>
        <p>{item?.estacaoLook}</p>
        <p>{item?.ocasioesLook}</p>
        <p>{item?.notasItem}</p>
        <p>{item?.tagsItem}</p>


	
      </section>
    </MemberPage>
  );
};

export default VisualizarItem;