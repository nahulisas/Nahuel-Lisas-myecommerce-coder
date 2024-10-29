import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../products";
import { useParams } from "react-router-dom";

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

    return <ItemList myProducts={items} />;
};

export default ItemListContainer;
