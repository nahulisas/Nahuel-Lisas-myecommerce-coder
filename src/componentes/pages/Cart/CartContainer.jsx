import { useContext } from "react";
import Cart from "./Cart";
import CartContext from "../../../context/CartContext/CartContext";

const CartContainer = () => {
    const { cart } = useContext(CartContext);
    return <Cart cart={cart} />;
};

export default CartContainer;
