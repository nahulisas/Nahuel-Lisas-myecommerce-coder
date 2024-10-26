import Card from "../../common/Card/Card";
import "./itemlist.css";

export const ItemList = ({ myProducts }) => {
    return (
        <>
            <h2>Mis Productos</h2>
            <div className="product__container">
                {myProducts.map(({ id, title, image, price }) => (
                    <Card
                        className="card"
                        key={id}
                        title={title}
                        images={image}
                        price={price}
                    />
                ))}
            </div>
        </>
    );
};
