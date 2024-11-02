// importar el createContext de react
import { createContext, useState } from "react";
// exporetar el contexto
export const CartContext = createContext();

// crear y exportar el componente proveedor del contexto y debe recibir como parametro el children para luego retornarlo
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (producto) => {
        setCart([...cart, producto]);
    };
    console.log(cart);

    // data es un objeto que recibe todas las funciones que desee pasar al value para luego usarlas en la app
    let data = { cart, addCart };

    // el componente debe retornar el contexto en su metodo Provider
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
