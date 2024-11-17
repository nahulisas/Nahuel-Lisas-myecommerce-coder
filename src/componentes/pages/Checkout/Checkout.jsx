import "./checkout.css"
const Checkout = ({formFunction, capturarInfo}) => {
  return (
   
    <div className="checkout__container">
        <h2>Checkout</h2>
        <div className="payment__info">
            <form action="" onSubmit={formFunction}>
                <input 
                type="text" 
                id="name"
                name="name"
                onChange={capturarInfo}
                />
                <input 
                type="text" 
                name="email"
                onChange={capturarInfo}
                />
                <input 
                type="text" 
                name="phoneNumber"
                onChange={capturarInfo}
                />
                <button type="submit">Comprar</button>
                
            </form>
        </div>
        <div className="order__sumary">
          
        </div>
    </div>
  )
}

export default Checkout