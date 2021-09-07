import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import { IoChevronBack } from "react-icons/io5";
import FilterProducts from "./FilterProducts/FilterProducts";
import { motion } from "framer-motion";
import spinner from "../../images/spinner.gif";
import "./ProductListing.scss";
import { setProducts } from "../../redux/actions/productActions";

export const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const filterProducts = useSelector(
    (state) => state.allProducts.filteredItems
  );
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
              <FilterProducts />
            </section>
            <section className="products-container">
              <ProductComponent filterProducts={filterProducts} />
            </section>
          </motion.div>
        </>
      )}
    </div>
  );
};
