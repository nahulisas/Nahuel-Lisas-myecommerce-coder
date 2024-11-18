import { Link } from "react-router-dom";
import CheckoutCard from "../../common/CheckoutCard/CheckoutCard";
import "./checkout.css";
const Checkout = ({ formFunction, capturarInfo, cart, getTotal }) => {
    return (
        <>
            <div className="checkout__container">
                <div className="payment__info">
                    <h2>Confirmar compra</h2>
                    <form action="" onSubmit={formFunction}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            onChange={capturarInfo}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={capturarInfo}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Numero de telefono"
                            name="phoneNumber"
                            onChange={capturarInfo}
                            required
                        />

                        <button className="form-btn" type="submit">
                            finalizar compra
                        </button>
                        <Link to="/cart">
                            <button className="form-btn" type="button">
                                cancelar
                            </button>
                        </Link>
                    </form>
                </div>
                <div className="order__sumary">
                    <h2>En carrito</h2>
                    <div className="product_in_cart">
                        {cart.map((item) => {
                            return <CheckoutCard key={item.key} item={item} />;
                        })}
                    </div>
                    <div className="total">
                        <h4>TOTAL A PAGAR : ${getTotal}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
