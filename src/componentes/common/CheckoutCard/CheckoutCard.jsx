import "./checkoutcard.css";

const CheckoutCard = ({ item }) => {
    return (
        <div className="check_card_container" key={item.id}>
            <div className="check_card">
                <img src={item.imageUrl} alt="" />
                <h3>{item.title}</h3>
            </div>
        </div>
    );
};

export default CheckoutCard;
