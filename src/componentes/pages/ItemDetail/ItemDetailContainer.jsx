import ItemDetail from "./ItemDetail";
import { products } from "../../../products";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../../context/CartContext/CartContext";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    const { addCart, totalQuantity } = useContext(CartContext);

    useEffect(() => {
        let findProduct = products.find((producto) => producto.id === id);
        setItem(findProduct);
    }, [id]);

    let agregarAlCarrito = (cantidad) => {
        let producto = { ...item, quantity: cantidad };
        addCart(producto);
    };

    return (
        <ItemDetail
            item={item}
            agregarAlCarrito={agregarAlCarrito}
            totalQuantity={totalQuantity}
        />
    );
};

export default ItemDetailContainer;
