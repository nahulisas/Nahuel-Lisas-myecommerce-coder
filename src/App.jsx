import Navbar from "./componentes/layout/Navbar/Navbar";
import ItemListContainer from "./componentes/pages/ItemListContainer/ItemListContainer";

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer greeting="Binvenidos a Coder Shop" />
        </>
    );
}

export default App;
