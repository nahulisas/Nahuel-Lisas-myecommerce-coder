import Card from "../../common/Card/Card";
import "./itemlist.css";

export const ItemList = ({ myProducts, agregarAlCarrito }) => {
    return (
        <>
            <div className="title">
                <h2>Mis Productos</h2>
            </div>
            <div className="product__container">
                {myProducts.map((producto) => (
                    <Card
                        key={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.imageUrl}
                        stock={producto.stock}
                        id={producto.id}
                        quantity={producto.quantity}
                        addToCart={() => agregarAlCarrito(producto)}
                    />
                ))}
            </div>
        </>
    );
};
