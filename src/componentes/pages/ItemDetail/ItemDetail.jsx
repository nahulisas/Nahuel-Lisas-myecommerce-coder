import { Box, Icon, Typography } from "@mui/material";
import Counter from "../../common/Counter/Counter";
import "./itemdetail.css";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

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
                        <div className="contador">
                            <Counter
                                stock={item.stock}
                                agregarAlCarrito={agregarAlCarrito}
                                totalQuantity={totalQuantity(item.id)}
                            />
                            {totalQuantity(item.id)}
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
