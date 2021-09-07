import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams, useLocation, Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import MessageBox from "./MessageBox";
import "./Cart.scss";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";

export const Cart = () => {
  const location = useLocation();
  const { productId } = useParams();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/checkout");
  };

  const backToShopHandler = () => {
    history.push(`/productlisting`);
  };

  const price = cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2);
  const priceVat = (price - 0.81 * price).toFixed(2);
  const num = Number(priceVat);
  const roundedString = num.toFixed(2);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className={"cart-container"}>
        <div className="cart-top-navigation">
          <div className="cart-back-to-shop" onClick={backToShopHandler}>
            <div className="cart-arrow">
              <IoIosArrowDropleftCircle />
            </div>
            <div>continue shopping</div>
          </div>
          <div className="middle-line"></div>
          <div>cart</div>
          <div className="middle-line"></div>
          <div>checkout</div>
        </div>
        <div className="cart-top-navigation-mobile">
          <div className="back-to-shop" onClick={backToShopHandler}>
            <div className="cart-arrow">
              <IoIosArrowDropleftCircle />
            </div>
            <div>continue shopping</div>
          </div>
          <button onClick={checkoutHandler} disabled={cartItems.length === 0}>
            proceed to checkout
          </button>
        </div>
        {cartItems.length === 0 ? (
          <MessageBox />
        ) : (
          <div className="cart-wrapper">
            <div className="cart-items-wrapper">
              {cartItems.map((item) => (
                <div key={item.product} className="cart-card">
                  <div className="cart-card-row">
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-content-wrap">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                      <div className="option">
                        <span>quantity</span>
                        <select
                          className="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div className="price">
                        <span>price</span>
                        <span className="price-am">€ {item.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <MdDeleteForever className="delete" />
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-order-summary">
              <h3 className="order-title">order summary</h3>
              <div className="total-price">
                <h3>Total price: </h3>
                <span className="price-amount">€ {price}</span>
              </div>
              <div className="shipping-costs">
                <h3>Shipping costs:</h3>
                <span>€ 0,00</span>
              </div>
              <div className="includes-vat">
                <h3 className="vat-title">includes 19% VAT:</h3>
                <span className="vat-amount">€ {roundedString}</span>
              </div>
              <div className="total-price-bottom">
                <h3>Total price incl. VAT</h3>
                <span>€ {price}</span>
              </div>
              <div>
                <button
                  onClick={checkoutHandler}
                  disabled={cartItems.length === 0}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
