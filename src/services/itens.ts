import axios from "axios"
import Item from "../models/item"

const ItensService = {

	lerTodos: (callback: (itens:Item[]) => void) => {
		axios.get<Item[]>('http://localhost:4000/api/itens')
		.then(res => callback(res.data))
    },
    
    ler: (id: number, callback: (item: Item) => void) => {
		axios.get<Item>(`http://localhost:4000/api/itens/${id}`)
		.then(res => callback(res.data))
	},

}

export default ItensService