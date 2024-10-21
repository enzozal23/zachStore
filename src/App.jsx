import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartList from "./componentes/CartList.jsx";
import CheckOut from "./componentes/CheckOut.jsx";
import ItemDatailContainer from "./componentes/ItemDatailContainer.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx";
import Navbar from "./componentes/Navbar.jsx";
import { CartProvider } from "./contexts/Cart";
import Carousel from "./componentes/CarouselMain.jsx";
import ProductCarousel from "./componentes/ProductCarousel.jsx";
import { ProductsProvider } from "./contexts/Products.jsx";
import Footer from "./componentes/Footer.jsx";
import ContactForm from "./componentes/ContactForm.jsx";
import AboutUs from "./componentes/AboutUs.jsx";
import WhatsAppButton from "./componentes/WhatsAppButton.jsx";










function App() {

  return (


    <CartProvider>
      <ProductsProvider>
        <BrowserRouter>

          <Navbar />

          <Carousel />

          <Routes>

            <Route path="/" element={<ProductCarousel />}></Route>
            <Route path="/contact" element={<ContactForm />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/item/:id" element={<ItemDatailContainer />}></Route>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />}></Route>
            <Route path="/CartList" element={<CartList />} />
            <Route path="/finalizarCompra" element={<CheckOut />}></Route>
          </Routes>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
