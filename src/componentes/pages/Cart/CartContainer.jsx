import { useContext } from "react";
import Cart from "./Cart";
import CartContext from "../../../context/CartContext/CartContext";

const CartContainer = () => {
    const { cart, deleteProduct } = useContext(CartContext);
    return <Cart cart={cart} deleteProduct={deleteProduct} />;
};

export default CartContainer;
