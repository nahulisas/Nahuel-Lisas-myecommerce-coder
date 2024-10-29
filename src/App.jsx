import Navbar from "./componentes/layout/Navbar/NavbarContainer";
import CartContainer from "./componentes/pages/Cart/CartContainer";
import ItemDetailContainer from "./componentes/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./componentes/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
