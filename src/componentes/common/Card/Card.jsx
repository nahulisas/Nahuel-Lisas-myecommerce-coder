import { Button, Icon } from "@mui/material";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ title, price, image, id, addToCart, quantity }) => {
    console.log(quantity);

    return (
        <div className="card">
            <div className="card__image">
                <img src={image} alt="" />
            </div>
            <div className="card__content">
                <h3>{title}</h3>
            </div>
            <div className="card__footer">
                <h3>${price}</h3>
                <Link to={`/itemDetail/${id}`}>
                    <Button
                        variant="text"
                        size="small"
                        sx={{
                            width: "fit-content",
                            textDecoration: "none",
                            ":hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Ver producto
                    </Button>
                </Link>
                <button onClick={addToCart}>agregar al carro</button>
            </div>
        </div>
    );
};

export default Card;
