import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "./ItemList";
import "./itemlistcontainer.css";
import { Container } from "@mui/material";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = fetch("https://fakestoreapi.com/products");
        getProducts
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);

    return <ItemList myProducts={products} />;
};

export default ItemListContainer;
