import { Icon } from "@mui/material";
import Counter from "../../common/Counter/Counter";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({ cart }) => {
    return (
        <>
            <div className="cart__container">
                <h2 className="cart__title">Carrito de compras</h2>
                <h3>Productos</h3>
                {cart.map((producto) => {
                    return (
                        <div key={producto.id} className="product__cart__item">
                            <div className="product__image">
                                <img
                                    src={producto.imageUrl}
                                    alt={producto.title}
                                />
                            </div>
                            <div className="product__title">
                                {producto.title}
                            </div>
                            <div className="product__counter">
                                <Counter stock={producto.stock} />
                            </div>
                            <div className="product__totalPay">
                                {producto.price}
                            </div>
                            <Icon className="product__delete">
                                <DeleteIcon />
                            </Icon>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cart;
