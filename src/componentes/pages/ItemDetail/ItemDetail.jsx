import Counter from "../../common/Counter/Counter";

const ItemDetail = ({ item, agregarAlCarrito }) => {
    return (
        <>
            <div className="item__detail__container">
                <img src={item.imageUrl} alt="" />
                <h3>{item.title}</h3>
                <h4>${item.price}</h4>
                <div className="contador">
                    <Counter
                        stock={item.stock}
                        agregarAlCarrito={agregarAlCarrito}
                    />
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
