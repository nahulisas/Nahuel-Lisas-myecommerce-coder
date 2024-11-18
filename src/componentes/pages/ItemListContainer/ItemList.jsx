import Card from "../../common/Card/Card";
import { CircularProgress } from "@mui/material";
import "./itemlist.css";

export const ItemList = ({
    myProducts,
    agregarAlCarrito,
    totalQuantity,
    loading,
}) => {
    return (
        <div className="item_container">
            <div className="title">
                <h2>Mis Productos</h2>
            </div>

            <div className="product__container">
                {loading && <CircularProgress />}
                {myProducts.map((producto) => (
                    <Card
                        key={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.imageUrl}
                        stock={producto.stock}
                        id={producto.id}
                        quantityInCart={totalQuantity(producto.id)}
                        addToCart={() => agregarAlCarrito(producto)}
                    />
                ))}
            </div>
        </div>
    );
};
