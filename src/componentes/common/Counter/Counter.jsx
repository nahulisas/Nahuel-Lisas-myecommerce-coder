import { Button } from "@mui/material";
import { useState } from "react";
import "./counter.css";
import { useParams } from "react-router-dom";

const Counter = ({ stock, agregarAlCarrito }) => {
    let [contador, setContador] = useState(1);

    const { id } = useParams();

    const sumar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        contador > 1 && setContador(contador - 1);
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
                {location.pathname === `/itemDetail/${id}` && (
                    <Button
                        disabled={stock == 0 ? true : false}
                        className="addCart__btn"
                        onClick={() => agregarAlCarrito(contador)}
                    >
                        Agregar Al Carrito
                    </Button>
                )}
            </div>
        </>
    );
};

export default Counter;
