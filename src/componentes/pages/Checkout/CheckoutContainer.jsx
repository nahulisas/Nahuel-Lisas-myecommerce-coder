import { useContext, useState } from "react"
import Checkout from "./Checkout"
import CartContext from "../../../context/CartContext/CartContext"
import {collection, addDoc } from "firebase/firestore"
import { db } from "../../../firebaseConfig"


const CheckoutContainer = () => {

  const {cart, getTotal, clearCart} = useContext(CartContext)

  const [orderId , setOrderId] = useState(null)

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    })

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

        

      };

  if (orderId) {
    return console.log(`gracias por tu compra tu ticket es : ${orderId}`);
    
  }

  return (
    <Checkout
      formFunction={funcionDelFormulario}
      capturarInfo={capturarInfo}
      userInfo={userInfo}
      cart={cart}

    />
  )
}

export default CheckoutContainer