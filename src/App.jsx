import Navbar from "./componentes/layout/Navbar/NavbarContainer";
import CartContainer from "./componentes/pages/Cart/CartContainer";
import ItemDetailContainer from "./componentes/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./componentes/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext/CartContext";
import CheckoutContainer from "./componentes/pages/Checkout/CheckoutContainer";

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <CartContextProvider>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/cart" element={<CartContainer />} />
                            <Route
                                path="/itemDetail/:id"
                                element={<ItemDetailContainer />}
                            />
                            <Route
                                path="/category/:categoryName"
                                element={<ItemListContainer />}
                            />
                            <Route
                                path="/checkout"
                                element={<CheckoutContainer />}
                            />
                        </Routes>
                    </CartContextProvider>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
