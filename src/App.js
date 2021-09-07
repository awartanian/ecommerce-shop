import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/Header/Nav/NotFound";
import Home from "./components/Home/Home";
import { ProductListing } from "./components/ShopComponent/ProductListing";
import { ProductDetails } from "./components/ShopComponent/ProductDetails";
import ReviewsPage from "./components/Home/ReviewsComponent/ReviewsPage/ReviewsPage";
import { AnimatePresence } from "framer-motion";
import Info from "./components/InfoComponent/Info";
import Footer from "./components/Footer/Footer";
import { DiscountedProducts15 } from "./components/ShopComponent/DiscountedProducts/DiscountedProducts15";
import { DiscountedProduct15 } from "./components/ShopComponent/DiscountedProducts/DiscountedProduct15";
import TermsAndConditions from "./components/OtherPages/T&C/TermsAndConditions";
import PrivacyPolicy from "./components/OtherPages/T&C/PrivacyPolicy";
import Contact from "./components/Contact/Contact";
import { Cart } from "./components/Cart/Cart";
import OurTeam from "./components/OtherPages/OurTeam/OurTeam";
import Returns from "./components/OtherPages/T&C/Returns";
import Shipping from "./components/OtherPages/Shipping/Shipping";
import Vouchers from "./components/OtherPages/Vouchers/Vouchers";
import { OutOfStock } from "./components/OtherPages/OutOfStock/OutOfStock";
import Checkout from "./components/Cart/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Header />
          <AnimatePresence>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/ecommerce-shop/" exact component={Home} />
              <Route path="/cart/" exact component={Cart} />
              <Route path="/cart/:productId" exact component={Cart} />
              <Route path="/outofstock/" exact component={OutOfStock} />
              <Route path="/productlisting" exact component={ProductListing} />
              <Route
                path="/product/:productId"
                exact
                component={ProductDetails}
              />
              <Route path="/notfound" exact component={NotFound} />
              <Route path="/reviews" exact component={ReviewsPage} />
              <Route
                path="/discount15"
                exact
                component={DiscountedProducts15}
              />
              <Route
                path="/product15/:productId"
                exact
                component={DiscountedProduct15}
              />
              <Route path="/terms" exact component={TermsAndConditions} />
              <Route path="/privacy" exact component={PrivacyPolicy} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/ourteam" exact component={OurTeam} />
              <Route path="/returns" exact component={Returns} />
              <Route path="/shipping" exact component={Shipping} />
              <Route path="/vouchers" exact component={Vouchers} />
              <Route path="/checkout" exact component={Checkout} />
            </Switch>
          </AnimatePresence>
        </main>
        <Info />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
