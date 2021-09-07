import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/productActions";
import { TrendingProductComponent } from "./TrendingProductComponent";
import "./Trending.scss";

const Trending = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products?limit=12")
      .catch((err) => {
        console.error(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="trending-section">
      <h3>Trending Products</h3>
      <p>Browse a list of our most popular and trending products in 2021</p>
      <div className="trending-section-wrapper">
        {products.map((product, i) => (
          <TrendingProductComponent
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
