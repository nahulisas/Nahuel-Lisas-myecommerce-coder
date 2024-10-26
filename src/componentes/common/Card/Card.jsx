import "./card.css";

const Card = ({ title, price, images }) => {
    return (
        <div className="card">
            <img src={images} alt="" />
            <div className="card__content">
                <h3>{title}</h3>
            </div>
            <div className="card__footer">
                <h3>{price}</h3>
                <button>Agregar al carrito</button>
                <button>Ver</button>
            </div>
        </div>
    );
};

export default Card;
