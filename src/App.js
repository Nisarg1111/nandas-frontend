import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Signup } from "./pages/Signup/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Shop } from "./pages/Shop/Shop";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { useEffect } from "react";
import { ProfileOptions } from "./components/ProfileOptions/ProfileOptions";
import { Checkout } from "./pages/Checkout/Checkout";
import { useStateValue } from "./StateProvider";
import { Rental } from "./pages/Rental/Rental";
import { Settings } from "./pages/Settings/Settings";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { BuildCustomArt } from "./pages/BuildCustomArt/BuildCustomArt";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { AboutUs } from "./pages/AboutUs/AboutUs";

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
      <BrowserRouter>
        {showProfileOptions && <ProfileOptions />}
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
          <Route
            path="/rental"
            element={
              <>
                <Navbar />
                <Rental />
                <Footer />
              </>
            }
          />
          <Route
            path="/settings/:page"
            element={
              <>
                <Navbar />
                <Settings />
                <Footer />
              </>
            }
          />
          <Route
            path="/dashboard/:page"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/build-custom-art"
            element={
              <>
                <Navbar />
                <BuildCustomArt />
              </>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <>
                <Navbar />
                <ForgotPassword />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Navbar />
                <AboutUs />
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
