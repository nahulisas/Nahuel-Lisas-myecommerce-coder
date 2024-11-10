import { Button } from "@mui/material";
import { useState } from "react";
import "./counter.css";
import { useContext } from "react";
import CartContext from "../../../context/CartContext/CartContext";

const Counter = ({ producto, totalQuantity }) => {

   
    const { addCart} = useContext(CartContext)

    let [contador, setContador] = useState(totalQuantity);

    const sumar = () => {

        if (producto.stock >= contador + 1 ) {
            setContador(contador + 1 ) 
            addCart({...producto, quantity : 1})
        }
        
    };

    

    const restar = () => {

        if (contador > 1) {
            setContador(contador - 1);
            addCart({...producto, quantity:  - 1 })
        }
    };
    return (
        <>
            <div className="counter__container">
                <div className="counter__quantity__container">
                    <Button onClick={restar} disabled={contador === 1 && true}>-</Button>
                    <div className="counter__quiantity">
                        <span>{contador}</span>
                    </div>
                    <Button onClick={sumar} disabled={contador == producto.stock && true}>+</Button>
                </div>
            </div>
        </>
    );
};

export default Counter;
