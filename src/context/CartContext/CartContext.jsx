// importar el createContext de react
import { createContext, useState } from "react";
// exporetar el contexto
export const CartContext = createContext();

// crear y exportar el componente proveedor del contexto y debe recibir como parametro el children para luego retornarlo
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addCart = (producto) => {
        let isInCart = cart.some(
            (productoInCart) => productoInCart.id == producto.id
        );
        
        if (isInCart) {
            let nuevoArray = cart.map((elemento) => {
                if (elemento.id === producto.id) {
                    return {
                        ...elemento,
                        quantity: elemento.quantity + producto.quantity,
                    };
                } else {
                    return elemento;
                }
            });
            
            setCart(nuevoArray);
        } else {
            setCart([...cart, producto]);
        }
    };


    
    
    const deleteProduct = (id) => {
        let productDeleted = cart.filter((productos) => productos.id !== id);
        setCart(productDeleted);
    };


    const totalQuantity = (id) => {
        let quiantityInCart = cart.find((producto) => producto.id === id);
        return quiantityInCart ? quiantityInCart.quantity : 0;
    };


    const getTotal = cart.reduce((acc, producto) => {
        return (acc + (producto.price * producto.quantity))
    }  ,0).toLocaleString("es-AR", {
        
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })


    const clearCart = () => {
        setCart([]);
    };

    

    // data es un objeto que recibe todas las funciones que desee pasar al value para luego usarlas en la app
    let data = {
        cart,
        addCart,
        deleteProduct,
        totalQuantity,
        clearCart,
        getTotal,
        
    };

    // el componente debe retornar el contexto en su metodo Provider
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
