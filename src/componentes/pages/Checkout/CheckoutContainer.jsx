import { useContext, useState } from "react";
import Checkout from "./Checkout";
import CartContext from "../../../context/CartContext/CartContext";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Alert, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
    const { cart, getTotal, clearCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const capturarInfo = (evento) => {
        const { name, value } = evento.target;
        setUserInfo({ ...userInfo, [name]: value });
    };
    const funcionDelFormulario = (evento) => {
        evento.preventDefault();

        const order = {
            buyer: userInfo,
            items: cart,
            total: getTotal,
        };

        let refCollection = collection(db, "orders");
        addDoc(refCollection, order).then((res) => {
            setOrderId(res.id);
            clearCart();
        });

        let refCol = collection(db, "products");
        order.items.forEach((product) => {
            let refDoc = doc(refCol, product.id);
            updateDoc(refDoc, { stock: product.stock - product.quantity });
        });
    };

    if (orderId) {
        return (
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
                sx={{
                    width: "500px",
                    margin: "170px auto",
                }}
            >
                Compra confirmada, su codigo de pedido {orderId}
                <Link to="/">
                    <Button>Volver al inicio</Button>
                </Link>
            </Alert>
        );
    }

    return (
        <Checkout
            formFunction={funcionDelFormulario}
            capturarInfo={capturarInfo}
            userInfo={userInfo}
            cart={cart}
            getTotal={getTotal}
        />
    );
};

export default CheckoutContainer;
