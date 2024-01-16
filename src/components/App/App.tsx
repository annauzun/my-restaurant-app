
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import HomePage from "components/HomePage"
import RestaurantPage from "components/Restaurant/RestaurantPage"
import Cart from "components/Cart"

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="restaurant/:slug" element={<RestaurantPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
