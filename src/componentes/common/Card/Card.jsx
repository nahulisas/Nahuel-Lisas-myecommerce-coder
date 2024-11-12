import { Button, IconButton } from "@mui/material";
import "./card.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Card = ({
    title,
    price,
    image,
    id,
    addToCart,
    stock,
    quantityInCart,
}) => {
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
                
                <IconButton
                    size="small"
                    sx={{
                        position: "relative",
                        borderRadius: "5px",
                        background: "steelblue",
                        width: "fit-content",
                        padding: ".5rem",
                        color: "white",
                        ":hover": {
                            backgroundColor: "steelblue",
                        },
                        "&.Mui-disabled": {
                            color: "white",
                            backgroundColor: "lightgray",
                        },
                    }}
                    disabled={quantityInCart >= stock && true}
                    onClick={addToCart}
                >
                    <ShoppingCartOutlinedIcon />
                    {quantityInCart > 0 && (
                        <div className="quantity_in_cart">
                            <span className="">{quantityInCart}</span>
                        </div>
                    )}
                </IconButton>
            </div>
        </div>
    );
};

export default Card;
