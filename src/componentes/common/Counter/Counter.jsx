import { Button } from "@mui/material";
import { useState } from "react";
import "./counter.css";

const Counter = ({ producto, totalQuantity }) => {
    let [contador, setContador] = useState(totalQuantity);

    const sumar = () => {
        producto.stock >= contador + 1 && setContador(contador + 1);
    };

    const restar = () => {
        contador > 1 && setContador(contador - 1);
        totalQuantity = contador;
    };
    return (
        <>
            <div className="counter__container">
                <div className="counter__quantity__container">
                    <Button onClick={restar}>-</Button>
                    <div className="counter__quiantity">
                        <span>{contador}</span>
                    </div>
                    <Button onClick={sumar}>+</Button>
                </div>
            </div>
        </>
    );
};

export default Counter;
