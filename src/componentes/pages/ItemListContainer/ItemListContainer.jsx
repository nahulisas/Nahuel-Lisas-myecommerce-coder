import { useState, useEffect, useContext } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import CartContext from "../../../context/CartContext/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
// import { products } from "../../../products";

const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const productsCollection = collection(db, "products");
        let  docRef = productsCollection;
        if (categoryName) {
            docRef = query(productsCollection, where("category", "==", categoryName))
        }
        getDocs(docRef).then(res =>{
            let products = res.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            })
            setItems(products)
        })
    })


    // agregar al carrito directamente desde el itemListContainer sin entrar al itemDetail del producto
    const { addCart, totalQuantity } = useContext(CartContext);

    const addToCart = (producto) => {
        addCart({ ...producto, quantity: 1 });
    };


    return (
       
        <ItemList
            myProducts={items}
            agregarAlCarrito={addToCart}
            totalQuantity={totalQuantity}
            
            />
       
        
    );
};

export default ItemListContainer;
