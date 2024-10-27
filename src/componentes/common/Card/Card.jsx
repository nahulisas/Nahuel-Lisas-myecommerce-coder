import { Button } from "@mui/material";
import "./card.css";
import { Link } from "react-router-dom";


const Card = ({ title, price, image, id  }) => {

    
    return (
        <div className="card">
            
            <div className="card__image">
                <img src={image} alt="" />
            </div>
            <div className="card__content">
                <h3>{title}</h3>
            </div>
            <div className="card__footer">
                <h3>
                ${price}
                </h3>
                <Link to={`/itemDetail/${id}`}>
                    <Button variant="text" size="small" sx={{margin: "0", padding: "0"}}>ver detalle</Button>
                </Link>
            <Button variant="outlined" size="small" sx={{marginTop: "1rem"}} >Add to Cart</Button>
            </div>
        </div>
    );
};

export default Card;
