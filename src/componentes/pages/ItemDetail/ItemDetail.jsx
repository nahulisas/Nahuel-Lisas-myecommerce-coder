import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./itemdetail.css";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";

const ItemDetail = ({ item, agregarAlCarrito, totalQuantity }) => {
    return (
        <>
            <section className="item__detail__container">
                <div className="item__detail__product">
                    <div className="item__detail__image">
                        <img src={item.imageUrl} alt={item.title} />
                    </div>
                    <div className="item__detail__detail">
                        <div className="item__detail__title">
                            <h3>{`${item.title} ${item.description} `}</h3>
                        </div>
                        <div className="item__detail__price">
                            <p>Precio especial</p>
                            <h4>${item.price}</h4>
                        </div>

                        <div className="add_to_cart">
                            <Button
                                className="item_detail_btn"
                                onClick={() => agregarAlCarrito(item)}
                                disabled={totalQuantity == item.stock && true}
                                sx={{
                                    padding: "7px",
                                    marginRight: "20px",
                                    border: "1px solid steelblue",
                                    "&.Mui-disabled": {
                                        borderColor: "lightgray",
                                        background: "lightgray",
                                        color: "white",
                                    },
                                }}
                            >
                                Agregar al carrito
                            </Button>
                            {totalQuantity > 0 && (
                                <Link className="link" to={"/cart"}>
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
                                    >
                                        <ShoppingCartOutlinedIcon />
                                        {totalQuantity > 0 && (
                                            <div className="quantity_in_cart">
                                                <span className="">
                                                    {totalQuantity}
                                                </span>
                                            </div>
                                        )}
                                    </IconButton>
                                </Link>
                            )}
                        </div>
                        <div className="item__detail__info">
                            <div className="item__detail__icon">
                                <Icon>
                                    <GppGoodIcon></GppGoodIcon>
                                </Icon>
                                <Typography>Garantia por 12 meses</Typography>
                            </div>
                            {item.stock > 0 ? (
                                <Box className="item__detail__icon">
                                    <Icon>
                                        <CheckIcon></CheckIcon>
                                    </Icon>
                                    <Typography>Stock disponible</Typography>
                                </Box>
                            ) : (
                                <Box
                                    className="item__detail__icon"
                                    sx={{
                                        color: "red",
                                    }}
                                >
                                    <Icon>
                                        <CloseIcon></CloseIcon>
                                    </Icon>
                                    <Typography>Sin Stock</Typography>
                                </Box>
                            )}
                            <div className="item__detail__icon">
                                <Icon>
                                    <LocalShippingIcon></LocalShippingIcon>
                                </Icon>
                                <Typography>Envios a todo el pais</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemDetail;
