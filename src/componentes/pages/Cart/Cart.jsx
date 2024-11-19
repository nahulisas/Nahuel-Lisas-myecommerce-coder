import { Icon } from "@mui/material";
import Counter from "../../common/Counter/Counter";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteProduct, clearCart, totalQuantity, getTotal }) => {
    return (
        <>
            <div className="cart__container">
                <h2 className="cart__title">Carrito de compras</h2>
                <div className="cart__subTitle">
                    <h3>Productos</h3>
                </div>
                {cart.length > 1 && (
                    <div onClick={clearCart} className="clear__cart">
                        <Icon>
                            <DeleteIcon sx={{ width: "1.2rem" }} />
                        </Icon>
                        <p>Vaciar carrito</p>
                    </div>
                )}
                <div className="cart__products__container">
                    <div className="cart__products">
                        {cart.length == 0 && (
                            <p className="empty">el carrito esta vacio</p>
                        )}
                        {cart.map((producto) => {
                            return (
                                <div
                                    key={producto.id}
                                    className="product__cart__item"
                                >
                                    <Link
                                        to={`/itemDetail/${producto.id}`}
                                        className="product__link"
                                    >
                                        <div className="product__image">
                                            <img
                                                src={producto.imageUrl}
                                                alt={producto.title}
                                            />
                                        </div>
                                    </Link>
                                    <Link
                                        to={`/itemDetail/${producto.id}`}
                                        className="product__link"
                                    >
                                        <div className="product__title">
                                            {producto.title}
                                        </div>
                                    </Link>
                                    <div className="product__counter">
                                        <Counter
                                            producto={producto}
                                            totalQuantity={totalQuantity(
                                                producto.id
                                            )}
                                        />
                                    </div>
                                    <div className="product__totalPay">
                                        ${producto.price * producto.quantity}
                                    </div>
                                    <Icon>
                                        <DeleteIcon
                                            onClick={() =>
                                                deleteProduct(producto.id)
                                            }
                                            className="product__delete"
                                        />
                                    </Icon>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cart__totalToPay">
                        <div className="total">
                            <p>Total</p>
                            <p>${getTotal}</p>
                        </div>
                        <Link to={cart.length > 0 && "/checkout"}>
                            <button
                                className={
                                    cart.length > 0
                                        ? "totalPay_btn"
                                        : "totalPay_btn disable"
                                }
                            >
                                comprar
                            </button>
                        </Link>

                        <Link to="/">
                            <button className="totalPay_btn">
                                continuar comprando
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
