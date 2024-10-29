const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="item__detail__container">
                <img src={item.imageUrl} alt="" />
                <h3>{item.title}</h3>
                <h4>${item.price}</h4>
            </div>
        </>
    );
};

export default ItemDetail;
