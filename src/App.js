import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Signup } from "./pages/Signup/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Shop } from "./pages/Shop/Shop";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { useEffect, useState } from "react";
import { ProfileOptions } from "./components/ProfileOptions/ProfileOptions";
import { Checkout } from "./pages/Checkout/Checkout";
import { useStateValue } from "./StateProvider";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [{ showProfileOptions }, dispatch] = useStateValue();
  return (
    <div
      onClick={() =>
        showProfileOptions &&
        dispatch({ type: "PROFILE_OPTIONS_VIEW", status: false })
      }
    >
      {showProfileOptions && <ProfileOptions />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <Signup />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Navbar />
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path="/product-details"
            element={
              <>
                <Navbar />
                <ProductDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
