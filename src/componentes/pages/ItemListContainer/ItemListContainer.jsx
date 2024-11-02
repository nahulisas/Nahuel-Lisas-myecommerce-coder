import { useState, useEffect, useContext } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../products";
import { useParams } from "react-router-dom";

import CartContext from "../../../context/CartContext/CartContext";

const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const getProducts = fetch("https://fakestoreapi.com/products");
    //     getProducts
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setProducts(res);
    //         });
    // }, []);

    useEffect(() => {
        const filters = products.filter(
            (products) => products.category === categoryName
        );
        const getProducts = new Promise((resolve) =>
            resolve(categoryName ? filters : products)
        );
        getProducts.then((res) => setItems(res));
    }, [categoryName]);

    // agregar al carrito directamente desde el itemListContainer sin entrar al itemDetail del producto
    const { addCart } = useContext(CartContext);

    const addToCart = (producto) => {
        addCart({ ...producto, quantity: 1 });
    };

    return <ItemList myProducts={items} agregarAlCarrito={addToCart} />;
};

export default ItemListContainer;
