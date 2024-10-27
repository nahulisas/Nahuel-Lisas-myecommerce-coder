import { Button } from "@mui/material";
import { useState } from "react"

const Counter = () => {

    let [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        contador != 0 ? setContador(contador - 1) : alert("0 es el minimo")
    }
  return (
    <>
    <Button onClick={restar}>-</Button>
    <div>{contador}</div>
    <Button onClick={sumar}>+</Button>
    </>
  )
}

export default Counter