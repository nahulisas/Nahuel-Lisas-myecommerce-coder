import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import CartContext from "../../../context/CartContext/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

export default function CustomizedBadges() {
    const { cart } = useContext(CartContext);

    // definimos la cantidad de items que se encuentran en nuestro carrito
    const totalInCart = cart.reduce((acum, producto) => {
        return acum + producto.quantity;
    }, 0);

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={totalInCart} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}
