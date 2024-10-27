import ItemDetail from "./ItemDetail"
import { products} from "../../../products"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const [ item, setItem] = useState({});

  useEffect(()=>{
    let findProduct = products.find(producto => producto.id === id)
    setItem(findProduct)
  }, [id])
  
  return <ItemDetail item={item}/>
}

export default ItemDetailContainer