import { Link } from "@mui/material";
import "./card.css";

const Card = ({ title, price, image }) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={image} alt="" />
            </div>
            <div className="card__content">
                <h3>{title}</h3>
            </div>
            <div className="card__footer">
                <h3>${price}
                <Link sx={{
                    fontSize: "13px",
                    cursor: "pointer"
                    }}>
                    <h4>ver detalle</h4>
                </Link>
                </h3>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Card;
