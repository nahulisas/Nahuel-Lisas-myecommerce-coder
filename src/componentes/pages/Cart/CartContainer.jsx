import { useContext } from "react";
import Cart from "./Cart";
import CartContext from "../../../context/CartContext/CartContext";

const CartContainer = () => {
    const { cart, deleteProduct, totalQuantity, clearCart, modificarCantidad } =
        useContext(CartContext);

    return (
        <Cart
            cart={cart}
            deleteProduct={deleteProduct}
            totalQuantity={totalQuantity}
            clearCart={clearCart}
            modificarCantidad={modificarCantidad}
        />
    );
};

export default CartContainer;
