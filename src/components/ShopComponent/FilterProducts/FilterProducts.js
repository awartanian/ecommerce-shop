import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../../redux/actions/productActions";
import "./FilterProducts.scss";

const FilterProducts = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  return (
    <div className="products-filter-container">
      <h4>Search products by Category</h4>

      <select
        onChange={(e) => dispatch(filterProducts(products, e.target.value))}
      >
        <option value="ALL">ALL</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default FilterProducts;
