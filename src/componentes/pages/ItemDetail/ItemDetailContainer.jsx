import ItemDetail from "./ItemDetail";
// import { products } from "../../../products";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../../context/CartContext/CartContext";
import { collection, doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebaseConfig";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { addCart, totalQuantity } = useContext(CartContext);


    useEffect(() => {
        const products = collection(db, "products")
        const docRef = doc(products, id)
        getDoc(docRef).then(res => {
            setItem({...res.data(), id: res.id})
        })
    }, [id]);

    // let agregarAlCarrito = (cantidad) => {
    //     let producto = { ...item, quantity: cantidad };
    //     addCart(producto);
    // };

    const addToCart = (producto) => {
        addCart({ ...producto, quantity: 1 });
    };

    return (
        <ItemDetail
        
            item={item}
            agregarAlCarrito={addToCart}
            totalQuantity={totalQuantity(item.id)}
        />
    );
};

export default ItemDetailContainer;
