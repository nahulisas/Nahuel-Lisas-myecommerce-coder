import Card from "../../common/Card/Card";
import "./itemlist.css";

export const ItemList = ({ myProducts, agregarAlCarrito }) => {
    return (
        <>
            <div className="title">
                <h2>Mis Productos</h2>
            </div>
            <div className="product__container">
                {myProducts.map(({ id, price, title, imageUrl, stock }) => (
                    <Card
                        key={id}
                        title={title}
                        price={price}
                        image={imageUrl}
                        stock={stock}
                        id={id}
                        addToCart={() =>
                            agregarAlCarrito({
                                id,
                                price,
                                title,
                                imageUrl,
                                stock,
                                quantity: 1,
                            })
                        }
                    />
                ))}
            </div>
        </>
    );
};
