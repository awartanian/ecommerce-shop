import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/productActions";
import { motion } from "framer-motion";
import spinner from "../../../images/spinner.gif";
import "../ProductListing.scss";
import "../ProductDetails.scss";

import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const DiscountedProducts15 = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setProducts());
  }, [dispatch]);

  return (
    <div>
      {!products.length ? (
        <div className="Details-spinner">
          <img src={spinner} alt="Loading spinner" />
        </div>
      ) : (
        <>
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="Products-Container"
          >
            <section className="shop-top-container">
              <div onClick={() => history.goBack()} className="back-to-home">
                <IoChevronBack />
                <span>back</span>
              </div>
            </section>
            <section className="products-container">
            {products.map((products) => {
              const { id, title, image, price } = products;
              return (
                <div className="Card" key={id}>
                  <Link to={`/product15/${id}`}>
                    <div className="card-image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="card-title">{title}</div>
                    <div>
                      <div className="card-price-original">€ {price}</div>
                      <div className="card-price-discounted">
                        € {(price - 0.15 * price).toFixed(2)}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            </section>
          </motion.div>
        </>
      )}
    </div>
  );
};
