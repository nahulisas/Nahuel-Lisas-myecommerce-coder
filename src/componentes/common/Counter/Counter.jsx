import { Button } from "@mui/material";
import { useState } from "react";
import "./counter.css";

const Counter = ({ agregarAlCarrito }) => {
    let [contador, setContador] = useState(1);

    const sumar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        contador > 1 && setContador(contador - 1);
    };
    return (
        <>
            <div className="contador__container">
                <Button onClick={restar}>-</Button>
                <div>{contador}</div>
                <Button onClick={sumar}>+</Button>
                <Button onClick={() => agregarAlCarrito(contador)}>
                    Agregar Al Carrito
                </Button>
            </div>
        </>
    );
};

export default Counter;
