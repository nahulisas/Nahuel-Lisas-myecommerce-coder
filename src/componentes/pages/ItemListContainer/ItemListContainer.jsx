import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "./ItemList";
import {products} from "../../../products"


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const getProducts = fetch("https://fakestoreapi.com/products");
    //     getProducts
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setProducts(res);
    //         });
    // }, []);
    useEffect(()=>{
        const getProducts = new Promise((resolve => resolve(products)))
        getProducts.then(res => setItems(res))
        
    })

    return <ItemList myProducts={items} />;
};

export default ItemListContainer;
